import React, { useState } from "react";
import search from "../../assets/icons/searchEngine.svg";
import down from "../../assets/icons/down.svg";
import SearchAccuracyModal from "./SearchAccuracyModal";
import SearchAccuracyModalTemplate from "./SearchAccuracyModalTemplate";

export default function SearchBar() {
  const [isAccuracyModalOpen, setIsAccuracyModalOpen] = useState(false);

  const toggleAccuracyModal = () => {
    setIsAccuracyModalOpen((prev) => !prev);
  };

  return (
    <div>
      <form>
        <div className="relative min-w-[916px]">
          {/* Search icon button */}
          <button
            type="button"
            className="absolute bg-primary-500 w-14 h-12 rounded-l-lg left-0 top-1/2 transform -translate-y-1/2"
          >
            <img src={search} alt="search" className="my-3 mx-auto" />
          </button>

          {/* انتخاب سازمان button */}
          <button
            type="button"
            className="absolute flex flex-row items-center px-4 text-sm border-l w-[144px] h-12 rounded-r-lg right-0 top-1/2 transform -translate-y-1/2"
          >
            <p className="ml-1">انتخاب سازمان</p>
            <img src={down} alt="dropdown" className="w-3 h-[6px]" />
          </button>

          {/* 
            Wrap the دقت جستجو button and modal in a relative container.
            This makes the modal’s absolute positioning relative to this div.
          */}
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
              // The modal is positioned absolutely so that it appears directly below the button.
              <div className="absolute top-0 -right-16">
                <SearchAccuracyModalTemplate showModal={true} onClose={() => setIsAccuracyModalOpen(false)}>
                  <SearchAccuracyModal onClick={toggleAccuracyModal} />
                </SearchAccuracyModalTemplate>
              </div>
            )}
          </div>

          {/* Main search input */}
          <input
            className="min-w-[916px] h-12 border rounded-lg pr-[296px]"
            placeholder="جستجو"
          />
        </div>
      </form>
    </div>
  );
}
