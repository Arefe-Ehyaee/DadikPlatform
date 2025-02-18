import { api } from './Auth';

export const FetchSearchResults = async (token: string, department : string, query : string) => {
  const response = await api.get('/api/search/', {
    params : {
        index: department,
        q: query,
        fuzzy: true
    },
    headers: {
      Authorization: `Bearer ${token}`, 
      'Content-Type': 'application/json'
    },
  });
  return response.data;
};