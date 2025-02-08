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
