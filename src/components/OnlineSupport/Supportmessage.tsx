import support from "../../assets/icons/support1.svg"

interface SupportMessageProps {
  text: string | null;

}

export default function SupportMessage({ text }: SupportMessageProps) {
  return (
    <div className="relative">
      <div className="bg-primary-50 w-[328px] min-h-[76px] rounded-lg p-2 mx-auto mt-3">
        <div className="flex flex-row gap-2">
          <img src={support} alt="ChatIcon" className="pb-7" />
          <div className="font-myYekanRegular text-text-500 text-xs leading-5 w-[272px] min-h-[60px]">
            {text}
          </div>
        </div>
      </div>

    </div>
  );
}
