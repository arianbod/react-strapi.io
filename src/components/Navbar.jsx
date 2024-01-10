import React from 'react';
import SubMenu from './SubMenu';
import { FaBars } from 'react-icons/fa';
import { useGlobal } from './Context';
import NavLinks from './NavLinks';
const Navbar = () => {
	const { isSidebarOpen, openSidebar } = useGlobal();
	return (
		<nav className='nav-center'>
			<h3 className='logo'>Strapi</h3>
			<NavLinks />
			<SubMenu />
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
