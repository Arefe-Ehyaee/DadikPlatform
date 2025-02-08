import axios from "axios";

export const postCodeAPI = async (code: string) => {
    const response = await axios.post("/your/api/endpoint", code);
    return response.data;
};