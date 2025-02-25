import axios from "axios";
import { getTokenFromCookie } from "../utils/cookies";
import { api } from "./Auth";

const token = getTokenFromCookie();



export const postLegalProfile = async (legalProfileData: object) => {
  const response = await api.patch("/api/user/update/", legalProfileData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",  // Send JSON instead of FormData
    },
  });
  return response.data;
};
