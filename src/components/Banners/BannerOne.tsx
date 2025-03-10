import { useNavigate } from "react-router-dom";
import BannerNextButton from "./BannerNextButton";
import BannerPreviousButton from "./BannerPreviousButton";
import partOne from "../../assets/icons/bannerPart1.svg"
import partTwo from "../../assets/icons/bannerPartTwo.svg"
import bannerCircle from "../../assets/icons/bannerWhiteCircle.svg"
import address from "../../assets/icons/webAddress.svg"
import BannerTwo from "./BannerTwo";
import BannerThree from "./BannerThree";
import BannerFour from "./BannerFour";
import BannerFive from "./BannerFive";
import { useState } from "react";

export default function BannerOne() {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const banners = [BannerOne, BannerTwo, BannerThree, BannerFour, BannerFive];
  const totalSlides = banners.length;

  return (
    <div className="relative flex justify-center bg-primary-100 rounded-2xl min-w-[1104px] h-[154px]">
      <div className="absolute bg-gradient-to-l from-[#3F51B5] to-[#233087] min-w-[416px] h-[154px] right-0 
  overflow-hidden rounded-r-2xl rounded-l-[77px] pl-[50px]">
      </div>

      <img src={partOne} alt="partOne" className="absolute right-[172px] bottom-[30px] z-10 h-[144px] w-[144px]" />
      <img src={partTwo} alt="partOne" className="absolute right-[117px] bottom-4 z-10 h-[109px] w-[109px]" />
      <img src={bannerCircle} alt="partOne" className="absolute right-[110px] top-10 z-10 h-8 w-8" />
      <img src={bannerCircle} alt="partOne" className="absolute right-[290px] top-8 z-10 h-8 w-8" />
      <img src={address} alt="partOne" className="absolute right-[170px] top-20 z-10 w-[209px] h-10" />


      <div className="absolute inset-0 flex flex-col text-primary-800 items-start mr-[440px]">
        <h1 className="text-xl font-myYekanDemibold mt-4 leading-[18px]">
          دادیک دستیاری هوشمند برای دسترسی راحت به قوانین و مقررات
        </h1>
        <div className="mb-3 mt-3">
          <button className="text-sm font-myYekanRegular relative z-20" onClick={() => navigate("/searchEngine")}>
            جستجوی پیشرفته در کلیه قوانین و مقررات به صورت طبقه بندی شده
          </button>
          <p className="text-sm font-myYekanRegular my-3">
            صدور لایحه دفاعیه توسط هوش مصنوعی و امکان بارگذاری پرونده جهت تحلیل و پاسخ دقیق تر
          </p>
          <p className="text-sm font-myYekanRegular">
            ماشین های هوشمند جهت محاسبه دقیق فرمول های قوانین و مقررات بصورت آنلاین
          </p>
        </div>
      </div>

      <div className="absolute font-myYekanRegular text-sm text-white inset-0 mr-4 mt-4">
        سکوی حقوقی دادیک
      </div>

      <div className="absolute font-myYekanMedium text-sm text-white left-5 bottom-2 flex flex-row gap-4">
        <BannerNextButton setCurrent={setCurrent}
          current={current}
          totalSlides={totalSlides} />
        <BannerPreviousButton setCurrent={setCurrent}
          current={current}
          totalSlides={totalSlides} />
      </div>
    </div>
  );
}
