import React from 'react';
import { useSidebarState } from '../hooks/useSidebarState';

const Home = () => {
  const { expanded } = useSidebarState();
  console.log(expanded);

  return (
    <div className='absolute top-0' style={{ left: expanded ? "20vw" : "4vw" }}>
      <h1>Home</h1>
    </div>
  );
}

export default Home;
