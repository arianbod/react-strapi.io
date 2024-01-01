import React, { useContext, createContext, useState } from 'react';
const AppContext = createContext();
export const AppProvider = ({ children }) => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const openSidebar = () => setIsSidebarOpen(true);
	const closeSidebar = () => setIsSidebarOpen(false);
	const Values = {
		isSidebarOpen,
		openSidebar,
		closeSidebar,
	};
	return <AppContext.Provider value={Values}>{children}</AppContext.Provider>;
};
export const useGlobal = () => useContext(AppContext);
