import React, { useState, useEffect } from 'react';
import SubMenu from './SubMenu';
import { FaBars } from 'react-icons/fa';
import { useGlobal } from './Context';
import NavLinks from './NavLinks';

const Navbar = () => {
	const {
		isSidebarOpen,
		openSidebar,
		setPageId,
		mouseInSubmenu,
		setMouseInSubmenu,
	} = useGlobal();

	const [leaveTimer, setLeaveTimer] = useState(null);

	useEffect(() => {
		// Clear the timeout when the component unmounts
		return () => clearTimeout(leaveTimer);
	}, [leaveTimer]);

	const handleMouseLeave = () => {
		const timer = setTimeout(() => {
			if (!mouseInSubmenu) {
				setPageId(null);
				setMouseInSubmenu(false);
			}
		}, 300); // Delay of 300ms
		setLeaveTimer(timer);
	};

	const handleMouseEnter = () => {
		clearTimeout(leaveTimer); // Clear timeout when mouse enters
	};

	return (
		<nav
			className='nav-center'
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}>
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
