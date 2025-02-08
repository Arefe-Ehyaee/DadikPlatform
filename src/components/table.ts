import { useQuery, UseQueryResult } from '@tanstack/react-query';
import axios from 'axios';

interface MarketData {
  abshodeh: {
    value: string;
    change: number;
    timestamp: number;
    date: string;
  };
  harat_naghdi_sell: {
    value: string;
    change: number;
    timestamp: number;
    date: string;
  };
}

const fetchData = async (): Promise<MarketData> => {
  const response = await axios.get('http://api.navasan.tech/latest/', {
    params: {
      api_key: 'freeZv5M0Qy7OA79BYPaI85LJQA6rquo',
    },
  });
  return response.data;
};

export const useMarketData = (): UseQueryResult<MarketData, Error> => {
  return useQuery<MarketData, Error>({
    queryKey: ['marketData'],
    queryFn: fetchData,
  });
};