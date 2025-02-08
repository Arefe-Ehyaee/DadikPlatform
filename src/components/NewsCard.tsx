import React from "react";
import news from "../assets/icons/newIcons/newsIcon.svg";
import ShowMore from "./ShowMoreButton";

interface CardProps {
  lastNewsDate: string;
  description: string;
  className?: string;
  children?: React.ReactNode;
}

export default function NewsCard({
  description,
  lastNewsDate,
  className,
}: CardProps) {
  return (
    <div
      className={`flex flex-col bg-white text-sm rounded-lg p-2 h-[108px] min-w-[351px] ${className}`}
    >
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row gap-2 items-center">
          <img src={news} alt="" className="h-6 w-6 rounded-full" />
          <span className="text-text-500 font-myYekanMedium">آخرین اخبار</span>
        </div>
        <div className="font-myYekanFaNumRegular text-text-200 text-xs">
            13 خرداد 1403
        </div>
      </div>
      <div className="text-text-200 font-myYekanFaNumRegular text-sm my-2 whitespace-nowrap">
        {description}
      </div>
      <ShowMore></ShowMore>
    </div>
  );
}
