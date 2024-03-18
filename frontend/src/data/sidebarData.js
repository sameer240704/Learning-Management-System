// sidebarData.js

import { MdLeaderboard, MdAssignment } from "react-icons/md";
import { FaChartArea, FaHome } from "react-icons/fa";
import { IoPeopleSharp } from "react-icons/io5";

export const sidebarData = [
  {
    name: "Home",
    icon: FaHome,
    links: "/home"
  },
  {
    name: "Leaderboard",
    icon: MdLeaderboard,
    links: "/leaderboard"
  },
  {
    name: "Classmates",
    icon: IoPeopleSharp,
    links: "/classmates"
  },
  {
    name: "Assignments",
    icon: MdAssignment,
    links: "/assignments"
  },
  {
    name: "Courses",
    icon: MdAssignment,
    links: "/courses"
  },
  {
    name: "Visualization",
    icon: FaChartArea,
    links: "/visualization"
  }
];