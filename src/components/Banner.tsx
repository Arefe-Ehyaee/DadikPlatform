import React from 'react'
import { ReactComponent as MoreLeft } from "../assets/icons/newIcons/chevron-left.svg";
import { ReactComponent as Moreright } from "../assets/icons/newIcons/chevron-right.svg";
import dadikHeader from "../assets/images/dadikBack.png";

export default function Banner() {
  return (
    <div className="relative  flex justify-center">
    <img
      src={dadikHeader}
      alt="dadikHeader"
      className="w-[1600px] h-[152px]"
    />
 
    {/* <div className='absolute inset-0 flex flex-col'>
    <h1 className="text-xl font-myYekanDemibold mt-4 mb-3 mr-[440px] text-primary-800">
        دادیک دستیاری هوشمند برای دسترسی راحت به قوانین و مقررات
      </h1>
      <div className='ml-[133px]'>
      <p className='text-primary-800 text-sm font-myYekanRegular leading-[18px] mb-4'>جستجوی پیشرفته در کلیه قوانین و مقررات به صورت طبقه بندی شده</p>

      <p className='text-primary-800 text-sm font-myYekanRegular leading-[18px] mb-4'>صدور لایحه دفاعیه توسط هوش مصنوعی و امکان بارگذاری پرونده جهت تحلیل و پاسخ دقیق تر</p>

      <p className='text-primary-800 text-sm font-myYekanRegular leading-[18px]'>ماشین های هوشمند جهت محاسبه دقیق  فرمول های قوانین و مقررات بصورت آنلاین</p>
      </div>

    </div> */}


    <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
      <h1 className="text-2xl font-myYekanDemibold mt-4 mb-2">
        دادیک دستیاری هوشمند برای دسترسی راحت به قوانین و مقررات
      </h1>
      <p className="text-base font-myYekanRegular mb-4">
        با خرید طرح های دادیک در زمان و هزینه خود صرفه جویی کنید.
      </p>
      <button className="bg-white font-myYekanRegular text-text-500 text-base rounded-lg w-[184px] h-10">
        خرید طرح
      </button>
    </div>


    <div className="absolute inset-0 flex justify-between items-center px-4">
      <button className="w-12 h-12 rounded-full bg-white text-white flex items-center justify-center shadow-lg mr-12 ">
        <Moreright></Moreright>
      </button>

      <button className="w-12 h-12 rounded-full bg-white text-white flex items-center justify-center shadow-lg ml-12">
        <MoreLeft></MoreLeft>
      </button>
    </div>
  </div>
  )
}
