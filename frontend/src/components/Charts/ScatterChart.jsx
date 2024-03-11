import React from 'react';
import { Chart as ChartJS, ScatterController, CategoryScale, LinearScale, PointElement, Tooltip, Legend } from 'chart.js';
import { Scatter } from "react-chartjs-2";

ChartJS.register(ScatterController, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const scatter_data1 = [
  { x: 5, y: 1, r: 11 },
  { x: 3, y: 5, r: 35 },
  { x: 7, y: 3, r: 13 },
  { x: 2, y: 7, r: 24 },
  { x: 9, y: 9, r: 17 },
  { x: 10, y: 2, r: 12 },
  { x: 8, y: 9, r: 14 },
  { x: 1, y: 1, r: 19 },
  { x: 5, y: 2, r: 15 },
];

const scatter_data2 = [
  { x: 3, y: 2, r: 5 },
  { x: 1.5, y: 8, r: 15 },
  { x: 5, y: 5.8, r: 23 },
  { x: 1, y: 9, r: 4 },
  { x: 10.7, y: 7, r: 17 },
  { x: 10, y: 2, r: 12 },
  { x: 8.6, y: 9.3, r: 14 },
  { x: 8.7, y: 3, r: 16 },
  { x: 5.6, y: 2.4, r: 25 },
];

const ScatterChart = () => {
  const data = {
    datasets: [
      {
        label: 'First Dataset',
        data: scatter_data1,
        backgroundColor: 'rgba(255, 0, 0, 0.5)',
        borderColor: 'red',
        borderWidth: 1,
      },
      {
        label: 'Second Dataset',
        data: scatter_data2,
        backgroundColor: 'rgba(0, 255, 0, 0.5)',
        borderColor: 'green',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className='h-4/5 w-4/5 bg-[#1f1f1f] rounded-xl p-5 flex justify-center items-center'>
      <Scatter data={data} />
    </div>
  );
};

export default ScatterChart;
