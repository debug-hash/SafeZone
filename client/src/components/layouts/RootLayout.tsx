import { Outlet } from 'react-router';

import Header from '../ui/Header';
import Footer from '../ui/Footer';

const RootLayout = () => {
	return (
		<>
			<Header />
			<main className='container min-vh-100'>
				<Outlet />
			</main>
			<Footer />
		</>
	);
};

export default RootLayout;
