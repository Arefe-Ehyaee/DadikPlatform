import { api } from './Auth';

export const FetchSearchEngineSuggestion = async (token: string, searchEngineInput: string) => {
  const response = await api.get('/api/search/suggestion', {
    params: {
        query: searchEngineInput,
        count: 3
      },
    headers: {
      Authorization: `Bearer ${token}`, 
      'Content-Type': 'application/json'
    },
  });
  return response.data;
};