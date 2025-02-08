// src/components/OnlineChatModal.tsx
import React, { useEffect, useRef, useState } from "react";
import whiteClose from "../../assets/icons/x-circle.svg";
import ChatDepartmentButton from "./ChatDepartmentButton";
import tax from "../../assets/images/tax.svg";
import taamin from "../../assets/images/taamin.svg";
import people from "../../assets/icons/onlineChatPeople.png";
import SupportUserMesage from "./SupportUserMesage";
import SupportMessage from "./Supportmessage";
import OnlineChatInput from "./OnlineChatInput";
import { getAnswerForQuestion } from "../../utils/OnlineChatQA";
import { useWebSocket } from "./WebSocketContext";

interface OnlineChatModalProps {
  onClick?: () => void;
}

interface Message {
  id: string;
  text: string;
  type: "user" | "dadik";
  fileUrl?: string;
  fileName?: string;
  fileType?: "audio" | "image" | "document";
}

export default function OnlineChatModal({ onClick }: OnlineChatModalProps) {
  const [clickedDepartments, setClickedDepartments] = useState<string[]>([]);
  const [localMessages, setLocalMessages] = useState<Message[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { sendMessage, messages: incomingMessages } = useWebSocket();

  // Sync incoming messages from WebSocket to localMessages
  useEffect(() => {
    if (incomingMessages.length > 0) {
      setLocalMessages((prev) => [...prev, ...incomingMessages]);
    }
  }, [incomingMessages]);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [localMessages]);

  const handleQuestionSelect = (question: string) => {
    const isAlreadyClicked = clickedDepartments.includes(question);

    if (!isAlreadyClicked) {
      const dadikResponse = getAnswerForQuestion(question);

      const userMessage: Message = { id: generateUUID(), text: question, type: "user" };
      const dadikMessage: Message = { id: generateUUID(), text: dadikResponse, type: "dadik" };

      setLocalMessages((prevMessages) => [...prevMessages, userMessage, dadikMessage]);
      setClickedDepartments((prev) => [...prev, question]);

      // Send the question to the server via WebSocket
      sendMessage({ type: "question", payload: userMessage });
    } else {
      const userMessage: Message = { id: generateUUID(), text: question, type: "user" };
      setLocalMessages((prevMessages) => [...prevMessages, userMessage]);

      // Send the question to the server via WebSocket
      sendMessage({ type: "question", payload: userMessage });
    }
  };

  const handleSendMessage = (
    message: string,
    file?: File | Blob,
    fileType?: "audio" | "image" | "document"
  ) => {
    if (!file && message.trim() === "") {
      return;
    }

    const newMessages: Message[] = [];
    const userMessage: Message = { id: generateUUID(), text: message, type: "user" };

    if (file) {
      const mockFileUrl = URL.createObjectURL(file);
      const fileMessage: Message = {
        id: generateUUID(),
        text: "file",
        type: "user",
        fileUrl: mockFileUrl,
        fileName: file instanceof File ? file.name : "recording.webm",
        fileType,
      };
      newMessages.push(fileMessage);

      // Send the file to the server via WebSocket
      sendMessage({ type: "file", payload: fileMessage });

      // Revoke URL after usage to free memory
      setTimeout(() => URL.revokeObjectURL(mockFileUrl), 30000);
    }

    if (message.trim() !== "") {
      newMessages.push(userMessage);
      // Send the message to the server via WebSocket
      sendMessage({ type: "message", payload: userMessage });
    }

    if (newMessages.length > 0) {
      const processingMessage: Message = {
        id: generateUUID(),
        text: "پاسخ: در حال پردازش...",
        type: "dadik",
      };
      newMessages.push(processingMessage);
      setLocalMessages((prevMessages) => [...prevMessages, ...newMessages]);

      // Simulate server response or handle via WebSocket
      // Here, we'll wait for a response from the server via WebSocket
      // For demonstration, using a timeout
      setTimeout(() => {
        const responseMessage: Message = {
          id: generateUUID(),
          text: "پاسخ: این پیام به طور خودکار پردازش شد!",
          type: "dadik",
        };
        setLocalMessages((prevMessages) => [
          ...prevMessages.slice(0, -1),
          responseMessage,
        ]);

        // Optionally, send the response to the server
        sendMessage({ type: "response", payload: responseMessage });
      }, 2000);
    }
  };

  // Utility function to generate unique IDs for messages
  const generateUUID = (): string => {
    return Math.random().toString(36).substring(2, 15);
  };

  return (
    <div
      className="w-[360px] min-h-[576px] max-h-[732px] rounded-lg flex flex-col bg-white"
      style={{
        boxShadow: "-4px 4px 16px 2px rgba(175, 175, 175, 0.32)",
      }}
    >
      <div className="flex flex-row justify-between items-center mb-4 h-14 bg-primary-600 px-4 rounded-t-lg shrink-0">
        <div className="text-white font-myYekanDemibold text-sm flex flex-row items-center gap-2">
          <img src={people} alt="people" />
          <p> کارشناسان آنلاین</p>
        </div>
        <button onClick={onClick}>
          <img src={whiteClose} alt="Close" />
        </button>
      </div>

      <div className="mb-6 px-4">
        <div className="text-text-500 font-myYekanMedium text-sm mb-1">
          مشاور آنلاین دادیک
        </div>
        <div className="text-text-200 text-xs font-myYekanRegular">
          خوش آمدید ! پاسخگوی سوالات شما هستیم.
        </div>
      </div>

      <div className="flex flex-col gap-2 mx-auto mb-3 px-4">
        <p className="text-text-400 text-sm font-myYekanRegular mb-4">
          حوزه سوال خود را انتخاب کنید
        </p>
        <div className="flex flex-row gap-8">
          <ChatDepartmentButton
            text="کار و رفاه اجتماعی"
            departmentlogo={tax}
            onClick={() => handleQuestionSelect("کار و رفاه اجتماعی")}
          />
          <ChatDepartmentButton
            text="سازمان امور مالیاتی"
            departmentlogo={tax}
            onClick={() => handleQuestionSelect("سازمان امور مالیاتی")}
          />
          <ChatDepartmentButton
            text="سازمان تامین اجتماعی"
            departmentlogo={taamin}
            onClick={() => handleQuestionSelect("سازمان تامین اجتماعی")}
          />
        </div>
      </div>

      <div className="flex-grow scrollbar-webkit overflow-x-hidden px-3">
        {localMessages.map((msg) => (
          <div key={msg.id}>
            {msg.type === "user" ? (
              <div>
                {msg.text && msg.text !== "file" && (
                  <SupportUserMesage text={msg.text} interaction={false} />
                )}

                {msg.fileUrl && (
                  <div style={{ marginTop: "8px" }}>
                    {msg.fileType === "audio" ? (
                      <audio
                        controls
                        src={msg.fileUrl}
                        style={{
                          borderRadius: "4px",
                          marginTop: "4px",
                        }}
                      >
                        Your browser does not support the audio element.
                      </audio>
                    ) : msg.fileType === "image" ? (
                      <img
                        src={msg.fileUrl}
                        alt={msg.fileName}
                        style={{
                          width: "80px",
                          height: "80px",
                          objectFit: "cover",
                          borderRadius: "4px",
                          boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
                        }}
                      />
                    ) : msg.fileType === "document" &&
                      msg.fileName?.toLowerCase().endsWith(".pdf") ? (
                      <div
                        style={{
                          border: "1px solid #ccc",
                          borderRadius: "4px",
                          padding: "10px",
                        }}
                      >
                        <iframe
                          src={msg.fileUrl}
                          title={msg.fileName}
                          width="100%"
                          height="500px"
                          style={{
                            border: "none",
                            borderRadius: "4px",
                          }}
                        ></iframe>
                        <a
                          href={msg.fileUrl}
                          download={msg.fileName}
                          style={{
                            color: "#3B82F6",
                            fontSize: "12px",
                            textDecoration: "underline",
                            display: "flex",
                            alignItems: "center",
                            gap: "4px",
                            marginTop: "8px",
                          }}
                        >
                          📎 {msg.fileName}
                        </a>
                      </div>
                    ) : (
                      <a
                        href={msg.fileUrl}
                        download={msg.fileName}
                        style={{
                          color: "#3B82F6",
                          fontSize: "12px",
                          textDecoration: "underline",
                          display: "flex",
                          alignItems: "center",
                          gap: "4px",
                        }}
                      >
                        📎 {msg.fileName}
                      </a>
                    )}
                  </div>
                )}
              </div>
            ) : (
              <SupportMessage text={msg.text} />
            )}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <OnlineChatInput onSendMessage={handleSendMessage} />
    </div>
  );
}
