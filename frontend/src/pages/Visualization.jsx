import React, { useState } from 'react';
import { useSidebarState } from '../hooks/useSidebarState';
import LineChart from '../components/Charts/LineChart.jsx';
import { VisualizationTechniques } from '../data/visualizationTechniques.js';

const Visualization = () => {
  const { expanded } = useSidebarState();
  const [selectedTechnique, setSelectedTechnique] = useState(null);

  const handleTechniqueChange = (technique) => {
    setSelectedTechnique(technique);
  };

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
          Please select the visualization technique
        </div>
        <div>
          {VisualizationTechniques.map(({ name, icon }, index) => (
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
              {icon && <icon />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Visualization;
