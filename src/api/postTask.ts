import axios from "axios";
import { Task, TaskPost } from "../Pages/WorkTable/CalendarTypes";
import { getTokenFromCookie } from "../utils/cookies";

const token = getTokenFromCookie();

const prepareTaskForSubmission = (task: Task): TaskPost => ({
  title: task.title,
  isoDateTime: task.isoDateTime,
});

export const submitTask = async (task: Task) => {
  const taskPost: TaskPost = prepareTaskForSubmission(task);

  const response = await axios.post("/api/tasks", taskPost, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  return response.data; 
};