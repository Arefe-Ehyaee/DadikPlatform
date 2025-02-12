import axios from 'axios';
// import Cookies from 'js-cookie';


export const api = axios.create({
  baseURL: 'https://api.legaldadik.ir',
  // withCredentials: true,  
});


export const Initialsignup = async (userData: { usernamePhone: string; password: string }) => {
  const response = await api.post('/api/user/register/', userData);
  return response.data;  // { user, token }
};


export const postLoginPassAPI = async (credentials: { username: string; password: string }) => {
  const response = await api.post('/api/token/', credentials);
  return response.data; // { token }
};



export const fetchUserProfile = async (token: string) => {
  const response = await api.get('/api/user/dashboard/', {
    headers: {
      Authorization: `Bearer ${token}`, 
      'Content-Type': 'application/json'
    },
  });
  return response.data;
};