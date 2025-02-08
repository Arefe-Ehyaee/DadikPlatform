import bakhshName from "../../assets/images/Frame 1000007158.png";
import SearchEngineBadge from "./DepartmentBadge";
import DocumnetBadge from "./DocumnetBadge";

interface SearchEngineCardProps{
  department: string;
  document: "تفسیر" | "تنفیذ" | "منسوخه" | "نامه اصلاحی" ;
}

export default function SearchEngineCard({department, document}:SearchEngineCardProps) {
  return (
    <button className="bg-background-550 min-w-[1056px] h-[122px] rounded-lg p-3 mb-4 flex flex-row items-center gap-3">
      <img src={bakhshName} alt="" className="w-24 h-24" />

      <div className="flex flex-col">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row items-center gap-3">
            <div className="text-text-500 font-myYekanFaNumMedium text-sm">
              شماره سند:123456
            </div>
            <div className="text-text-500 font-myYekanRegular text-sm">
              باب چهارم فصل دوم نام فصل
            </div>
          </div>
          {/* <div className="flex flex-row items-center gap-3">
            <SearchEngineBadge
              department={department}
            ></SearchEngineBadge>
            <DocumnetBadge type={document}></DocumnetBadge>
          </div> */}
        </div>
        <div className="text-text-500 text-right font-myYekanRegular text-sm min-w-[924px] leading-6 mt-1">
          رأی شماره ۲۵۸۷۴۱۰هیأت عمومی دیوان عدالت اداری با موضوع: بطلان اطلاق
          بند ۷ بخشنامه شماره ۱۳۵۳۰ مورخ ۱۳۸۴/۷/۲۷ سازمان امور مالیاتی کشور راجع
          به فصل مالیات بر درآمد املاک قانون مالیات های مستقیم و بند ۲ رأی هیأت
          عمومی شورای عالی مالیاتی به شماره ۱۱۸۱۸/۴/۳۰ مورخ ۱۳۷۶/۱۱/۱۹ در مورد
          املاکی که به صورت زمین
        </div>
        <div className="text-text-300 text-right text-sm font-myYekanFaNumRegular">
          تاریخ سند 1403/1/16
        </div>
      </div>
    </button>
  );
}
