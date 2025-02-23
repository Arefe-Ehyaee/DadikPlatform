import roozShomar from "../assets/icons/roozshomar.svg";
import days from "../assets/icons/newIcons/lineDays.png";

interface CardProps {
  passedDays: number;
  remainingDays: number
}


export default function DaysCard({passedDays, remainingDays }: CardProps) {
  return (
    <div className="flex flex-col bg-white text-sm rounded-lg p-2 h-[100px] min-w-[351px]">
      <div className="flex flex-row items-center gap-2">
        <img src={roozShomar} alt="" className="h-6 w-6 rounded-full" />
        <span className="text-text-500 font-myYekanMedium">روز شمار طرح</span>
      </div>
      {/* <div className="text-text-200 font-myYekanFaNumRegular my-2">{`شما ${passedDays} روز از طرح خود را  مصرف کرده اید.`}</div>
      <div>
        <img src={days} alt="" />
        <div className="pb-2 pt-1 text-left font-myYekanFaNumRegular text-text-200 text-sm">
          {remainingDays} روز باقیمانده
        </div>
      </div> */}
      <div className="text-text-200 font-myYekanFaNumRegular mt-2">
      شما هنوز طرحی نخریده اید.همین حالا برای خرید طرح اقدام کنید تا بتوانید به امکانات بی نظیر دادیک دسترسی پیدا کنید.
      </div>
    </div>
  );
}
