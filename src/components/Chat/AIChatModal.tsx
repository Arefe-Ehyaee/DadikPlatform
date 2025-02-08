
import Questions from "./Questions";
import ChatInput from "./AIChatInput";
import AImessage from "./AImessage";
import { useEffect, useRef, useState } from "react";
import UserMessage from "./UserMesage";
import AIIcon from "../../assets/icons/AIchatIcon.svg"
import whiteClose from "../../assets/icons/x-circle.svg";

interface AIChatModalProps {
  onClick: () => void;
}

export default function AIChatModal({ onClick }: AIChatModalProps) {
  const [isQuestionSelected, setIsQuestionSelected] = useState(false);
  const [hasSentMessage, setHasSentMessage] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [messages, setMessages] = useState<
    { text: string; type: "user" | "ai" }[]
  >([]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleQuestionSelect = (question: string) => {
    setIsQuestionSelected(true);
    setSelectedAnswer(getAnswerForQuestion(question));

    const aiResponse = getAnswerForQuestion(question);
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: question, type: "user" },
      { text: aiResponse, type: "ai" },
    ]);

    setHasSentMessage(true);
  };

  const handleSendMessage = (message: string) => {
    if (message.trim() !== "") {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: message, type: "user" },
        { text: "پاسخ: در حال پردازش...", type: "ai" },
      ]);

      setHasSentMessage(true);

      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages.slice(0, prevMessages.length - 1),
          { text: "پاسخ: این پیام به طور خودکار پردازش شد!", type: "ai" },
        ]);
      }, 2000);
    }
  };

  const getAnswerForQuestion = (question: string) => {
    switch (question) {
      case "حقوق و دستمزد پایه بر اساس قوانین اداره کار چگونه تعیین می‌شود؟":
        return "پاسخ: حقوق و دستمزد پایه طبق قوانین اداره کار تعیین می‌شود و به عوامل مختلفی مانند سابقه کاری و نوع شغل بستگی دارد.";
      case "بیمه بیکاری چیست و چه شرایطی برای دریافت آن وجود دارد؟":
        return "بیمه بیکاری یکی از حمایت‌های اجتماعی است که به افرادی که به دلایلی خارج از کنترل خود شغل خود را از دست داده‌اند، کمک می‌کند تا در دوران بیکاری تا یافتن شغل جدید، حمایت مالی دریافت کنند.";
      case "چگونه می‌توانم مالیات بر درآمد خود را محاسبه و پرداخت کنم؟":
        return "پاسخ: برای محاسبه مالیات بر درآمد، باید میزان درآمد سالانه خود را محاسبه کرده و طبق جدول مالیاتی مربوطه، مالیات خود را محاسبه کنید.";
      default:
        return "پاسخ: لطفاً سوال خود را انتخاب کنید.";
    }
  };

  const shouldDisplayFAQ = !(isQuestionSelected || hasSentMessage);

  return (
    <div
      className="w-[400px] min-h-[480px] max-h-[697px] rounded-lg flex flex-col bg-white"
      style={{
        boxShadow:
          "-2px 4px 8px 2px rgba(168, 168, 168, 1), 2px 4px 8px 2px rgba(168, 168, 168, 1)",
      }}
    >

      <div className="flex flex-row justify-between items-center mb-4 h-14 bg-primary-600 px-4 rounded-t-lg shrink-0">
        <div className="text-white font-myYekanDemibold text-sm flex flex-row items-center gap-2">
          <img src={AIIcon} alt="AIIcon" />
          <p>هوش مصنوعی دادیک</p>
        </div>
        <button onClick={onClick}>
          <img src={whiteClose} alt="Close" />
        </button>
      </div>

      <div className="overflow-x-hidden overflow-y-auto scrollbar-webkit flex-grow px-4">
        <AImessage
          text={
            "سلام ! من هوش مصنوعی دادیک هستم . چطور می توانم به شما کمک کنم ؟"
          }
          interaction={false}
        />

        {messages.map((msg, index) => (
          <div key={index}>
            {msg.type === "user" ? (
              <UserMessage text={msg.text} interaction={false} />
            ) : (
              <AImessage text={msg.text} interaction={true} />
            )}
          </div>
        ))}

        {shouldDisplayFAQ && (
          <div className="flex flex-col gap-2 mx-auto my-8">
            <p className="text-text-400 text-sm font-myYekanRegular">
              سوالات متداول:
            </p>
            <Questions
              question="حقوق و دستمزد پایه بر اساس قوانین اداره کار چگونه تعیین می‌شود؟"
              onClick={() =>
                handleQuestionSelect(
                  "حقوق و دستمزد پایه بر اساس قوانین اداره کار چگونه تعیین می‌شود؟"
                )
              }
            />
            <Questions
              question="بیمه بیکاری چیست و چه شرایطی برای دریافت آن وجود دارد؟"
              onClick={() =>
                handleQuestionSelect(
                  "بیمه بیکاری چیست و چه شرایطی برای دریافت آن وجود دارد؟"
                )
              }
            />
            <Questions
              question="چگونه می‌توانم مالیات بر درآمد خود را محاسبه و پرداخت کنم؟"
              onClick={() =>
                handleQuestionSelect(
                  "چگونه می‌توانم مالیات بر درآمد خود را محاسبه و پرداخت کنم؟"
                )
              }
            />
          </div>
        )}

        <div ref={messagesEndRef} />


      </div>
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
}
