import axios from "axios";

export const postMobilePhoneAPI = async (usernamePhone: string) => {
  const response = await axios.post('/api/user/endpoint/', usernamePhone);
  return response.data;  
};