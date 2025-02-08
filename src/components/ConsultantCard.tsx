import React from "react";
import listen from "../assets/icons/newIcons/listen.svg";
import consultant from "../assets/icons/newIcons/consultant.svg";

interface ConsultCardProp {
  onClick: () => void;
}

export default function ConsultCard({onClick}:ConsultCardProp) {
  return (
    <div
      className="flex flex-col bg-white text-sm rounded-lg p-2 h-[132px] min-w-[351px]"
    >
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-col w-[257px]">
          <div className="flex flex-row gap-2 items-center">
            <img src={listen} alt="listen" className="h-6 w-6 rounded-full" />
            <span className="text-text-500 font-myYekanMedium">مشاور آنلاین</span>
          </div>

          <div className="text-text-200 font-myYekanFaNumRegular text-sm my-2">
            جهت گفتگو با کارشناسان آنلاین همین حالا اقدام کنید.
          </div>

          <button className="font-myYekanRegular text-primary-500 border border-primary-500 text-base w-[111px] h-8 bg-white rounded-lg" onClick={onClick}>گفتگو آنلاین</button>
        </div>
        <div>
        <img src={consultant} alt="consultant" />
        </div>

      </div>
    </div>
  );
}
