import { api } from './Auth';

export const FetchSearchResults = async (token: string, department : string, query : string, fuzzy: boolean, page =1) => {
  const response = await api.get('/api/search/', {
    params : {
        index: department,
        q: query,
        fuzzy: fuzzy,
        page: page
    },
    headers: {
      Authorization: `Bearer ${token}`, 
      'Content-Type': 'application/json'
    },
  });
  return {
    data: response.data.hits, // Hits from the response (your search results)
    page: response.data.page, // Current page
    total_pages: response.data.total_pages, // Total pages available
    nextCursor: response.data.page < response.data.total_pages ? response.data.page + 1 : undefined, // Next page
    prevCursor: response.data.page > 1 ? response.data.page - 1 : undefined, // Previous page
  };
};