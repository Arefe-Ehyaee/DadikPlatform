import { api } from './Auth';

export const FetchDepartments = async (token: string) => {
  const response = await api.get('/api/departments/', {
    headers: {
      Authorization: `Bearer ${token}`, 
      'Content-Type': 'application/json'
    },
  });
  return response.data;
};
