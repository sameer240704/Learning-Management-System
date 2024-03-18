import React from 'react';
import { useSidebarState } from '../hooks/useSidebarState';

const Courses = () => {
  const { expanded } = useSidebarState();
  console.log(expanded);

  return (
    <div 
        className='courses-container absolute top-0' 
        style={{ left: expanded ? "20vw" : "4vw" }}
    >
      <h1>Courses</h1>
    </div>
  );
}

export default Courses;
