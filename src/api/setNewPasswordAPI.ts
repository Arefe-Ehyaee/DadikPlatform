import axios from "axios";

export const setNewPasswordAPI = async (data: { password: string; repeatpassword: string }) => {
    const response = await axios.post("/your/api/endpoint", data);
    return response.data;
};

