import ChatIcon from "../../assets/icons/newIcons/ChatIcon.svg";
import { ReactComponent as Like } from "../../assets/icons/newIcons/like.svg";
import { ReactComponent as DisLike } from "../../assets/icons/newIcons/dislike.svg";
import { ReactComponent as Copy } from "../../assets/icons/newIcons/copyIcon.svg";

interface AImessageProps {
  text: string | null;
  interaction: boolean;
}

export default function AImessage({ text, interaction }: AImessageProps) {
  return (
    <div className="relative">
      <div className="bg-neutral-50 w-[368px] min-h-12 rounded-lg p-4 mx-auto">
        <div className="flex flex-row items-center gap-2">
          <img src={ChatIcon} alt="ChatIcon" />
          <div className="font-myYekanRegular text-text-400 text-sm">
            {text}
          </div>
        </div>
      </div>
      {interaction && (
        <div className=" flex flex-row gap-2 pt-2">
          <button>
            <Copy></Copy>
          </button>

          <button>
            <DisLike></DisLike>
          </button>

          <button>
            <Like></Like>
          </button>
        </div>
      )}
    </div>
  );
}
