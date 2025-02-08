// src/contexts/WebSocketContext.tsx
import React, { createContext, useContext, useEffect, useRef, useState, ReactNode } from "react";

interface Message {
  id: string;
  text: string;
  type: "user" | "dadik";
  fileUrl?: string;
  fileName?: string;
  fileType?: "audio" | "image" | "document";
}

interface WebSocketContextProps {
  sendMessage: (message: any) => void;
  messages: Message[];
}

interface WebSocketProviderProps {
  children: ReactNode; // Explicitly define children
}

const WebSocketContext = createContext<WebSocketContextProps | undefined>(undefined);

export const WebSocketProvider: React.FC<WebSocketProviderProps> = ({ children }) => { // Use explicit props type
  const ws = useRef<WebSocket | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    // Initialize WebSocket connection
    ws.current = new WebSocket("wss://your-websocket-server-url");

    ws.current.onopen = () => {
      console.log("WebSocket connected");
    };

    ws.current.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.type === "message") {
        setMessages((prev) => [...prev, data.payload]);
      }
      // Handle other message types if necessary
    };

    ws.current.onclose = () => {
      console.log("WebSocket disconnected");
    };

    ws.current.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    // Cleanup on unmount
    return () => {
      ws.current?.close();
    };
  }, []);

  const sendMessage = (message: any) => {
    if (ws.current && ws.current.readyState === WebSocket.OPEN) {
      ws.current.send(JSON.stringify(message));
    } else {
      console.error("WebSocket is not open. Ready state:", ws.current?.readyState);
    }
  };

  return (
    <WebSocketContext.Provider value={{ sendMessage, messages }}>
      {children}
    </WebSocketContext.Provider>
  );
};

export const useWebSocket = (): WebSocketContextProps => {
  const context = useContext(WebSocketContext);
  if (!context) {
    throw new Error("useWebSocket must be used within a WebSocketProvider");
  }
  return context;
};
