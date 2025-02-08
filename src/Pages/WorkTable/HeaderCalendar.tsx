import left from "../../assets/icons/chevron-left.svg";
import right from "../../assets/icons/chevron-right.svg";

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
      {/* View Switcher */}
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

      {/* Updated headerElement for Day/Week/Month */}
      {headerElement}

      <div className="flex flex-row bg-white w-[248px] h-12 rounded-lg p-1">
        <button
          onClick={goToPrev}
          className="flex flex-row items-center justify-center gap-2 text-text-500 font-myYekanMedium text-sm w-[120px] h-10 rounded hover:bg-secondary-50 hover:text-secondary-500"
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
          className="flex flex-row items-center justify-center gap-2 text-text-500 font-myYekanMedium text-sm w-[120px] h-10 rounded hover:bg-secondary-50 hover:text-secondary-500"
        >
          <img src={left}></img>
        </button>
      </div>
    </div>
  );
}
