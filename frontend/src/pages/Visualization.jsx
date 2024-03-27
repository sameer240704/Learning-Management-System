import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { useSidebarState } from '../hooks/useSidebarState';
import { LineChart, BubbleChart, DoughnutChart, BarChart, PieChart, RadarChart, ScatterChart } from "../components/Charts"
import { VisualizationTechniques } from '../data/visualizationTechniques.js';
import { toast } from "react-hot-toast";
import { IoCloseSharp } from "react-icons/io5";

const Visualization = () => {
  const { expanded } = useSidebarState();
  const [selectedTechnique, setSelectedTechnique] = useState(null);
  const [ modalState, setModalState ] = useState(false);
  

  const handleTechniqueChange = (technique) => {
    setSelectedTechnique(technique);
  };

  const handleSelectButton = () => {
    if(selectedTechnique === null) {
      toast.error("No visualization technique selected!");
    }
    else {
      setModalState(true);
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  };

  const closeModal = () => setModalState(false)

  return (
      <div 
        className='visual-container relative top-0 h-screen w-4/5 p-14 z-1 ' 
        style={{ left: expanded ? "20vw" : "10vw" }}
      >
        <div className='flex justify-center align-items gap-10'>  
          <img src='https://cdn.dribbble.com/users/3593/screenshots/2475280/linechart.gif' 
            className='h-96 rounded-xl'
          />
          <img src='https://visme.co/blog/wp-content/uploads/2016/04/Header-1200-3.gif'
            className='h-96 w-1/2 rounded-xl'
          />
        </div>
        <div>
          <div className='h-16 w-full bg-blue-600 rounded text-xl mt-5 px-10 py-3 text-white flex justify-center items-center mb-8'>
            Please select a visualization technique
          </div>
          <div>
            {VisualizationTechniques.map(({ name }, index) => (
              <div key={index} className='chart-selection h-16 w-full mb-2 bg-white flex items-center px-10 rounded text-xl cursor-pointer'>
                <input
                  type="radio"
                  id={`technique-${index}`}
                  name="visualization-technique"
                  value={name}
                  checked={selectedTechnique === name}
                  onChange={() => handleTechniqueChange(name)}
                  className='mr-2'
                />
                <label htmlFor={`technique-${index}`}>{name}</label>
              </div>
            ))}
          </div>
          <div className='flex items-center justify-center'>
            <button className='select-button-visual h-14 w-40 bg-white rounded-lg mt-10 mb-4 text-xl transform transition-transform active:scale-95'
              onClick={handleSelectButton}
            >
              Select
            </button>
          </div>
        </div>
        { modalState && (
          <div className='modal bg-black fixed inset-0 bg-opacity-30 backdrop-blur-sm z-50 flex justify-center items-center'>
            <button 
              className='absolute top-4 left-[95%]'
              onClick={closeModal}
            >
              <IoCloseSharp className='h-10 w-10 text-red-400 hover:text-red-700'/>
            </button>
            {selectedTechnique === "Line Chart" && <LineChart />}
            {selectedTechnique === "Bubble Chart" && <BubbleChart />}
            {selectedTechnique === "Doughnut Chart" && <DoughnutChart />}
            {selectedTechnique === "Bar Chart" && <BarChart />}
            {selectedTechnique === "Pie Chart" && <PieChart />}
            {selectedTechnique === "Radar Chart" && <RadarChart />}
            {selectedTechnique === "Scatter Chart" && <ScatterChart />}
          </div>
        )}
      </div>
  );
}

export default Visualization;
