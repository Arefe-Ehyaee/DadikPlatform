import axios from "axios";
import { getTokenFromCookie } from "../utils/cookies";
import { api } from "./Auth";

const token = getTokenFromCookie();

export const postPersonProfile = async (personProfileData: {
  firstName: string;
  lastName: string;
  nationalCode: string;
  job: string;
  phone: string;
  workAddress: string;
  workPhone: string;
  profilePicture: string;
  post: string;
  education: string;
}) => {
  const response = await api.patch("/api/user/update/", personProfileData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  return response.data;
};


