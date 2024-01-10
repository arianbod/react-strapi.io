import React from 'react';
import sublinks from '../data';
import LinksItemSidebar from './LinksItemSidebar';
const LinksSIdebar = () => {
	return (
		<div className='sidebar-links'>
			{sublinks.map((item) => {
				return (
					<LinksItemSidebar
						key={item.pageId}
						{...item}
					/>
				);
			})}
		</div>
	);
};

export default LinksSIdebar;
