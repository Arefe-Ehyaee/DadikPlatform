import left from "../../assets/icons/chevron-left.svg";
import right from "../../assets/icons/chevron-right.svg";
import printer from "../../assets/icons/printer.svg";
import word from "../../assets/icons/word-svgrepo-com 2.svg";
import excel from "../../assets/icons/excel-svgrepo-com 2.svg";
import { ReactComponent as Help } from "../../assets/icons/help-circle-Table.svg";
import { ReactComponent as SearchIcon } from "../../assets/icons/searchEngine.svg";
interface HeaderProps {
  view: "day" | "week" | "month";
  setView: (view: "day" | "week" | "month") => void;
  headerElement: React.ReactNode;
  goToPrev: () => void;
  goToNext: () => void;
  handleToday: () => void;
}

type View = "day" | "week" | "month";

export default function HeaderCalendar({
  view,
  setView,
  headerElement,
  goToPrev,
  goToNext,
  handleToday,
}: HeaderProps) {
  return (
    <div className="flex flex-row justify-between items-center my-4">
      <div className="flex flex-row items-center gap-2 w-[320px]">
        <div className="flex flex-row w-[200px] h-12 rounded-lg p-1">
          <button
            onClick={goToPrev}
            className="flex flex-row items-center justify-center gap-2 text-text-500 font-myYekanMedium text-sm w-[80px] h-10 rounded hover:bg-secondary-50 hover:text-secondary-500"
          >
            <img src={right}></img>
          </button>
          <button
            onClick={handleToday}
            className="flex flex-row items-center justify-center gap-2 text-text-500 font-myYekanMedium text-sm w-[120px] h-10 rounded hover:bg-secondary-50 hover:text-secondary-500"
          >
            <span>امروز</span>
          </button>
          <button
            onClick={goToNext}
            className="flex flex-row items-center justify-center gap-2 text-text-500 font-myYekanMedium text-sm w-[80px] h-10 rounded hover:bg-secondary-50 hover:text-secondary-500"
          >
            <img src={left}></img>
          </button>
        </div>

        {headerElement}
      </div>

      <div className="flex flex-row bg-white w-[248px] h-12 rounded-lg p-1">
        {(["day", "week", "month"] as View[]).map((v) => (
          <button
            key={v}
            onClick={() => setView(v)}
            className={`
            flex flex-row items-center justify-center gap-2 font-myYekanMedium text-sm
            w-[120px] h-10 rounded hover:bg-secondary-50 hover:text-secondary-500
            ${
              view === v
                ? "bg-secondary-50 text-secondary-500"
                : "text-text-500"
            }
          `}
          >
            {v === "day" ? "روز" : v === "week" ? "هفته" : "ماه"}
          </button>
        ))}
      </div>

      <div className="flex flex-row items-center gap-4">
        <button>
          <img src={excel} alt="excel" />
        </button>
        <button>
          <img src={word} alt="word" />
        </button>
        <button>
          <img src={printer} alt="print" />
        </button>
        <button>
          <Help className="h-6 w-6 text-text-500"></Help>
        </button>
        <button>
          <SearchIcon className="my-3 mx-auto text-text-500" />
        </button>
      </div>
    </div>
  );
}
