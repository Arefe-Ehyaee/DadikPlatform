import React, { useEffect, useState } from "react";
import { ReactComponent as SearchIcon } from '../../assets/icons/searchEngine.svg';
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
import SearchDelete from "../../assets/icons/searchCross.svg"
import { FetchSearchResults } from "../../api/FetchSearchResults";

export interface SearchResult {
  _index: string;                // Index of the document, e.g., "tamin_ejtemaei"
  _id: string;                   // Document ID, e.g., "uWZkGJUBLTB8PVUSpIi7"
  _score: number;                // Relevance score, e.g., 5.5988836
  _source: {
    Organization: string;        // Organization, e.g., "تامین اجتماعی"
    Title: string;               // Title of the document, e.g., "مدارک و مستندات لازم جهت صدور اعلامیه تهاتر بدهی حق بیمه"
    TitleNumber: string;         // Title number, e.g., "2000/93/2587"
    TitleDate: string;           // Title date, e.g., "1393/6/23"
    Subject: string;             // Subject of the document, e.g., "مدارک و مستندات لازم جهت صدور اعلامیه تهاتر بدهی حق بیمه"
    ApprovalAuthority: string;   // Approval authority, e.g., "معاونت برنامه ریزی، مالی و پشتیبانی"
    AttachmentLink: string | null;  // Link to the attachment, e.g., "https://www.tamin.ir/circularsapi/item/435"
    AttachmentFile: string;      // Attachment file name, e.g., "file_478"
    AttachmentText: string;      // Text content of the attachment
  };
}


interface SearchBarProps {
  onSearchResults: (results: SearchResult[]) => void; // Typing the onSearchResults prop
}

export default function SearchBar({onSearchResults }: SearchBarProps) {
  const [isAccuracyModalOpen, setIsAccuracyModalOpen] = useState(false);
  const [isSelectDepartmentModalOpen, SetSelectDepartmentModalOpen] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);
  const [showSearchTerm, setShowSearchTerm] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedAccuracy, setSelectedAccuracy] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState<string | null>(null);
  const [searchEngineInput, setSearchEngineInput] = useState<string>("");

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
    queryFn: async() => {
      if (!searchTerm || searchTerm.length < 2 || !selectedDepartment) return [];
      if (selectedDepartment === "سازمان امور مالیاتی") return FetchSearchResults(token, "maliat", searchTerm);
      if (selectedDepartment === "سازمان تامین اجتماعی") return FetchSearchResults(token, "tamin_ejtemaei", searchTerm);
      else return FetchSearchResults(token, selectedDepartment, searchTerm);
    },
    enabled: !!searchTerm && searchTerm.length >= 2 && !!selectedDepartment,
    staleTime: 5000,
  });

  useEffect(() => {
    if (searchTerm.length >= 2 && selectedDepartment) {
      searchEngineRefetch();
    }
  }, [searchTerm, selectedDepartment]);
  

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
    console.log("Search button clicked!");
    console.log("Search Term:", searchTerm);
    console.log("Selected Department:", selectedDepartment);
  
    if (!searchTerm.trim() || !selectedDepartment) {
      console.log("Search prevented due to missing values");
      return;
    }
    searchEngineRefetch();
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
  }

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
            <button className="absolute left-16 top-1/2 transform -translate-y-1/2" onClick={handleClearSearchBar} type="button"> 
              <img src={SearchDelete} alt="clean" />
            </button>
          )
          }

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
                <SearchAccuracyModalTemplate showModal={true} onClose={() => setIsAccuracyModalOpen(false)}>
                  <SearchAccuracyModal onClick={toggleAccuracyModal}/>
                </SearchAccuracyModalTemplate>
              </div>
            )}

            {isSelectDepartmentModalOpen && (
              <div className="absolute top-0 right-[calc(100%+8px)]">
                <SearchDepartmentModalTemplate showModal={true} onClose={() => SetSelectDepartmentModalOpen(false)}>
                  <SearchSelectDepartment onClick={toggleDepartmentModal} onSelect={handleSelectDepartment} />
                </SearchDepartmentModalTemplate>
              </div>
            )}
          </div>

          <input
            className="w-full h-12 border rounded-lg pr-[296px]"
            placeholder="جستجو"
            value={searchTerm}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />

          {isModalVisible && (
            <div className="absolute min-w-full bg-white border border-gray-300 rounded-b-lg z-20 px-4">
              {/* <p>{searchTerm}</p> */}
              <button className="flex flex-row items-center text-right min-h-10 gap-2 w-full rounded-lg px-4" dir="rtl">
                {/* <img src={search} alt="search" className="h-4 w-4"/> */}
                <SearchIcon className="text-text-500 w-[15px] h-[15px]"></SearchIcon>
                <div className="font-myYekanRegular text-text-500 text-sm">همه نتایج برای {searchTerm}</div>
              </button>
              <SearchResult text={"مالیات"}></SearchResult>
            </div>
          )}
        </div>

      </form>
    </div>
  );
}
