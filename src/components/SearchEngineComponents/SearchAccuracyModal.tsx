import React from "react";
import closeIcon from "../../assets/icons/Dark-x-circle.svg";

interface SearchAccuracyModalProps {
  onClick?: () => void;
}

export default function SearchAccuracyModal({
  onClick, 
}: SearchAccuracyModalProps) {
  return (
    <div className="flex flex-col bg-white w-[224px] rounded-lg h-[200px]">
      <div className="flex flex-row items-center border-b justify-between px-4">
        <p className="text-text-200 text-sm font-myYekanMedium py-[14px]">
          دقت جستجو
        </p>
        <button onClick={onClick}>
          <img
            src={closeIcon}
            alt="close"
            className="w-5 h-5  mr-2 ml-[10px]"
          />
        </button>
      </div>
      <div className="flex flex-row items-center w-[192px] h-10 rounded-lg mx-4 px-2 py-1 hover:bg-neutral-50 mt-2">
        <input type="checkbox" className="accent-primary-500" id="exact"></input>
        <label
          htmlFor="exact"
          className="font-myYekanRegular text-text-500 text-sm mr-1"
        >
          مطابق عبارت
        </label>
      </div>

      <div className="flex flex-row items-center w-[192px] h-10 rounded-lg mx-4 px-2 py-1 hover:bg-neutral-50 mt-1">
        <input type="checkbox" className="accent-primary-500" id="similar"></input>
        <label
          htmlFor="similar"
          className="font-myYekanRegular text-text-500 text-sm mr-1"
        >
          مشابه عبارت
        </label>
      </div>

      <div className="flex flex-row items-center w-[192px] h-10 rounded-lg mx-4 px-2 py-1 hover:bg-neutral-50 mb-4">
        <input type="checkbox" className="accent-primary-500" id="meaning"></input>
        <label
          htmlFor="similar"
          className="font-myYekanRegular text-text-500 text-sm mr-1"
        >
          فعال سازی معنی لغات
        </label>
      </div>
    </div>
  );
}
