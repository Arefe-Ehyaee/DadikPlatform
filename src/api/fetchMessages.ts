import { api } from './Auth';

export const fetchMessages = async (token: string) => {
  const response = await api.get('/api/user/messages/', {
    headers: {
      Authorization: `Bearer ${token}`, 
      'Content-Type': 'application/json'
    },
  });
  return response.data;
};