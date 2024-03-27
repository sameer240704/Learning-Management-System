import React from "react";
import { useSidebarState } from "../hooks/useSidebarState";

const Calendar = () => {
  const { expanded } = useSidebarState();

  return (
    <div
      className="courses-container absolute top-0"
      style={{ left: expanded ? "20vw" : "4vw" }}
    >
      <h1>Calendar</h1>
    </div>
  );
};

export default Calendar;
