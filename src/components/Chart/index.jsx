import React, { useState, useEffect } from 'react';

import { Line, Bar } from 'react-chartjs-2';

import { Container } from './style';
import { fetchDailyData } from '../../services/api';

export const Chart = ({ data: { confirmed, deaths, recovered }, country }) => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      setDailyData(await fetchDailyData());
    };
    fetchApi();
  }, []);

  console.log(country);

  const lineChart =
    dailyData.length !== 0 ? (
      <Line
        data={{
          labels: dailyData.map(({ date }) => date),
          datasets: [
            {
              data: dailyData.map(({ confirmed }) => confirmed),
              label: 'Infectados',
              borderColor: '#3333ff',
              fill: true,
            },
            {
              data: dailyData.map(({ deaths }) => deaths),
              label: 'Mortos',
              borderColor: 'red',
              backgorundColor: 'rgba(255,0,0,0.5)',
              fill: true,
            },
          ],
        }}
      />
    ) : null;

  const barChart = confirmed ? (
    <Bar
      data={{
        labels: ['Infectados', 'Recuperados', 'Mortes'],
        datasets: [
          {
            label: 'Pessoas',
            backgroundColor: [
              'rgba(0, 0, 255, 0.5)',
              'rgba(0, 255, 0, 0.5)',
              'rgba(255, 0, 0, 0.5)',
            ],
            data: [confirmed.value, recovered.value, deaths.value],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Estado atual` },
      }}
    />
  ) : null;

  return (
    <>
      <Container>{country ? barChart : lineChart}</Container>
    </>
  );
};
