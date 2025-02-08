import { Children } from "react";
import notifModalIcon from "../../assets/icons/notifModal.svg";
import closeIcon from "../../assets/icons/x-circle.svg";

interface NotifModalProps {
  onClick?: () => void;
  children?: React.ReactNode;
}

export default function NotifModal({ onClick, children }: NotifModalProps) {
  return (
    <div className="absolute left-[120px] top-[30px] w-[360px] h-[364px] rounded-2xl bg-white">
      <div className="flex flex-row justify-between items-center h-14 bg-primary-600 px-4 rounded-t-2xl shrink-0">
        <div className="flex flex-row items-center gap-3">
          <div className="relative w-6 h-6 bg-[rgba(255,255,255,0.1)] rounded-full flex justify-center items-center">
            <img src={notifModalIcon} alt="icon" className="w-[17px] h-5" />
          </div>
          <p className="text-sm font-myYekanMedium text-white">اعلان ها</p>
        </div>
        <button onClick={onClick}>
          <img src={closeIcon} alt="" className="w-5 h-5" />
        </button>
      </div>

      <div className="px-4 mt-4 flex flex-col overflow-y-auto scrollbar-webkit h-[260px]">
        {children}
      </div>
    </div>
  );
}
