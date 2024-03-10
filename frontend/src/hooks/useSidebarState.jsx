import { createContext, useContext, useState } from 'react';

const SidebarStateContext = createContext();

export const useSidebarState = () => {
  return useContext(SidebarStateContext);
};

export const SidebarStateProvider = ({ children }) => {
  const [expanded, setExpanded] = useState(true);

  return (
    <SidebarStateContext.Provider value={{ expanded, setExpanded }}>
      {children}
    </SidebarStateContext.Provider>
  );
};
