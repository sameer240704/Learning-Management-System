import { useContext, createContext } from "react";
import { sidebarData } from "../data/sidebarData";
import { MoreVertical, ChevronLast, ChevronFirst } from "lucide-react";
import { useSidebarState } from "../hooks/useSidebarState";

// const SidebarContext = createContext();

export default function Sidebar() {
  const { expanded, setExpanded } = useSidebarState();

  return (
    <aside className="h-screen fixed z-10">
      <nav 
        className="h-full flex flex-col bg-[#1f1f1f] border-r shadow-lg text-white"
        style={{ width: expanded ? "20vw" : "4vw" }}
      >
        <div className="p-4 pb-2 flex justify-between items-center">
          <img
            src="https://img.logoipsum.com/243.svg"
            className={`overflow-hidden transition-all ${
              expanded ? "w-32" : "w-0"
            }`}
            alt=""
          />
          <button
            onClick={() => setExpanded((current) => !current)}
            className="p-1.5 rounded-lg bg-transparent hover:bg-blue-500"
          >
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>

        <ul className="flex-1 px-3">
          {sidebarData.map((item, index) => (
            <SidebarItem key={index} item={item} />
          ))}
        </ul>

        <div className="border-t flex p-3">
          <img
            src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
            alt=""
            className="w-10 h-10 rounded-md"
          />
          <div
            className={`
              flex justify-between items-center
              overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}
          `}
          >
            <div className="leading-4">
              <h4 className="font-semibold">John Doe</h4>
              <span className="text-xs text-white">johndoe@gmail.com</span>
            </div>
            <MoreVertical size={20} />
          </div>
        </div>
      </nav>
    </aside>
  );
}

export function SidebarItem({ item }) {
  const { expanded } = useSidebarState();

  const Icon = item.icon;

  return (
    <li
      className={`
        relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group
        hover:bg-blue-500 text-white
    `}
    >
      <a href={item.links} className="flex items-center">
        <Icon />
        <span
          className={`overflow-hidden transition-all ${
            expanded ? "w-52 ml-3" : "w-0"
          }`}
        >
          {item.name}
        </span>
      </a>
    </li>
  );
}


