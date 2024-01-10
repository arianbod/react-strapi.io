import React from 'react';
import { useGlobal } from './Context';
import { FaBars, FaTimes } from 'react-icons/fa';
import LinksSIdebar from './LinksSIdebar';
const Sidebar = () => {
	const { isSidebarOpen, closeSidebar } = useGlobal();
	return (
		<aside className={isSidebarOpen ? 'sidebar show' : 'sidebar'}>
			<div className='sidebar-container'>
				<button
					className='close-btn'
					onClick={closeSidebar}>
					<FaTimes />
				</button>
				<LinksSIdebar />
			</div>
		</aside>
	);
};

export default Sidebar;
