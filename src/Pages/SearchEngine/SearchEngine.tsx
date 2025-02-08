import CustomButton from "../../components/CustomButton";
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
      
      <div className="overflow-y-auto scrollbar-webkit">
        <SearchEngineCard
          department={"سازمان امور مالیات"}
          document={"تفسیر"}
        ></SearchEngineCard>
        <SearchEngineCard
          department={"قوه قضاییه"}
          document={"منسوخه"}
        ></SearchEngineCard>
        <SearchEngineCard
          department={"سازمان تامین اجتماعی"}
          document={"تنفیذ"}
        ></SearchEngineCard>
        <SearchEngineCard
          department={"سازمان امور مالیات"}
          document={"نامه اصلاحی"}
        ></SearchEngineCard>
        <SearchEngineCard
          department={"سازمان امور مالیات"}
          document={"تفسیر"}
        ></SearchEngineCard>
        <SearchEngineCard
          department={"سازمان امور مالیات"}
          document={"تفسیر"}
        ></SearchEngineCard>
      </div>
    </div>
  );
}
