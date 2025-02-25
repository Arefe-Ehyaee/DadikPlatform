import close from "../../assets/icons/x-closeSearch.svg"

interface SearchBadgeProps {
    text: string;
}

export default function SearchBadge({text}:SearchBadgeProps) {
  return (
    <div className='flex flex-row items-center gap-2 bg-secondary-50 w-fit text-secondary-500 font-myYekanRegular text-sm rounded-md pr-3 px-2 py-[1.5px]'>
      <p>{text}</p>
      <button>
      <img src={close} alt="close" className="w-3 h-3" />
      </button>
    </div>
  )
}
