import React from "react";
import goldBadge from "../assets/icons/badge-star-g.svg";
import silverBadge from "../assets/icons/badge-star-n.svg";
import bronzeBadge from "../assets/icons/badge-star-b.svg";
import { toJalali } from "../utils/daysCardCalculation";

export interface UserInfoCardProps {
  name: string;
  plan: "gold" | "silver" | "bronze" | "noPlan";
  planStartDate: string;
  billsNumber: number;
  numberOfSearch: number;
  avatar: string;
  className?: string;
  children?: React.ReactNode;
}

export default function UserInfoCard({
  name,
  plan,
  planStartDate,
  billsNumber,
  numberOfSearch,
  avatar,
  children,
  className,
}: UserInfoCardProps) {
  const getBadge = () => {
    switch (plan) {
      case "gold":
        return goldBadge;
      case "silver":
        return silverBadge;
      case "bronze":
        return bronzeBadge;
      default:
        return null; 
    }
  };

  const getPlanName = () => {
    switch (plan) {
      case "gold":
        return "طرح طلایی";
      case "silver":
        return "طرح نقره ای";
      case "bronze":
        return "طرح برنزی";
      default:
        return "طرحی خریداری نشده است."; 
    }
  };

  const badge = getBadge();
  const badgeName = getPlanName();
  const jalaliStartDate = toJalali(planStartDate);
  
  return (
    <div
      className={`flex flex-col bg-white text-sm rounded-lg p-2 h-[156px] min-w-[351px] ${className}`}
    >
      <div className="relative flex flex-row border-b-[1px] border-neutral-50 pb-3 gap-2">
        <div className="relative">
          <img src={avatar} alt="" className=" absolute h-16 w-16 rounded-lg" />
          <div className="bg-neutral-100 h-16 w-16 rounded-lg"></div>
        </div>
        {badge && (
          <img
            src={badge}
            alt={`${plan} badge`}
            className="absolute top-0 left-14 h-6 w-6" // Adjust positioning as needed
          />
        )}
        <div className="flex flex-col gap-2 py-[11px]">
          <span className="text-text-500 font-myYekanMedium text-sm">
            {name}
          </span>
          {badgeName && (
            <span className="text-text-300 font-myYekanMedium text-xs">
              {badgeName}
            </span>
          )}
        </div>
      </div>
      <div className="flex flex-row justify-between text-center mt-3 mb-4 font-myYekanFaNumMedium">
        <div className="text-right">
          <div className="text-text-500 text-sm ">تاریخ خرید طرح</div>
          <div className="text-text-200 text-sm mt-2">{jalaliStartDate}</div>
        </div>
        <div className="">
          <div className="text-text-500 text-sm">تعداد جستجو</div>
          <div className="text-text-200 text-sm mt-2">{`${numberOfSearch} بار`}</div>
        </div>
        <div className="">
          <div className="text-text-500 text-sm">لوایح ایجاد شده</div>
          <div className="text-text-200 text-sm mt-2">{`${billsNumber} لایحه`}</div>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
}
