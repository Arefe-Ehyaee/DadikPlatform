

interface SupportUserMesageProps {
  text: string | null;
  interaction: boolean;
}

export default function SupportUserMesage({ text, interaction }: SupportUserMesageProps) {
  return (
    <div className="flex justify-end w-full mt-3">
      <div className="rounded-lg bg-neutral-50 py-[10px] px-2 min-w-[102px]">
        <div className="font-myYekanRegular text-text-400 text-sm">
          {text}
        </div>
      </div>
    </div>
  );
}

