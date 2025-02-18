interface DepartmentItemProps {
  title: string;
  logo: string;
  onSelect?: (department: string) => void;
}


export default function DepartmentItem({ title, logo, onSelect }: DepartmentItemProps) {

  return (
    <button type="button" className="flex flex-row gap-2 items-center text-right font-myYekanRegular text-sm text-text-500 w-[288px] h-12 rounded-lg mx-4 px-2 py-1 hover:bg-neutral-50 mt-2" onClick={() => onSelect && onSelect(title)}>
      <img src={logo} alt={title} className="h-6 w-6" />
      <p>{title}</p>
    </button>
  )
}
