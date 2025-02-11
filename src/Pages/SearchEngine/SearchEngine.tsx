import CustomButton from "../../components/CustomButton";
import NextPageButton from "../../components/SearchEngineComponents/NextPageButton";
import PreviousButton from "../../components/SearchEngineComponents/PreviousButton";
import SearchBar from "../../components/SearchEngineComponents/SearchBar";
import SearchEngineCard from "../../components/SearchEngineComponents/SearchEngineCard";

const finds = 1440;

export default function SearchEngine() {
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

      <div className="flex flex-row justify-between items-center">
        <p className="my-4 font-myYekanRegular text-base text-text-500">
          نمایش نتایج برای اداره مالیات
        </p>

        <p className="text-text-200 font-myYekanFaNumRegular text-sm">{`تعداد نتایج یافت شده ${finds}`}</p>
      </div>

      <div className="overflow-y-auto scrollbar-webkit mb-4 pl-[10px]">
        <SearchEngineCard
          department={"سازمان امور مالیات"}
          document={"تفسیر"} documentType={"ابلاغیه"} documentDate={"۱۴۰۳/۱/۱۶"} startDate={"۱۴۰۳/۱/۱۶"} endDate={"۱۴۰۳/۱/۱۶"} title={"قوانین و مقررات مالیاتی-باب 1-فصل 2-ماده 35-تبصره 1"} documnetNumber={"123456"}        ></SearchEngineCard>
        <SearchEngineCard
          department={"قوه قضاییه"}
          document={"منسوخه"} documentType={"بخشنامه"} documentDate={"۱۴۰۳/۱/۱۶"} startDate={"۱۴۰۳/۱/۱۶"} endDate={"۱۴۰۳/۱/۱۶"} title={"قوانین و مقررات مالیاتی-باب 1-فصل 2-ماده 35-تبصره 1"} documnetNumber={"123456"}        ></SearchEngineCard>
        <SearchEngineCard
          department={"سازمان تامین اجتماعی"}
          document={"تنفیذ"} documentType={"دادنامه"} documentDate={"۱۴۰۳/۱/۱۶"} startDate={"۱۴۰۳/۱/۱۶"} endDate={"۱۴۰۳/۱/۱۶"} title={"قوانین و مقررات مالیاتی-باب 1-فصل 2-ماده 35-تبصره 1"} documnetNumber={"123456"}        ></SearchEngineCard>
        <SearchEngineCard
          department={"سازمان امور مالیات"}
          document={"نامه اصلاحی"} documentType={"تبصره"} documentDate={"۱۴۰۳/۱/۱۶"} startDate={"۱۴۰۳/۱/۱۶"} endDate={"۱۴۰۳/۱/۱۶"} title={"قوانین و مقررات مالیاتی-باب 1-فصل 2-ماده 35-تبصره 1"} documnetNumber={"123456"}        ></SearchEngineCard>
        <SearchEngineCard
          department={"سازمان امور مالیات"}
          document={"تفسیر"} documentType={"ابلاغیه"} documentDate={"۱۴۰۳/۱/۱۶"} startDate={"۱۴۰۳/۱/۱۶"} endDate={"۱۴۰۳/۱/۱۶"} title={"قوانین و مقررات مالیاتی-باب 1-فصل 2-ماده 35-تبصره 1"} documnetNumber={"123456"}        ></SearchEngineCard>
        <SearchEngineCard
          department={"سازمان امور مالیات"}
          document={"تفسیر"} documentType={"ابلاغیه"} documentDate={"۱۴۰۳/۱/۱۶"} startDate={"۱۴۰۳/۱/۱۶"} endDate={"۱۴۰۳/۱/۱۶"} title={"قوانین و مقررات مالیاتی-باب 1-فصل 2-ماده 35-تبصره 1"} documnetNumber={"123456"}        ></SearchEngineCard>
      </div>

      <div className="flex flex-row justify-between w-full">
        <div className="flex flex-grow justify-center gap-4">
        <PreviousButton></PreviousButton>
          <NextPageButton text={"صفحه بعد"}></NextPageButton>
        </div>

        <div className="flex flex-row items-center gap-2">
          <p className="text-text-200 text-sm font-myYekanRegular">صفحه</p>
          <input type="number" className="border w-20 h-8 rounded-lg"></input>
          <p className="text-text-200 text-sm font-myYekanFaNumRegular">از 100</p>
        </div>
      </div>

    </div>
  );
}
