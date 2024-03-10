import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from './components/Sidebar';
import { Assignments, Classmates, Dashboard, Leaderboard, Visualization  } from "./pages/index";
import { SidebarStateProvider } from './hooks/useSidebarState';

function App() {
  return (
    <SidebarStateProvider>
      <BrowserRouter>
          <Sidebar />
        <Routes>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/leaderboard' element={<Leaderboard />} />
          <Route path='/assignments' element={<Assignments />} />
          <Route path='/classmates' element={<Classmates />} />
          <Route path='/visualization' element={<Visualization />} />
        </Routes>
      </BrowserRouter>
    </SidebarStateProvider>
  )
}

export default App;
