interface ChatDepartmentButtonProps {
  text: string;
  departmentlogo: string;
  onClick?: () => void;
}

export default function ChatDepartmentButton({
  text,
  departmentlogo,
  onClick,
}: ChatDepartmentButtonProps) {
  return (
    <button className="my-auto" onClick={onClick}>
      <div className="w-[88px] h-[108px] p-2 flex flex-col bg-neutral-50 rounded-lg">
        <img src={departmentlogo} alt="" className="h-12 w-12 mx-auto" />
        <div className="font-myYekanRegular leading-5 text-xs mt-1">{text}</div>
      </div>
    </button>
  );
}
