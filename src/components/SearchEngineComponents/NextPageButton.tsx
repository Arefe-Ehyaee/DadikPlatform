import { useInfiniteQuery } from "@tanstack/react-query";
import next from "../../assets/icons/next.svg"
import { FetchSearchResults } from "../../api/FetchSearchResults";
import { useEffect } from "react";
import { SearchResult } from "./SearchBar";

interface NextPageButtonProps {
    text: string;
    disabled?: boolean;
    token : string;
    department: string;
    searchedTerm: string;
    fuzzy: boolean;
    onSearchResults: (results: SearchResult[]) => void;
}

const NextPageButton = ({
    text, token, department, searchedTerm, fuzzy, onSearchResults

}: NextPageButtonProps) => {

    const departmentKey = department === "سازمان امور مالیاتی"
    ? "maliat"
    : department === "سازمان تامین اجتماعی"
    ? "tamin_ejtemaei"
    : department;
  
  const {
    data, fetchNextPage, isFetching, hasNextPage, isError
  } = useInfiniteQuery({
    queryKey: ["searchEngineResults", token, departmentKey, searchedTerm, fuzzy],
    queryFn: async ({ pageParam = 1 }) => {
       return FetchSearchResults(token, departmentKey, searchedTerm, fuzzy, pageParam)
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.nextCursor || undefined,
    enabled: !!searchedTerm && !!department
  });
  
  useEffect(() => {
    if (data && data.pages?.length > 0) {
        const latestResults = data.pages[data.pages.length - 1]?.data.slice(0, 10); 
        if (latestResults.length === 0) return;
        onSearchResults(latestResults || []); 
    }
  }, [data]);

  
    return (
        <button onClick={() => fetchNextPage()} className={`bg-primary-500 text-white text-sm font-myYekanRegular w-[120px] h-[40px] py-[10px] rounded-lg ${
            !hasNextPage || isFetching ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={!hasNextPage || isFetching}
          dir="rtl">
            <div className="flex flex-row items-center gap-3 justify-center">
                {text && <span className="text-center">{text}</span>}
                <img src={next} alt="logo" className="h-3 w-[6px]" />
            </div>

        </button>
    );
};

export default NextPageButton;
