import { useNavigate } from "react-router-dom";
import dadikHeader from "../../assets/images/newBack.png";

export default function BannerOne() {
    const navigate = useNavigate();
  return (
    <div className="relative flex justify-center">
      <img
        src={dadikHeader}
        alt="dadikHeader"
        className="w-full min-w-[1104px] h-[152px]"
      />
      <div className="absolute inset-0 flex flex-col text-primary-800 items-start">
        <h1 className="text-xl font-myYekanDemibold mt-1 mr-[140px] lg-xl:mr-[640px]">
          دادیک دستیاری هوشمند برای دسترسی راحت به قوانین و مقررات
        </h1>
        <div className="mr-[133px] lg-xl:mr-[640px] mb-5">
          <button className="text-sm font-myYekanRegular mt-3 relative z-20" onClick={() => navigate("/searchEngine")}>
            جستجوی پیشرفته در کلیه قوانین و مقررات به صورت طبقه بندی شده
          </button>
          <p className="text-sm font-myYekanRegular my-4">
            صدور لایحه دفاعیه توسط هوش مصنوعی و امکان بارگذاری پرونده جهت تحلیل
            و پاسخ دقیق تر
          </p>
          <p className="text-sm font-myYekanRegular">
            ماشین های هوشمند جهت محاسبه دقیق فرمول های قوانین و مقررات بصورت
            آنلاین
          </p>
        </div>
      </div>

      <div className='absolute font-myYekanMedium text-sm text-white inset-0 mr-[19px] mt-2'>
      سکوی حقوقی دادیک
      </div>
      {/* <div className="absolute inset-0 flex justify-between items-center px-4">
      <button className="w-12 h-12 rounded-full bg-white text-white flex items-center justify-center shadow-lg mr-12 ">
        <Moreright></Moreright>
      </button>

      <button className="w-12 h-12 rounded-full bg-white text-white flex items-center justify-center shadow-lg ml-12">
        <MoreLeft></MoreLeft>
      </button>
    </div> */}
    </div>
  );
}
