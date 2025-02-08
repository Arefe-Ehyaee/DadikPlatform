import { formatPersianTime } from '../../utils/dateUtils';
import { Task } from './CalendarTypes';

interface TaskItemProps {
    task: Task;
  }
  
export default function TaskItem({task}:TaskItemProps) {
    const timeStr =
    task.startHour !== undefined
      ? ` ${formatPersianTime(task.startHour)}`
      : "";
      
  return (
    <div
    key={task.id}
    className="bg-secondary-50 max-h-full w-[112px] text-text-500 font-myYekanRegular p-1 rounded-md text-sm shadow-md mt-1 mx-auto my-2"
  >
    <div className="text-text-500">{task.title}</div>
    <div className="text-text-300 font-myYekanFaNumRegular">
      {timeStr && " " + timeStr}
    </div>
  </div>
  )
}
