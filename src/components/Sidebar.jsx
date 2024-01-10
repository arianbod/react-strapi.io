import React from 'react';
import { useGlobal } from './Context';
import { FaBars, FaTimes } from 'react-icons/fa';
import sublinks from '../data';
const Sidebar = () => {
	const { isSidebarOpen, closeSidebar } = useGlobal();
	return (
		<aside className={isSidebarOpen ? 'sidebar show' : 'sidebar'}>
			<div className='sidebar-container'>
				<button className='close-btn'>
					<FaTimes />
				</button>
				<div className='sidebar-links'>
					{sublinks.map((item) => {
						const { links, page, pageId } = item;
						console.log(item);
						return (
							<article key={pageId}>
								<h1>{page}</h1>
								<div className='sidebar-sublinks'>
									{links.map((link) => {
										const { url, icon, label, id } = link;
										return (
											<a
												key={id}
												href={url}>
												{icon}
												{label}
											</a>
										);
									})}
								</div>
							</article>
						);
					})}
				</div>
			</div>
		</aside>
	);
};

export default Sidebar;
