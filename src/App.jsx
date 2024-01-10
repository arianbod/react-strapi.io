import React from 'react';
import { Sidebar, Navbar, SubMenu, PageContent } from './components';
const App = () => {
	return (
		<main>
			<Navbar />
			<PageContent />
			<Sidebar />
			<SubMenu />
		</main>
	);
};

export default App;
