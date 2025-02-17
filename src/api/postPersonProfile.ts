import axios from "axios";
import { getTokenFromCookie } from "../utils/cookies";
import { api } from "./Auth";

const token = getTokenFromCookie();

export const postPersonProfile = async (personProfileData: FormData) => {
  const response = await api.patch("/api/user/update/", personProfileData, {
    headers: {
      Authorization: `Bearer ${token}`,
      
    },
  });
  return response.data;
};



