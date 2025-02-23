import { useState } from "react";
import CustomButton from "../../components/CustomButton";
import NextPageButton from "../../components/SearchEngineComponents/NextPageButton";
import PreviousButton from "../../components/SearchEngineComponents/PreviousButton";
import SearchBar from "../../components/SearchEngineComponents/SearchBar";
import SearchEngineCard from "../../components/SearchEngineComponents/SearchEngineCard";

const finds = 1440;


export interface source {
  Organization: string; 
  Title: string; 
  TitleNumber: string | null;
  TitleDate: string | null; 
  Subject: string;
  ApprovalAuthority: string; 
  AttachmentLink: string | null; 
  AttachmentFile: string; 
  AttachmentText: string; 
}
export interface SearchResult {
  _index: string;               
  _id: string;                  
  _score: number;               
  _source: {
    Organization: string;       
    Title: string;              
    TitleNumber: string;         
    TitleDate: string;         
    Subject: string;            
    ApprovalAuthority: string;  
    AttachmentLink: string | null; 
    AttachmentFile: string;     
    AttachmentText: string;   
  };
}


export default function SearchEngine() {
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [ SearchedTerm, setSearchedTerm] = useState<string>("");

  const handleSearchResults = (results: SearchResult[]) => {
    // console.log(results[2]?._source.Subject);
    // console.log(" جدید")
    // console.log(results)
    setSearchResults(results);
  };

  return (
    <div className="flex flex-col bg-white min-w-[1104px] mb-4 h-[724px] rounded-2xl mt-0 p-6">
      <div className="flex flex-row">
        <SearchBar onSearchResults={handleSearchResults} setSearchedTerm={setSearchedTerm}></SearchBar>
        <CustomButton
          text={"جستجو پیشرفته"}
          className={
            "border border-primary-500 text-primary-500 text-base font-myYekanMedium min-w-[128px] h-[48px] mr-3 px-[2px]"
          }
        ></CustomButton>
      </div>

      <div className="flex flex-row justify-between items-center">
        <p className="mb-4 mt-8 font-myYekanRegular text-base text-text-500">
          نمایش نتایج {SearchedTerm}
        </p>
        {/* <p className="text-text-200 font-myYekanFaNumRegular text-sm">{`تعداد نتایج یافت شده ${finds}`}</p> */}
      </div>

      <div className="overflow-y-auto overflow-x-hidden scrollbar-webkit mb-4 pl-[10px]">

        {searchResults.map((result, index) => (
          // <div key={index}>
          //   <p>{result?._source.Subject}</p>
          //   <p>{result?._source.Organization}</p>
          //   <p>{result?._source.Title}</p>
          // </div>
          <SearchEngineCard
          department={"قوه قضاییه"}
          document={"منسوخه"} documentType={"بخشنامه"} documentDate={"۱۴۰۳/۱/۱۶"} startDate={"۱۴۰۳/۱/۱۶"} endDate={"۱۴۰۳/۱/۱۶"} title={result?._source.Subject} documnetNumber={"123456"}        ></SearchEngineCard>
        ))}
        {/* <SearchEngineCard
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
          document={"تفسیر"} documentType={"ابلاغیه"} documentDate={"۱۴۰۳/۱/۱۶"} startDate={"۱۴۰۳/۱/۱۶"} endDate={"۱۴۰۳/۱/۱۶"} title={"قوانین و مقررات مالیاتی-باب 1-فصل 2-ماده 35-تبصره 1"} documnetNumber={"123456"}        ></SearchEngineCard> */}
      </div>

      {/* <div className="flex flex-row justify-between w-full">
        <div className="flex flex-grow justify-center gap-4">
          <PreviousButton></PreviousButton>
          <NextPageButton text={"صفحه بعد"}></NextPageButton>
        </div>

        <div className="flex flex-row items-center gap-2">
          <p className="text-text-200 text-sm font-myYekanRegular">صفحه</p>
          <input type="number" className="border w-20 h-8 rounded-lg"></input>
          <p className="text-text-200 text-sm font-myYekanFaNumRegular">
            از 100
          </p>
        </div>
      </div> */}
    </div>
  );
}
