import React, { useEffect, useRef, useState } from "react";
import { ReactComponent as SearchIcon } from "../../assets/icons/searchEngine.svg";
import down from "../../assets/icons/down.svg";
import SearchSelectDepartment from "./SearchSelectDepartmentModal";
import SearchDepartmentModalTemplate from "./SearchDepartmentModalTemplate";
import SearchResult from "./SearchResult";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { FetchSearchEngineSuggestion } from "../../api/FetchSearchEngineSuggestion";
import { getTokenFromCookie } from "../../utils/cookies";
import SearchDelete from "../../assets/icons/searchCross.svg";
import { FetchSearchResults } from "../../api/FetchSearchResults";
import departments from "../../assets/icons/departments.svg";
import ToggleSwitch from "./ToggleSwitch";

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

interface SearchBarProps {
  onSearchResults: (results: SearchResult[]) => void;
  searchedTerm: string;
  setSearchedTerm: (searchTerm: string) => void;
  setFuzzy: (fuzzy: boolean) => void;
  fuzzy: boolean;
  setSelectedDepartment: (department: string ) => void;
  selectedDepartment: string ;
}

export default function SearchBar({
  onSearchResults,
  setSearchedTerm,
  searchedTerm,
  selectedDepartment,
  setSelectedDepartment,
  setFuzzy,
  fuzzy
}: SearchBarProps) {
  const [isSelectDepartmentModalOpen, SetSelectDepartmentModalOpen] =
    useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [searchEngineInput, setSearchEngineInput] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);
  const [enableWordMeaning, setEnableWordMeaning] = useState<boolean>(false);
  const selectDepartmentButtonRef = useRef<HTMLButtonElement>(null);
  const [buttonWidth, setButtonWidth] = useState<number | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const departmentModalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setShowModal(false);
      }
    }

    if (showModal) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showModal]);

  useEffect(() => {
    if (isSelectDepartmentModalOpen && selectDepartmentButtonRef.current) {
      setButtonWidth(selectDepartmentButtonRef.current.offsetWidth);
    }
  }, [isSelectDepartmentModalOpen]);

  const token = getTokenFromCookie();

  const handleSelectDepartment = (department: string) => {
    setSelectedDepartment(department);
  };

  const {
    //results
    data: searchEngineResult,
    isError: searchEngineDataIsError,
    isFetching: searchEngineDataIsFetching,
    refetch: searchEngineRefetch,
  } = useInfiniteQuery({
    queryKey: ["searchEngineResults", searchEngineInput],
    queryFn: async ({ pageParam = 1 }) => {
      if (!searchTerm || searchTerm.length < 2 || !selectedDepartment)
        return { data: [], nextCursor: undefined, prevCursor: undefined };
  
      let result;
      if (selectedDepartment === "سازمان امور مالیاتی") {
        result = await FetchSearchResults(token, "maliat", searchTerm, fuzzy, pageParam);
      } else if (selectedDepartment === "سازمان تامین اجتماعی") {
        result = await FetchSearchResults(
          token,
          "tamin_ejtemaei",
          searchTerm,
          fuzzy,
          pageParam
        );
      } else {
        result = await FetchSearchResults(
          token,
          selectedDepartment,
          searchTerm,
          fuzzy,
          pageParam
        );
      }
  
      return {
        data: result.data, 
        nextCursor: result.page < result.total_pages ? result.page + 1 : undefined,
        prevCursor: result.page > 1 ? result.page - 1 : undefined, 
      };
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
    getPreviousPageParam: (firstPage) => firstPage.prevCursor,
    enabled: false,
    staleTime: 5000,
  });

  useEffect(() => {
    if (searchEngineResult && searchEngineResult.pages?.length > 0) {
      const allResults = searchEngineResult.pages.flatMap((page) => page.data);
      
      if (allResults.length === 0) return;
      onSearchResults(allResults);
      setShowModal(false);
      console.log(selectedDepartment)
    }
  }, [searchEngineResult]);

  const toggleDepartmentModal = () => {
    SetSelectDepartmentModalOpen((prev) => !prev);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.length >= 3) {
      setIsModalVisible(true);
    } else {
      setIsModalVisible(false);
    }
  };

  const handleSearchResult = () => {
    if (searchEngineDataIsFetching) return;
    // console.log("Search button clicked!");
    // console.log("Search Term:", searchTerm);
    // console.log("Selected Department:", selectedDepartment);

    if (!searchTerm.trim() || !selectedDepartment) {
      // console.log("Search prevented due to missing values");
      return;
    }
    setSearchedTerm(searchTerm);
    searchEngineRefetch();

  };

  const handleSelectAccuracy = (accuracy: string) => {
    if (accuracy === "مطابق عبارت") {
      setFuzzy(false);
    } else if (accuracy === "مشابه عبارت") {
      setFuzzy(true);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearchResult();
    }
  };

  const handleClearSearchBar = () => {
    setSearchTerm("");
    setIsModalVisible(false);
  };

  return (
    <div className="relative w-full">
      <form>
        <div className="relative w-full inline-block">
          <button
            type="button"
            disabled={searchEngineDataIsFetching}
            className="absolute bg-primary-500 w-14 h-12 rounded-l-lg left-0 top-1/2 transform -translate-y-1/2"
            onClick={handleSearchResult}
          >
            <SearchIcon className="my-3 mx-auto text-white" />
          </button>

          {isModalVisible && (
            <button
              className="absolute left-16 top-1/2 transform -translate-y-1/2"
              onClick={handleClearSearchBar}
              type="button"
            >
              <img src={SearchDelete} alt="clean" />
            </button>
          )}

          <input
            className="w-full h-12 border rounded-lg pr-4 pl-28"
            placeholder="جستجو"
            ref={inputRef}
            value={searchTerm}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            onFocus={() => setShowModal(true)}
          />

          {showModal && (
            <div ref={modalRef} className="absolute w-full flex flex-row gap-4 bg-white border border-gray-300 rounded-b-lg z-10 px-4">
              <div className=" flex flex-col flex-1">
                <div className="relative">
                  <button
                    ref={selectDepartmentButtonRef}
                    className="flex flex-row items-center justify-between w-full h-12 border border-neutral-100 rounded-lg my-4 px-4"
                    type="button"
                    onClick={toggleDepartmentModal}
                  >
                    <div className="flex flex-row items-center gap-3">
                      <img
                        src={departments}
                        alt="department"
                        className="w-6 h-6"
                      />
                      <p className="ml-1 text-sm">انتخاب سازمان</p>
                    </div>
                    <img src={down} alt="dropdown" className="w-3 h-[6px]" />
                  </button>

                  {isSelectDepartmentModalOpen && (
                    <div ref={departmentModalRef} className="absolute left-0 top-[172px]">
                      <SearchDepartmentModalTemplate
                        showModal={true}
                        onClose={() => SetSelectDepartmentModalOpen(false)}
                      >
                        <SearchSelectDepartment
                          onSelect={handleSelectDepartment}
                          modalWidth={buttonWidth}
                        />
                      </SearchDepartmentModalTemplate>
                    </div>
                  )}
                </div>

                <button
                  className="h-12 border border-neutral-100 rounded-lg px-4 mb-4"
                  type="button"
                >
                  <ToggleSwitch
                    label="فعالسازی معنی لغات"
                    onChange={(checked) => setEnableWordMeaning(checked)}
                    defaultChecked={enableWordMeaning}
                  />
                </button>
              </div>

              <button
                className="flex-1 flex flex-row items-center gap-8 justify-start w-full h-12 border border-neutral-100 rounded-lg px-4 mt-4"
                type="button"
              >
                <div className="flex flex-row items-center">
                  <input
                    type="checkbox"
                    className="accent-primary-500"
                    id="exact"
                    onChange={() => handleSelectAccuracy("مطابق عبارت")}
                  ></input>
                  <label
                    htmlFor="exact"
                    className="font-myYekanRegular text-text-500 text-sm mr-1"
                  >
                    مطابق عبارت
                  </label>
                </div>

                <div className="flex flex-row items-center">
                  <input
                    type="checkbox"
                    className="accent-primary-500"
                    id="similar"
                    onChange={() => handleSelectAccuracy("مشابه عبارت")}
                  ></input>
                  <label
                    htmlFor="similar"
                    className="font-myYekanRegular text-text-500 text-sm mr-1"
                  >
                    مشابه عبارت
                  </label>
                </div>
              </button>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
