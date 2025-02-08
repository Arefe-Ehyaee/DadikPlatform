import { Moment } from 'jalali-moment';
import React from 'react'
import { Task } from './CalendarTypes';

interface DayViewProps {
    hours: number[];
    currentDate: Moment;
    tasks: Task[];
    renderTasks: (date: Moment, hour?: number) => React.ReactNode;
    handleOpenModal: (date: Moment, hour?: number) => void;
  }
  
export default function DayView({hours, currentDate, tasks, renderTasks, handleOpenModal}:DayViewProps) {
  return (
    <table className="w-full border-collapse border border-gray-300">
    <tbody>
      {hours.map((hour) => {
        return (
          <tr
            key={hour}
            className={`h-20 hover:bg-gray-50`}
            onClick={() => handleOpenModal(currentDate, hour)}
          >
            <td className="border border-gray-300 text-center w-16 font-myYekanFaNumMedium">
              {String(hour).padStart(2, "0")}:00
            </td>
            <td className="border border-gray-300 relative">
              {/* 1) Wrap tasks in a scroll container */}
              <div className="flex flex-row flex-wrap gap-1 overflow-auto max-h-20 p-1">
                {renderTasks(currentDate, hour)}
              </div>
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
  )
}
