import axios from "axios";
import { getTokenFromCookie } from "../utils/cookies";

const token = getTokenFromCookie();

export const postLegalProfile = async (legalProfileData: {
  companyName: string;
  companyNationalCode: string;
  phone: string;
  workAddress: string;
  avatar: string;
  email: string;
  referenceNCode: string;
  referencePhone: string;
  referenceName: string;
  website: string;
  referenceLetter: string;
  officialGazette: string;
}) => {
  const response = await axios.post("/api/legalProfile", legalProfileData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  return response.data; 
};
