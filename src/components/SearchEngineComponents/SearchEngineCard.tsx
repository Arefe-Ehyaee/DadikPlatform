import bakhshName from "../../assets/images/BakhshName.png";
import tabsare from "../../assets/images/Tabsare.png";
import daadname from "../../assets/images/DaadName.png";
import eblaghie from "../../assets/images/Eblaghie.png";
import { useNavigate } from "react-router-dom";

interface SearchEngineCardProps {
  department: string;
  document: "تفسیر" | "تنفیذ" | "منسوخه" | "نامه اصلاحی";
  documentType: "ابلاغیه" | "دادنامه" | "بخشنامه" | "تبصره";
  documentDate: string;
  startDate: string;
  endDate: string;
  title: string;
  documnetNumber: string;
}


export default function SearchEngineCard({ department, document, documentType, documentDate, title, documnetNumber }: SearchEngineCardProps) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/documentDetail/${documentType}`, {
      state: { documentDate, documnetNumber, title },
    });
  };

  return (
    <button className="bg-background-550 min-w-[1056px] h-[122px] rounded-lg p-3 mb-4 flex flex-row items-center gap-3" onClick={handleCardClick}>

      {documentType === "بخشنامه" && (
        <img src={bakhshName} alt="" className="w-[98px] h-[98px]" />
      )}

      {documentType === "تبصره" && (
        <img src={tabsare} alt="" className="w-[98px] h-[98px]" />
      )}

      {documentType === "ابلاغیه" && (
        <img src={eblaghie} alt="" className="w-[98px] h-[98px]" />
      )}

      {documentType === "دادنامه" && (
        <img src={daadname} alt="" className="w-[98px] h-[98px]" />
      )}


      <div className="flex flex-col">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row items-center gap-3">
            <div className="text-text-500 font-myYekanFaNumMedium text-sm text-right text-clip line-clamp-1">
              {title}
            </div>
          </div>
          {/* <div className="flex flex-row items-center gap-3">
            <p className="text-text-300 font-myYekanFaNumRegular text-sm">{`شماره سند: ${documnetNumber}`}</p>
            <p className="text-text-300 font-myYekanFaNumRegular text-sm">{`تاریخ سند: ${documentDate}`}</p>
          </div> */}
        </div>
        <div className="text-text-500 text-justify font-myYekanRegular text-sm min-w-[924px] leading-6 mt-1 text-clip line-clamp-2">
          رأی شماره ۲۵۸۷۴۱۰هیأت عمومی دیوان عدالت اداری با موضوع: بطلان اطلاق
          بند ۷ بخشنامه شماره ۱۳۵۳۰ مورخ ۱۳۸۴/۷/۲۷ سازمان امور مالیاتی کشور راجع
          به فصل مالیات بر درآمد املاک قانون مالیات های مستقیم و بند ۲ رأی هیأت
          عمومی شورای عالی مالیاتی به شماره ۱۱۸۱۸/۴/۳۰ مورخ ۱۳۷۶/۱۱/۱۹ در مورد
          املاکی که به صورت زمین           رأی شماره ۲۵۸۷۴۱۰هیأت عمومی دیوان عدالت اداری با موضوع: بطلان اطلاق
          بند ۷ بخشنامه شماره ۱۳۵۳۰ مورخ ۱۳۸۴/۷/۲۷ سازمان امور مالیاتی کشور راجع
          به فصل مالیات بر درآمد املاک قانون مالیات های مستقیم و بند ۲ رأی هیأت
          عمومی شورای عالی مالیاتی به شماره ۱۱۸۱۸/۴/۳۰ مورخ ۱۳۷۶/۱۱/۱۹ در مورد
          املاکی که به صورت زمین
        </div>
        <div className="flex flex-row gap-6 mt-2">
        <p className="text-text-300 font-myYekanFaNumRegular text-sm">{`شماره سند: ${documnetNumber}`}</p>
        <p className="text-text-300 font-myYekanFaNumRegular text-sm">{`تاریخ سند: ${documentDate}`}</p>
        </div>

      </div>
    </button>
  );
}
