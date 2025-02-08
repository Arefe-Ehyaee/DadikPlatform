import React from "react";
import { Moment } from "jalali-moment";
import { isToday } from "../../utils/dateUtils";
import { Task } from "./CalendarTypes";

interface WeekViewProps {
  hours: number[];
  daysOfWeek: Moment[];
  tasks: Task[];
  renderTasks: (date: Moment, hour?: number) => React.ReactNode;
  handleOpenModal: (date: Moment, hour?: number) => void;
}

const WeekView: React.FC<WeekViewProps> = ({
  hours,
  daysOfWeek,
  tasks,
  renderTasks,
  handleOpenModal,
}) => {
  return (
    <table
      className="w-full table-fixed border-collapse border border-gray-300 text-text-300 font-myYekanRegular text-sm mb-2"
      dir="rtl"
    >
      <thead>
        <tr>
          <th className="border w-16">ساعت</th>
          {daysOfWeek.map((day) => {
            const dayIsToday = isToday(day);
            return (
              <th key={day.format()} className="border py-1">
                <div className="mb-1 font-myYekanRegular text-sm">
                  {day.format("ddd")}
                </div>
                <div className="font-myYekanFaNumMedium text-text-500 py-1">
                  {dayIsToday ? (
                    <span className="bg-primary-500 px-2 min-w-8 h-6 rounded-full text-white">
                      {day.format("jD")}
                    </span>
                  ) : (
                    day.format("jD")
                  )}
                </div>
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {hours.map((hour) => (
          <tr key={hour}>
            <td className="border text-center font-myYekanFaNumMedium">
              {hour}:00
            </td>
            {daysOfWeek.map((day) => (
              <td
                key={day.format()}
                className="border h-[50px] hover:bg-gray-50"
                onClick={() => handleOpenModal(day, hour)}
              >
                {renderTasks(day, hour)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default WeekView;
