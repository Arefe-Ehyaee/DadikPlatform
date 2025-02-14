import moment from "moment-timezone";
import jalaliMoment from "jalali-moment";
import { Task, TaskResponse } from "../Pages/WorkTable/CalendarTypes";

export const mapTaskResponseToTask = (taskResponse: TaskResponse): Task => {
  const isoDateTimeUTC = moment.utc(taskResponse.deadline);
  const isoDateTimeIran = isoDateTimeUTC.tz("Asia/Tehran");

  const jalaliDate = jalaliMoment(isoDateTimeIran.toDate()).locale("fa").format("jYYYY/jMM/jDD"); 

  const startHour = parseInt(isoDateTimeIran.format("HH"), 10);

  // console.log("Jalali Date:", jalaliDate);

  return {
    id: Number(taskResponse.id),
    title: taskResponse.title,
    deadline: taskResponse.deadline, 
    date: jalaliDate,
    startHour, 
    isoDateTime: taskResponse.deadline,
  };
};
