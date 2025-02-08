import axios from 'axios';
import { mapTaskResponseToTask } from '../utils/mapTaskResponseToTask';
import { getTokenFromCookie } from '../utils/cookies';
import { Task, TaskResponse } from '../Pages/WorkTable/CalendarTypes';
import { api } from './Auth';

const token = getTokenFromCookie();

export const fetchTasks = async (): Promise<Task[]> => {
  const response = await api.get<TaskResponse[]>("/api/tasks", {
    headers: {
      Authorization: `Bearer ${token}`, 
      'Content-Type': 'application/json'
    },
  });
  return response.data.map(mapTaskResponseToTask);
};

// export const fetchTasks = async (): Promise<Task[]> => {
//   return Promise.resolve([
//     {
//       id: 1,
//       title: "Task 1",
//       date: "1402-10-10", // Jalali date
//       gregorianDate: "2024-01-01", // Gregorian date
//       startHour: 9,
//       isoDateTime: "2024-01-01T09:00:00Z",
//     },
//     {
//       id: 2,
//       title: "Task 2",
//       date: "1402-10-10",
//       gregorianDate: "2024-01-01",
//       startHour: 15,
//       isoDateTime: "2024-01-01T15:00:00Z",
//     },
//   ]);
// };
