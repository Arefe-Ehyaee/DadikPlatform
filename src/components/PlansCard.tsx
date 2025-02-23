import plans from "../assets/icons/newIcons/plans.svg";
import Plans from "./Plans";

export default function PlansCard() {
  return (
    <div className="bg-white text-sm rounded-lg p-2 h-[315px] min-w-[737px] flex flex-col flex-1">
      <div className="flex flex-row items-center gap-2">
        <img src={plans} alt="" className="h-6 w-6 rounded-full" />
        <span className="text-text-500 font-myYekanMedium">
          طرح های بی نظیر سامانه دادیک
        </span>
      </div>
      {/* <div className="text-sm font-myYekanRegular text-text-200 mt-2 mb-4">
        سامانه حقوقی دادیک طرح های متفاوتی شامل طرح های طلایی،نقره ای و برنزی
        دارد. این سامانه به شما کمک می کند لوایح مربوط به اداره مالیات ، اداره
        کار و تامین اجتماعی را تنظیم کنید . دادیک تا حصول نتیجه در کنار شماست.
      </div> */}
      <div className="flex flex-row gap-4 mt-4">
        <Plans planType={"gold"} />
        <Plans planType={"silver"} />
        <Plans planType={"bronze"} />
      </div>
    </div>
  );
}

