import React from "react";
import chat from "../../assets/icons/newIcons/chatAI.svg";
import SearchBar from "./SearchBar";
import CustomButton from "../CustomButton";


export default function SearchGuide() {
    return (
        <div className="flex flex-col bg-white min-w-[1104px] mb-4 h-[724px] rounded-2xl mt-0 p-6">
            <div className="flex flex-row">
                <SearchBar></SearchBar>
                <CustomButton
                    text={"جستجو پیشرفته"}
                    className={
                        "border border-primary-500 text-primary-500 text-base font-myYekanMedium min-w-[128px] h-[48px] mr-3"
                    }
                ></CustomButton>
            </div>

            <p className="font-myYekanRegular text-base mb-4 mt-8">راهنمای جستجو</p>
            <p className="font-myYekanRegular text-sm text-text-300 leading-8">موتور جستجوی ما شامل جستجوی <span className="text-primary-700">معمولی</span> و <span className="text-primary-700">پیشرفته</span> می باشد.</p>
            <ul className="font-myYekanRegular text-sm text-text-300 leading-8 list-disc list-inside">
                <li>برای هر دو نوع جستجو حتما سازمان خود را انتخاب کنید. </li>
                <li>برای نتیجه بهتر از فیلترهای دقت جستجو استفاده کنید. </li>
                <li>برای جستجوی دقیق تر ، از فیلترهای جستجو پیشرفته استفاده کنید. </li>
            </ul>

        </div>



    );
}
