import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useMarketData } from './table';

const MarketChart = () => {
  const { data, isLoading, error } = useMarketData();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;
  if (data) console.log(data);

  const baharPrice = Number(data?.bahar?.value);
  const abshodehPrice = Number(data?.abshodeh?.value);

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
        name: 'Bahar Price',
        data: [baharPrice],
      },
      {
        name: 'Abshodeh Price',
        data: [abshodehPrice],
      },
    ],
  };

  return (
    <div>
      <h3>{chartOptions.title.text}</h3>
      <p className=''>Bahar Price: {baharPrice}</p>
      <p>Abshodeh Price: {abshodehPrice}</p>
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </div>
  );
};

export default MarketChart;
