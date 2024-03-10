import React from 'react';
import  { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register( LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend );

const LineChart = () => {

    const data = {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [{
            label: 'Weekdays',
            data: [30, 18, 98, 43, 78, 12, 90],
            borderColor: "yellow",
            backgroundColor: "green",
            tension: 0.4
        }]
    };

    const options = {

    };

    return (
        <div className='h-full w-full bg-[#1f1f1f]'>
            <Line
                data={data}
                options={options}
            >

            </Line>
        </div>
    )
}

export default LineChart;