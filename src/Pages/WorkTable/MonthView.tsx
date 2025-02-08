import React from "react";
import { Moment } from "jalali-moment";
import {isToday } from "../../utils/dateUtils";

interface MonthViewProps {
  weeks: (Moment | null)[][];
  renderTasks: (date: Moment, hour?: number) => React.ReactNode;
  handleOpenModal: (date: Moment, hour?: number) => void;
}

const MonthView: React.FC<MonthViewProps> = ({
  weeks,
  renderTasks,
  handleOpenModal,
}) => {
  return (
    <>
      {/* Day-name row for month view (Saturday to Friday) */}
      <div className="grid grid-cols-7 gap-2 mb-2 text-center text-text-300 text-sm">
        <div>شنبه</div>
        <div>یکشنبه</div>
        <div>دوشنبه</div>
        <div>سه‌شنبه</div>
        <div>چهارشنبه</div>
        <div>پنجشنبه</div>
        <div>جمعه</div>
      </div>

      {/* Render each "week" as a row */}
      <div className="flex flex-col space-y-2">
        {weeks.map((week, rowIndex) => (
          <div key={rowIndex} className="grid grid-cols-7 gap-2">
            {week.map((cell, colIndex) => {
              if (!cell) {
                return (
                  <div
                    key={colIndex}
                    className="p-4 border rounded bg-gray-50 text-gray-400"
                  >
                    {/* Empty */}
                  </div>
                );
              }

              const highlight = isToday(cell) ? "bg-secondary-50" : "";
              return (
                <div
                  key={cell.format()}
                  className={`p-4 border rounded cursor-pointer ${highlight}`}
                  onClick={() => handleOpenModal(cell)}
                >
                  <p className="font-myYekanFaNumMedium">
                    {cell.format("jD")}
                  </p>
                  {renderTasks(cell)}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </>
  );
};

export default MonthView;
