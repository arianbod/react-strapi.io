import React from 'react';
import SubMenu from './SubMenu';
import { FaBars } from 'react-icons/fa';
import { useGlobal } from './Context';
const Navbar = () => {
	const { isSidebarOpen, openSidebar } = useGlobal();
	return (
		<nav className='nav-center'>
			<h3 className='logo'>Strapi</h3>
			{!isSidebarOpen && (
				<button
					className='toggle-btn'
					onClick={openSidebar}>
					<FaBars />
				</button>
			)}
		</nav>
	);
};

export default Navbar;
