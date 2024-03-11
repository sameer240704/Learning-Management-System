import React from 'react';
import  { Chart as ChartJS, LineElement, PointElement, Tooltip, Legend, RadialLinearScale, Filler } from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register( LineElement, PointElement, Tooltip, Legend, RadialLinearScale, Filler );

const RadarChart = () => {

    const data = {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [{
            label: 'Weekdays',
            data: [30, 18, 98, 43, 78, 12, 90],
            borderColor: "red",
            backgroundColor: "aqua",
        }]
    };

    return (
      <div className='h-4/5 w-4/5 bg-[#1f1f1f] rounded-xl p-5 flex justify-center items-center'>
        <Radar data={data} />
      </div>
    )
}

export default RadarChart;