import { Children } from "react";
import refferalModalIcon from "../assets/icons/gift-01.svg";
import closeIcon from "../assets/icons/x-circle.svg";
import CustomButton from "./CustomButton";
import send from "../assets/icons/send-01.svg";
import copy from "../assets/icons/copy.svg";

interface RefferalCodeModalProps {
  onClick?: () => void;
  children?: React.ReactNode;
  refferal_code: string;
}

export default function RefferalCodeModal({
  onClick,
  children,
  refferal_code
}: RefferalCodeModalProps) {
  return (
    <div
      className="absolute left-0 top-[120px] w-[320px] h-[272px] rounded-2xl bg-white"
      style={{
        boxShadow: "-4px 4px 16px 2px rgba(175, 175, 175, 0.32)",
      }}
    >
      <div className="flex flex-row justify-between items-center h-14 bg-primary-600 px-4 rounded-t-2xl shrink-0">
        <div className="flex flex-row items-center gap-3">
          <div className="relative w-6 h-6 bg-[rgba(255,255,255,0.1)] rounded-full flex justify-center items-center">
            <img src={refferalModalIcon} alt="icon" className="w-[17px] h-5" />
          </div>
          <p className="text-sm font-myYekanMedium text-white">کد دعوت</p>
        </div>
        <button onClick={onClick}>
          <img src={closeIcon} alt="" className="w-5 h-5" />
        </button>
      </div>

      <div className="px-4 mt-4 flex flex-col">
        <p className="leading-7 text-sm font-myYekanRegular text-text-500">
          با ارسال این کد دعوت برای دوستانتان از مزایا و امتیازات ویژه دادیک
          بهره مند شوید.
        </p>
        <div className="bg-background-550 h-12 w-[288px] rounded-md flex flex-row items-center justify-between mt-6 px-4 py-[14px]">
          <p className="text-sm font-myYekanRegular text-text-300">
            کد دعوت شما
          </p>
          <p className="flex flex-row items-center gap-2">
            <p>{refferal_code}</p>
            <button>
              <img src={copy} alt="copyCode" />
            </button>
          </p>
        </div>
        <CustomButton
          text={"ارسال کد دعوت"}
          className={"bg-primary-500 text-white font-myYekanRegular mt-4"}
          iconsrc={send}
          size="large"
        ></CustomButton>
      </div>
    </div>
  );
}
