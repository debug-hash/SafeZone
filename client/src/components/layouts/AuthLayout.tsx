import { Outlet } from 'react-router';

const AuthLayout = () => {
	return (
		<main className='d-flex justify-content-center align-items-center min-vh-100 bg-body-tertiary'>
			<Outlet />
		</main>
	);
};

export default AuthLayout;
