import React, { useState } from "react";
import sendLight from "../../assets/icons/Send_light.svg";
import sendBlue from "../../assets/icons/Send_blue.svg"


interface AIChatInputProps {
  onSendMessage: (message: string) => void;
}

export default function AIChatInput({ onSendMessage }: AIChatInputProps) {
  const [inputValue, setInputValue] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      setIsSending(true); // Change image to "sending" state
      onSendMessage(inputValue);
      setInputValue("");

      // Simulate sending delay
      setTimeout(() => {
        setIsSending(false); // Reset to original image
      }, 3000); // Increased delay for better visibility
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative mx-auto pt-2 mb-6">
      <div className="relative">
        <input
          type="text"
          id="AiChat"
          className="flex flex-col items-center w-[368px] h-12 border border-grey-400 rounded-[8px] font-normal placeholder-text-200 text-xs p-2 placeholder-start"
          dir="rtl"
          placeholder="چطور میتوانم کمک کنم..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          type="submit"
          className="absolute left-3 top-1/2 transform -translate-y-1/2"
        >
          <img
            src={isSending ? sendLight : sendBlue} // Show the appropriate image
            alt="icon"
            className="h-8 w-8"
          />
        </button>
      </div>
    </form>
  );
}