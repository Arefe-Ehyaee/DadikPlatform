import { useInfiniteQuery } from "@tanstack/react-query";
import previous from "../../assets/icons/previous.svg";
import { FetchSearchResults } from "../../api/FetchSearchResults";
import { useEffect } from "react";
import { SearchResult } from "./SearchBar";

interface PreviousButtonProps {
  text?: string;
  token: string;
  department: string;
  searchedTerm: string;
  fuzzy: boolean;
  onSearchResults: (results: SearchResult[]) => void;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

const PreviousButton = ({
  text,
  token,
  department,
  searchedTerm,
  fuzzy,
  onSearchResults,
  currentPage,
  setCurrentPage,
}: PreviousButtonProps) => {
  const departmentKey =
    department === "سازمان امور مالیاتی"
      ? "maliat"
      : department === "سازمان تامین اجتماعی"
      ? "tamin_ejtemaei"
      : department;

  // Use Infinite Query for fetching pages
  const {
    data,
    fetchPreviousPage,
    isFetching,
    hasPreviousPage,
  } = useInfiniteQuery({
    queryKey: ["searchEngineResults", token, departmentKey, searchedTerm, fuzzy],
    queryFn: async ({ pageParam = currentPage }) => {
      return FetchSearchResults(token, departmentKey, searchedTerm, fuzzy, pageParam);
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.nextCursor || undefined,
    getPreviousPageParam: (firstPage) =>
      firstPage.page > 1 ? firstPage.page - 1 : undefined,
    enabled: !!searchedTerm && !!department,
  });


  useEffect(() => {
    if (data && data.pages?.length > 0) {
      const latestResults = data.pages[0]?.data.slice(0, 10);
      if (latestResults.length === 0) return;
      onSearchResults(latestResults || []);
    }
  }, [data]);

  const handlePreviousClick = () => {
    if (!hasPreviousPage || isFetching) return;
    setCurrentPage(currentPage -1);
    fetchPreviousPage();
  };

  return (
    <button
      onClick={handlePreviousClick}
      className={`border border-primary-500 bg-white text-primary-500 text-sm font-myYekanRegular w-10 h-[40px] py-[10px] rounded-lg ${
        !hasPreviousPage || isFetching ? "opacity-50 cursor-not-allowed" : ""
      }`}
      disabled={!hasPreviousPage || isFetching}
      dir="rtl"
    >
      <div className="flex flex-row items-center gap-3 justify-center">
        <img src={previous} alt="logo" className="h-3 w-[6px]" />
        {text && <span className="text-center">{text}</span>}
      </div>
    </button>
  );
};

export default PreviousButton;
