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

  console.log("Current Page from API:", response.data.page);
  console.log("prevCursor", response.data.page > 1 ? response.data.page - 1 : undefined)
  return {
    data: response.data.hits, 
    page: response.data.page, 
    total_pages: response.data.total_pages,
    nextCursor: response.data.page < response.data.total_pages ? response.data.page + 1 : undefined, 
    prevCursor: response.data.page > 1 ? response.data.page - 1 : undefined , 
  };
};