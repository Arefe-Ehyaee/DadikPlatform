import userIcon from "../../assets/icons/newIcons/useeChatIcon.svg";

interface UserMessageProps {
  text: string | null;
  interaction: boolean;
}

export default function UserMessage({ text, interaction }: UserMessageProps) {
  return (
    <div className="my-4">
      <div className="rounded-lg mx-auto">
        <div className="flex flex-row items-center gap-2">
          <img src={userIcon} alt="ChatIcon" />
          <div className="font-myYekanRegular text-text-400 text-sm">
            {text}
          </div>
        </div>
      </div>
    </div>
  );
}
