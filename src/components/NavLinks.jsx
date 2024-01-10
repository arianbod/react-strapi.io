import React from 'react';
import sublinks from '../data';
import { useGlobal } from './Context';
const NavLinks = () => {
	const { setPageId } = useGlobal();
	return (
		<div className='nav-links'>
			{sublinks.map((subLink) => {
				const { page, pageId } = subLink;

				return (
					<article key={pageId}>
						<button
							className='nav-link'
							onMouseEnter={() => setPageId(pageId)}>
							{page}
						</button>
					</article>
				);
			})}
		</div>
	);
};
export default NavLinks;
