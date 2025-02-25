import { useEffect, useState } from "react";
import CustomButton from "../../components/CustomButton";
import NextPageButton from "../../components/SearchEngineComponents/NextPageButton";
import PreviousButton from "../../components/SearchEngineComponents/PreviousButton";
import SearchBar from "../../components/SearchEngineComponents/SearchBar";
import SearchEngineCard from "../../components/SearchEngineComponents/SearchEngineCard";
import { getTokenFromCookie } from "../../utils/cookies";
import PreviousPageButton from "../../components/SearchEngineComponents/PreviousButton";
import SearchBadge from "../../components/SearchEngineComponents/SearchBadge";

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
  const [searchedTerm, setSearchedTerm] = useState<string>("");
  const [fuzzy, setFuzzy] = useState<boolean>(false);
  const [selectedDepartment, setSelectedDepartment] = useState<string>("");
  const token = getTokenFromCookie();
  const [currentPage, setCurrentPage] = useState(1);
  const resultsPerPage = 10;

  const currentResults = searchResults.slice(
    (currentPage - 1) * resultsPerPage,
    currentPage * resultsPerPage
  );

  const handleSearchResults = (results: SearchResult[]) => {
    // console.log(results[2]?._source.Subject);
    // console.log(" جدید")
    // console.log(results)
    setSearchResults(results.slice(0, 10));
    // setSearchResults(results);
    setCurrentPage(1);
    // console.log("results:", searchResults)
    // console.log("selectedDepartment", selectedDepartment)
  };

  return (
    <div className="flex flex-col bg-white min-w-[1104px] mb-4 h-[724px] rounded-2xl mt-0 p-6">
      <div className="flex flex-row">
        <SearchBar
          onSearchResults={handleSearchResults}
          setSearchedTerm={setSearchedTerm}
          fuzzy={fuzzy}
          setFuzzy={setFuzzy}
          selectedDepartment={selectedDepartment}
          setSelectedDepartment={setSelectedDepartment}
          searchedTerm={searchedTerm}
        ></SearchBar>
        <CustomButton
          text={"جستجو پیشرفته"}
          className={
            "border border-primary-500 text-primary-500 text-base font-myYekanMedium min-w-[128px] h-[48px] mr-3 px-[2px]"
          }
        ></CustomButton>
      </div>
      {searchResults.length > 0 && (
        <div className="flex flex-row items-center mt-3 gap-4">
          <SearchBadge text={selectedDepartment}></SearchBadge>
          <SearchBadge text={searchedTerm}></SearchBadge>
          <SearchBadge
            text={fuzzy ? "مشابه عبارت" : "مطابق عبارت"}
          ></SearchBadge>
        </div>
      )}

      {searchResults.length > 0 && (
        <div className="flex flex-row justify-between items-center">
          <p className="mb-4 mt-4 font-myYekanRegular text-base text-text-500">
            نمایش نتایج {searchedTerm}
          </p>
          {/* <p className="text-text-200 font-myYekanFaNumRegular text-sm">{`تعداد نتایج یافت شده ${finds}`}</p> */}
        </div>
      )}

      <div className="overflow-y-auto overflow-x-hidden scrollbar-webkit mb-4 pl-[10px]">
        {/* {searchResults.map((result, index) => (
          // <div key={index}>
          //   <p>{result?._source.Subject}</p>
          //   <p>{result?._source.Organization}</p>
          //   <p>{result?._source.Title}</p>
          // </div>
          <SearchEngineCard
          department={selectedDepartment}
          document={"منسوخه"} documentType={"بخشنامه"} documentDate={"۱۴۰۳/۱/۱۶"} startDate={"۱۴۰۳/۱/۱۶"} endDate={"۱۴۰۳/۱/۱۶"} title={result?._source.Subject} documnetNumber={"123456"}        ></SearchEngineCard>
        ))} */}

        {searchResults.length > 0 ? (
          searchResults.map((result, index) => (
            <SearchEngineCard
              department={selectedDepartment}
              document={"منسوخه"}
              documentType={"بخشنامه"}
              documentDate={"۱۴۰۳/۱/۱۶"}
              startDate={"۱۴۰۳/۱/۱۶"}
              endDate={"۱۴۰۳/۱/۱۶"}
              title={result?._source.Subject}
              documnetNumber={"123456"}
              key={result?._id}
            ></SearchEngineCard>
          ))
        ) : (
          <p className="mt-4">هنوز جستجویی انجام نشده است</p>
        )}
      </div>

      {searchResults.length > 0 && (
        <div className="flex flex-row justify-between w-full">
          <div className="flex flex-grow justify-center gap-4">
            <PreviousPageButton
              onSearchResults={handleSearchResults}
              text={"صفحه قبل"}
              token={token}
              department={selectedDepartment}
              searchedTerm={searchedTerm}
              fuzzy={fuzzy}
            ></PreviousPageButton>
            <NextPageButton
              onSearchResults={handleSearchResults}
              text={"صفحه بعد"}
              token={token}
              department={selectedDepartment}
              searchedTerm={searchedTerm}
              fuzzy={fuzzy}
            ></NextPageButton>
          </div>

          {/* <div className="flex flex-row items-center gap-2">
        <p className="text-text-200 text-sm font-myYekanRegular">صفحه</p>
        <input type="number" className="border w-20 h-8 rounded-lg"></input>
        <p className="text-text-200 text-sm font-myYekanFaNumRegular">
          از 100
        </p>
      </div> */}
        </div>
      )}
    </div>
  );
}
