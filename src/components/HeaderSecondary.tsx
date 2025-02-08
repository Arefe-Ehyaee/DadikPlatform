import hand from "../assets/icons/newIcons/Clip path group.png";

const data = "23 مهر ماه 1403";
const time = "13:30 بعد از ظهر";

export default function HeaderSecondary() {
  return (
    <div className="flex flex-row justify-between mt-8 lg-xl:mt-2 mb-4 w-full">
      <div className="flex flex-row items-center" dir="rtl">
        <div>
          <img src={hand} alt="hand" />
        </div>
        <div className="text-text-500 font-myYekanMedium text-base">به سکوی حقوقی دادیک خوش آمدید!</div>
      </div>

      <div className="flex flex-row  items-center gap-6 text-text-300 font-myYekanFaNumRegular text-sm">
        <div>{`تاریخ ورود: ${data}`}</div>
        <div>{time}</div>
      </div>
    </div>
  );
}
