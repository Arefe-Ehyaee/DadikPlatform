import axios from "axios";
import { getTokenFromCookie } from "../utils/cookies";

const token = getTokenFromCookie();

export const postPersonProfile = async (personProfileData: {
  name: string;
  nationalCode: string;
  job: string;
  username: string;
  password: string;
  phone: string;
  workAddress: string;
  workPhone: string;
  avatar: string;
  post: string;
}) => {
  const response = await axios.post("/api/personProfile", personProfileData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  return response.data;
};
