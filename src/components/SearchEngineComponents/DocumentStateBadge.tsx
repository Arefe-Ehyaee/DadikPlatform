interface DocumentStateBadgeProps{
    state: "معتبر" | "حذف شده" | "منسوخ شده" ;
  }
  
  function getBgColor(state: DocumentStateBadgeProps["state"]): string {
    switch (state) {
      case "معتبر":
        return "bg-success-200 text-success-800";
      case "حذف شده":
        return "bg-error-300 text-red-500";
      case "منسوخ شده":
        return "bg-warning-200 text-warning-500";
      default:
        return "bg-gray-100"; 
    }
  }
  
  
  export default function DocumentStateBadge({state}:DocumentStateBadgeProps) {
  
    return (
        <div className={`${getBgColor(state)} font-myYekanRegular text-sm rounded px-[7px] py-[2px]`}>
        {state}
      </div>
    )
  }
  