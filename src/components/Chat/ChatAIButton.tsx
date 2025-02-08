import React from "react";
import chat from "../../assets/icons/newIcons/chatAI.svg";

interface ChatAIButtonProps {
  onClick: () => void;
}

export default function ChatAIButton({ onClick }: ChatAIButtonProps) {
  return (
    <button className="bg-primary-500 w-[169px] h-10 rounded-lg p-2 mt-4" onClick={onClick}>
      <div className="flex flex-row items-center gap-1">
        <img src={chat} alt="chat" />
        <span className="text-sm font-myYekanDemibold text-white">چت با هوش مصنوعی</span>
      </div>
    </button>
  );
}
