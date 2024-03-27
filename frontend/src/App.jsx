import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import {
  Assignments,
  Classmates,
  Home,
  Leaderboard,
  Courses,
  Visualization,
  Login,
  Register,
  Calendar,
} from "./pages/index";
import { SidebarStateProvider } from "./hooks/useSidebarState";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <SidebarStateProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/home"
            element={
              <>
                <Sidebar />
                <Home />
              </>
            }
          />
          <Route
            path="/leaderboard"
            element={
              <>
                <Sidebar />
                <Leaderboard />
              </>
            }
          />
          <Route
            path="/assignments"
            element={
              <>
                <Sidebar />
                <Assignments />
              </>
            }
          />
          <Route
            path="/classmates"
            element={
              <>
                <Sidebar />
                <Classmates />
              </>
            }
          />
          <Route
            path="/courses"
            element={
              <>
                <Sidebar />
                <Courses />
              </>
            }
          />
          <Route
            path="/calendar"
            element={
              <>
                <Sidebar />
                <Calendar />
              </>
            }
          />
          <Route
            path="/visualization"
            element={
              <>
                <Sidebar />
                <Visualization />
              </>
            }
          />
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
      <Toaster position="top-center" reverseOrder={false} />
    </SidebarStateProvider>
  );
}

export default App;
