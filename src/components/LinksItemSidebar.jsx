import React from 'react';

const LinksItemSidebar = ({ links, page }) => {
	return (
		<article>
			<h4>{page}</h4>
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
};

export default LinksItemSidebar;
