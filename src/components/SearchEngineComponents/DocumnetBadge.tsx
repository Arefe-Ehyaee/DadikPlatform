interface DocumnetBadgeProps{
  type: "تفسیر" | "تنفیذ" | "منسوخه" | "نامه اصلاحی" ;
}

function getBgColor(type: DocumnetBadgeProps["type"]): string {
  switch (type) {
    case "تفسیر":
      return "bg-warning-200 text-warning-500";
    case "تنفیذ":
      return "bg-neutral-100 text-text-500";
    case "منسوخه":
      return "bg-error-300 text-[#F44336]";
    case "نامه اصلاحی":
      return "bg-success-200 text-success-800";
    default:
      return "bg-gray-100"; 
  }
}



export default function DocumnetBadge({type}:DocumnetBadgeProps) {

  return (
    <div className={`${getBgColor(type)} text-text-500 font-myYekanRegular text-sm rounded px-[7px] py-[2px]`}>
      {type}
    </div>
  )
}
