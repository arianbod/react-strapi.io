import React from 'react';
import Menu from './Menu';
import { useGlobal } from './Context';
const Header = () => {
	const { isSidebarOpen } = useGlobal();
	console.log(isSidebarOpen);
	return <div>Header</div>;
};

export default Header;
