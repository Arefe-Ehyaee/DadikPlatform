import React from "react";
import goldBadge from "../assets/icons/badge-star-g.svg";
import silverBadge from "../assets/icons/badge-star-n.svg";
import bronzeBadge from "../assets/icons/badge-star-b.svg";
import { toJalali } from "../utils/daysCardCalculation";

export interface UserInfoCardProps {
  name: string;
  subscription: {
    plan: "gold" | "silver" | "bronze";
    start_date: string | null;
    end_date: string | null;
    is_active: boolean;
  } | null;
  billsNumber: number;
  numberOfSearch: number;
  avatar: string;
  className?: string;
  children?: React.ReactNode;
}

export default function UserInfoCard({
  name,
  subscription,
  billsNumber,
  numberOfSearch,
  avatar,
  children,
  className,
}: UserInfoCardProps) {
  const getBadge = () => {
    switch (subscription?.plan) {
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
    switch (subscription?.plan) {
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
  const jalaliStartDate = subscription?.start_date ? toJalali(subscription.start_date) : "نامشخص";

  return (
    <div className={`flex flex-col bg-white text-sm rounded-lg p-2 h-[156px] min-w-[351px] ${className}`}>
      <div className="relative flex flex-row border-b-[1px] border-neutral-50 pb-3 gap-2">
        <div className="relative w-16 h-16">
          <img src={avatar} alt="User Avatar" className="h-16 w-16 rounded-lg" />
        </div>
        {badge && <img src={badge} alt={`${subscription?.plan} badge`} className="absolute top-0 left-14 h-6 w-6" />}
        <div className="flex flex-col gap-2 py-[11px]">
          <span className="text-text-500 font-myYekanMedium text-sm">{name}</span>
          <span className="text-text-300 font-myYekanMedium text-xs">{badgeName}</span>
        </div>
      </div>
      <div className="flex flex-row justify-between text-center mt-3 mb-4 font-myYekanFaNumMedium">
        <div className="text-right">
          <div className="text-text-500 text-sm">تاریخ خرید طرح</div>
          <div className="text-text-200 text-sm mt-2">{jalaliStartDate}</div>
        </div>
        <div>
          <div className="text-text-500 text-sm">تعداد جستجو</div>
          <div className="text-text-200 text-sm mt-2">{`${numberOfSearch} بار`}</div>
        </div>
        <div>
          <div className="text-text-500 text-sm">لوایح ایجاد شده</div>
          <div className="text-text-200 text-sm mt-2">{`${billsNumber} لایحه`}</div>
        </div>
      </div>
      {children}
    </div>
  );
}
