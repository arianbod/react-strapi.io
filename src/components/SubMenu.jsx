import React, { useEffect, useState } from 'react';
import { useGlobal } from './Context';
import sublinks from '../data';
const SubMenu = () => {
	const { pageId, setPageId, setMouseInSubmenu } = useGlobal();
	const [submenuItems, setSubmenuItems] = useState([]);
	const [foundItemPage, setFoundItemPage] = useState(null);
	useEffect(() => {
		const foundItem = sublinks.find((item) => item.pageId === pageId);
		foundItem
			? (setSubmenuItems(foundItem?.links), setFoundItemPage(foundItem?.page))
			: (setSubmenuItems([]), setFoundItemPage(null));
	}, [pageId]);
	return (
		<section
			className={pageId ? 'sub-menu show-submenu' : 'sub-menu'}
			onMouseLeave={() => (setPageId(null), setMouseInSubmenu(false))}
			onMouseEnter={() => setMouseInSubmenu(true)}>
			<h5>{foundItemPage}</h5>
			<section
				className='sub-menu-container'
				style={{
					gridTemplateColumns: submenuItems?.length > 3 ? '1fr 1fr' : '1fr',
				}}>
				{submenuItems?.map((sublink) => {
					const { icon, url, label, id } = sublink;
					console.log(sublink);
					return (
						<a
							href={url}
							key={id}>
							{icon}
							{label}
						</a>
					);
				})}
			</section>
		</section>
	);
};

export default SubMenu;
