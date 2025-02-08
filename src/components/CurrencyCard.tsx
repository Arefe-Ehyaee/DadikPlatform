import React from "react";
import currency from "../assets/icons/newIcons/currency.svg";
import ShowMoreButton from "./ShowMoreButton";


export default function CurrencyCard() {
  return (
    <div
      className="flex flex-col bg-white text-sm rounded-lg p-2 h-[213px] w-[401px]"
    >
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-col w-[257px]">
          <div className="flex flex-row gap-2 items-center">
            <img src={currency} alt="listen" className="h-6 w-6 rounded-full" />
            <span className="text-text-500 font-myYekanMedium">نمودار ارزها</span>
          </div>
        </div>
        <ShowMoreButton></ShowMoreButton>
      </div>

      <div className="flex flex-row gap-4 bg-white w-[248px] h-12 rounded-lg p-1 mt-4">
        <button className="flex flex-row items-center justify-center gap-2 bg-neutral-50 text-text-200 font-myYekanMedium text-sm w-[72px] h-10 rounded hover:border-b-4 hover:border-secondary-500 hover:bg-secondary-50 hover:text-secondary-500">
          <span>دلار</span>
        </button>
        <button className="flex flex-row items-center justify-center gap-2 bg-neutral-50 text-text-200 font-myYekanMedium text-sm w-[72px] h-10 rounded  hover:border-b-4 hover:border-secondary-500 hover:bg-secondary-50 hover:text-secondary-500">
          <span>طلا</span>
        </button>
      </div>
    </div>
  );
}
