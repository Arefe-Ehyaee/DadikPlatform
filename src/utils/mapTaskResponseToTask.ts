import jalaliMoment from "jalali-moment";
import { Task, TaskResponse } from "../Pages/WorkTable/CalendarTypes";



export const mapTaskResponseToTask = (taskResponse: TaskResponse): Task => {
  const isoDateTime = jalaliMoment(taskResponse.isoDateTime);
  const jalaliDate = isoDateTime.format("jYYYY-jMM-jDD"); // Convert to Jalali
  const gregorianDate = isoDateTime.format("YYYY-MM-DD"); // Gregorian format
  const startHour = isoDateTime.hour(); // Extract the hour

  return {
    id: Number(taskResponse.id), // Assuming ID is a string from backend
    title: taskResponse.title,
    date: jalaliDate,
    gregorianDate: gregorianDate,
    startHour: startHour,
    isoDateTime: taskResponse.isoDateTime,
  };
};
