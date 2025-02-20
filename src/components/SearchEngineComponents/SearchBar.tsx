import React, { useEffect, useState } from "react";
import { ReactComponent as SearchIcon } from "../../assets/icons/searchEngine.svg";
import down from "../../assets/icons/down.svg";
import SearchAccuracyModal from "./SearchAccuracyModal";
import SearchAccuracyModalTemplate from "./SearchAccuracyModalTemplate";
import SearchSelectDepartment from "./SearchSelectDepartmentModal";
import SearchDepartmentModalTemplate from "./SearchDepartmentModalTemplate";
import SearchResult from "./SearchResult";
import { api } from "../../api/Auth";
import { useQuery } from "@tanstack/react-query";
import { FetchSearchEngineSuggestion } from "../../api/FetchSearchEngineSuggestion";
import { getTokenFromCookie } from "../../utils/cookies";
import SearchDelete from "../../assets/icons/searchCross.svg";
import { FetchSearchResults } from "../../api/FetchSearchResults";
import departments from "../../assets/icons/departments.svg";

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
  setSearchedTerm: (term: string) => void;
}

export default function SearchBar({
  onSearchResults,
  setSearchedTerm,
}: SearchBarProps) {
  const [isAccuracyModalOpen, setIsAccuracyModalOpen] = useState(false);
  const [isSelectDepartmentModalOpen, SetSelectDepartmentModalOpen] =
    useState(false);
  const [showDropDown, setShowDropDown] = useState(false);
  const [showSearchTerm, setShowSearchTerm] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedAccuracy, setSelectedAccuracy] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState<string | null>(
    null
  );
  const [searchEngineInput, setSearchEngineInput] = useState<string>("");
  const [fuzzy, setFuzzy] = useState<boolean>(true);
  const [showModal, setShowModal] = useState<boolean>(false);

  const token = getTokenFromCookie();

  const fetchSuggestions = async () => {
    if (!searchEngineInput || searchEngineInput.length < 2) {
      return;
    }
    return FetchSearchEngineSuggestion(token, searchEngineInput) ?? [];
  };

  const handleSelectDepartment = (department: string) => {
    setSelectedDepartment(department);
  };

  // const handleSelectAccuracy = (accuracy: string) => {
  //   setSelectedAccuracy(accuracy);
  // };
  const {
    //results
    data: searchEngineData,
    isError: searchEngineDataIsError,
    isFetching: searchEngineDataIsFetching,
    refetch: searchEngineRefetch,
  } = useQuery({
    queryKey: ["searchEngineSuggestion", searchEngineInput],
    queryFn: async () => {
      if (!searchTerm || searchTerm.length < 2 || !selectedDepartment)
        return [];
      if (selectedDepartment === "سازمان امور مالیاتی")
        return FetchSearchResults(token, "maliat", searchTerm, fuzzy);
      if (selectedDepartment === "سازمان تامین اجتماعی")
        return FetchSearchResults(token, "tamin_ejtemaei", searchTerm, fuzzy);
      else
        return FetchSearchResults(token, selectedDepartment, searchTerm, fuzzy);
    },
    enabled: !!searchTerm && !!selectedDepartment,
    staleTime: 5000,
  });

  // useEffect(() => {
  //   if (searchTerm.length >= 2 && selectedDepartment) {
  //     searchEngineRefetch();
  //   }
  // }, [searchTerm, selectedDepartment]);

  useEffect(() => {
    if (searchEngineData && searchEngineData.length > 0) {
      onSearchResults(searchEngineData);
    }
  }, [searchEngineData, onSearchResults]);

  const toggleAccuracyModal = () => {
    setIsAccuracyModalOpen((prev) => !prev);
  };

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
    <div className="w-full">
      <form>
        <div className="relative w-full">
          <button
            type="button"
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

          <button
            type="button"
            className="absolute flex flex-row items-center px-4 text-sm border-l w-[144px] h-12 rounded-r-lg right-0 top-1/2 transform -translate-y-1/2"
            onClick={toggleDepartmentModal}
          >
            <p className="ml-1">انتخاب سازمان</p>
            <img src={down} alt="dropdown" className="w-3 h-[6px]" />
          </button>

          <div className="absolute right-[144px] top-1/2 transform -translate-y-1/2">
            <button
              type="button"
              className="flex flex-row items-center px-[21px] text-sm border-l w-[144px] h-12 rounded-r-lg"
              onClick={toggleAccuracyModal}
            >
              <p className="ml-1">دقت جستجو</p>
              <img src={down} alt="dropdown" className="w-3 h-[6px]" />
            </button>

            {isAccuracyModalOpen && (
              <div className="absolute top-0 -right-16">
                <SearchAccuracyModalTemplate
                  showModal={true}
                  onClose={() => setIsAccuracyModalOpen(false)}
                >
                  <SearchAccuracyModal
                    onClick={toggleAccuracyModal}
                    onSelect={handleSelectAccuracy}
                  />
                </SearchAccuracyModalTemplate>
              </div>
            )}

          </div>

          <input
            className="w-full h-12 border rounded-lg pr-[296px]"
            placeholder="جستجو"
            value={searchTerm}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            onFocus={()=>setShowModal(true)}
          />

          {showModal && (
            <div className="absolute min-w-full flex flex-row gap-4 bg-white border border-gray-300 rounded-b-lg z-10 px-4">
              <div className="flex flex-col flex-1">
                <button className="flex flex-row items-center justify-between w-full h-14 border border-neutral-100 rounded-lg my-4 px-4" type="button" onClick={() =>SetSelectDepartmentModalOpen((prev) => !prev)}>
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
                <button className="h-14 border border-neutral-100 rounded-lg px-4 my-4">
                  <p className="text-sm text-right">فعال سازی معنی لغات</p>
                </button>
              </div>

              <button className="flex-1 flex flex-row items-center gap-8 justify-start w-full h-14 border border-neutral-100 rounded-lg px-4 mt-4">
                <div className="flex flex-row items-center">
                  <input
                    type="checkbox"
                    className="accent-primary-500"
                    id="exact"
                    onChange={()=>handleSelectDepartment("مطابق عبارت")}
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
                    onChange={()=>handleSelectDepartment("مشابه عبارت")}
                  ></input>
                  <label
                    htmlFor="similar"
                    className="font-myYekanRegular text-text-500 text-sm mr-1"
                  >
                    مشابه عبارت
                  </label>
                </div>
              </button>

              {isSelectDepartmentModalOpen && (
              <div className="absolute -right-4">
                <SearchDepartmentModalTemplate
                  showModal={true}
                  onClose={() => SetSelectDepartmentModalOpen(false)}
                >
                  <SearchSelectDepartment
                    onClick={toggleDepartmentModal}
                    onSelect={handleSelectDepartment}
                  />
                </SearchDepartmentModalTemplate>
              </div>
            )}
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
