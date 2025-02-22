import userSquare from "../../assets/icons/user-square.svg";
import notifBox from "../../assets/icons/messageBox.svg";
import exit from "../../assets/icons/exit.svg";
import history from "../../assets/icons/history.svg";
import { NavLink } from "react-router-dom";

export default function ProfileMenu() {
  return (
    <div className="absolute left-[8px] top-[30px] flex flex-col gap-1 p-3 w-[203px] h-[196px] bg-white rounded-[4px] text-sm font-myYekanRegular text-text-300 leading-6">
      <NavLink
        to="/completeProfile"
        className="flex flex-row items-center gap-[5.6px] py-[8px] pr-5 w-[179px] h-10 rounded-lg hover:bg-neutral-50"        
      >
        <img src={userSquare} alt="userSquare" />
        <span>مشاهده پروفایل</span>
      </NavLink>

      <NavLink
        to="/"
        className="flex flex-row items-center gap-[5.6px] py-[8px] pr-5 w-[179px] h-10 rounded-lg hover:bg-neutral-50"        

      >
        <img src={notifBox} alt="notifBox" />
        <span>صندوق پیام</span>
      </NavLink>

      <NavLink
        to="/"
        className="flex flex-row items-center gap-[5.6px] py-[8px] pr-5 w-[179px] h-10 rounded-lg hover:bg-neutral-50"        

      >
        <img src={history} alt="history" />
        <span>تاریخچه پرداخت</span>
      </NavLink>

      <NavLink
        to="/"
        className="flex flex-row items-center gap-[5.6px] py-[8px] pr-5 w-[179px] h-10 rounded-lg text-error-500 hover:bg-neutral-50"        

      >
        <img src={exit} alt="exit" />
        <span>خروج از حساب کاربری</span>
      </NavLink>
    </div>
  );
}
