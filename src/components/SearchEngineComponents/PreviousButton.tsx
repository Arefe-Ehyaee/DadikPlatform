import { useInfiniteQuery } from "@tanstack/react-query";
import prevIcon from "../../assets/icons/previous.svg";
import { FetchSearchResults } from "../../api/FetchSearchResults";
import { useEffect } from "react";
import { SearchResult } from "./SearchBar";

interface PreviousPageButtonProps {
  text: string;
  token: string;
  department: string;
  searchedTerm: string;
  fuzzy: boolean;
  onSearchResults: (results: SearchResult[]) => void;
}

const PreviousPageButton = ({
  text,
  token,
  department,
  searchedTerm,
  fuzzy,
  onSearchResults,
}: PreviousPageButtonProps) => {
  
  const departmentKey =
    department === "سازمان امور مالیاتی"
      ? "maliat"
      : department === "سازمان تامین اجتماعی"
      ? "tamin_ejtemaei"
      : department;

  const {
    data,
    fetchPreviousPage,
    isFetching,
    hasPreviousPage,
    isError,
  } = useInfiniteQuery({
    queryKey: ["searchEngineResults", token, departmentKey, searchedTerm, fuzzy],
    queryFn: async ({ pageParam = 1 }) => {
      return FetchSearchResults(token, departmentKey, searchedTerm, fuzzy, pageParam);
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      console.log("Next Cursor:", lastPage.nextCursor); 
      return lastPage.nextCursor || undefined;
    },
    getPreviousPageParam: (firstPage) => {
      console.log("Previous Cursor:", firstPage.prevCursor); 
      return firstPage.prevCursor || undefined;
    },
    enabled: !!searchedTerm && !!department,
  });

  useEffect(() => {
    if (data && data.pages?.length > 0) {
      const currentPage = data.pages[data.pages.length - 1]?.page; 
      console.log("Current Page:", currentPage); 

      const latestResults = data.pages[data.pages.length - 1]?.data.slice(0, 10);
      if (latestResults.length === 0) return;
      onSearchResults(latestResults || []);
    }
  }, [data]);

  console.log("Has Previous Page:", hasPreviousPage);
  console.log("Is Fetching:", isFetching);
  console.log("Data Pages:", data?.pages);
  
  return (
    <button
      onClick={() => fetchPreviousPage()} 
      className={`bg-white text-white text-sm font-myYekanRegular w-[40px] h-[40px] py-[10px] border border-primary-500 rounded-lg ${
        !hasPreviousPage || isFetching ? "opacity-50 cursor-not-allowed" : ""
      }`}
      disabled={!(data?.pages?.[0]?.prevCursor) || isFetching} 
      dir="rtl"
    >
      <div className="flex flex-row items-center gap-3 justify-center">
        <img src={prevIcon} alt="prev" className="h-3 w-[6px]" />
        {/* {text && <span className="text-center">{text}</span>} */}
      </div>
    </button>
  );
};

export default PreviousPageButton;
