import React from 'react';
// import Highcharts from 'highcharts';
// import HighchartsReact from 'highcharts-react-official';
import { useMarketData } from './table';



const MarketChart = () => {
  const { data, isLoading, error } = useMarketData();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;
  if(data) console.log(data)

  const chartOptions = {
    title: {
      text: 'Market Prices',
    },
    xAxis: {
      categories: ['Buy', 'Sell'],
    },
    yAxis: {
      title: {
        text: 'Value',
      },
    },
    series: [
      {
        name: 'Buy Price',
        data: [Number(data?.abshodeh.value)],
      },
      {
        name: 'Sell Price',
        data: [Number(data?.harat_naghdi_sell.value)],
      },
    ],
  };

  // return <HighchartsReact highcharts={Highcharts} options={chartOptions} />;
};

export default MarketChart;

