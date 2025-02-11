import dadikHeader from "../../assets/images/newBack.png";
import BannerNextButton from "./BannerNextButton";
import BannerPreviousButton from "./BannerPreviousButton";
import bannerCircle from "../../assets/icons/bannerWhiteCircle.svg"
import address from "../../assets/icons/webAddress.svg"
import partOne from "../../assets/icons/bannerPart1.svg"
import partTwo from "../../assets/icons/bannerPartTwo.svg"
import { useState } from "react";
import BannerTwo from "./BannerTwo";
import BannerThree from "./BannerThree";
import BannerFour from "./BannerFour";
import BannerOne from "./BannerTwo";

export default function BannerFive() {
  const [current, setCurrent] = useState(0);
  const banners = [BannerOne, BannerTwo, BannerThree, BannerFour, BannerFive];
  const totalSlides = banners.length;
  return (
    <div className="relative flex justify-center bg-primary-100 rounded-2xl min-w-[1104px] h-[154px]">
      <div className="absolute bg-primary-600 min-w-[416px] h-[154px] right-0 
  overflow-hidden rounded-r-2xl rounded-l-[77px] pl-[50px]">
      </div>

      <img src={partOne} alt="partOne" className="absolute right-[172px] bottom-[30px] z-10 h-[144px] w-[144px]" />
      <img src={partTwo} alt="partOne" className="absolute right-[117px] bottom-4 z-10 h-[109px] w-[109px]" />
      <img src={bannerCircle} alt="partOne" className="absolute right-[110px] top-10 z-10 h-8 w-8" />
      <img src={bannerCircle} alt="partOne" className="absolute right-[290px] top-8 z-10 h-8 w-8" />
      <img src={address} alt="partOne" className="absolute right-[170px] top-20 z-10 w-[209px] h-10" />


      <div className="absolute inset-0 flex flex-col text-primary-800 items-start mr-[440px]">
        <h1 className="text-xl font-myYekanDemibold mt-4 mb-3">
          دادیک با کلی جوایز ارزنده
        </h1>
        <div className="mb-3 mr-6">
          <p className="text-sm font-myYekanRegular flex flex-col gap-[14px]">
            <ul className="flex flex-row list-disc gap-[120px]">
              <li>قرعه کشی ماهانه بین کلیه اعضا</li>
              <li>کسب امتیاز کاربری و مزایا در تخفیفات</li>
            </ul>

            <ul className="flex flex-row list-disc gap-10">
              <li>جوایژ ویژه بین شرکت کنندگان در نظر سنجی ها </li>
              <li>هدایای کاربران با بهترین انتقادات و پیشنهادات</li>
            </ul>


          </p>

          <button className='w-[116px] h-6 bg-primary-500 font-myYekanRegular text-sm text-white rounded-[4px] mt-3 mb-[2px] relative z-20'>مشاهده جزئیات</button>
        </div>


      </div>

      <div className='absolute font-myYekanRegular text-sm text-white inset-0 mr-[16px] mt-4'>
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
      {/* <div className="absolute inset-0 flex justify-between items-center px-4">
      <button className="w-12 h-12 rounded-full bg-white text-white flex items-center justify-center shadow-lg mr-12 ">
        <Moreright></Moreright>
      </button>

      <button className="w-12 h-12 rounded-full bg-white text-white flex items-center justify-center shadow-lg ml-12">
        <MoreLeft></MoreLeft>
      </button>
    </div> */}
    </div>
  )
}
