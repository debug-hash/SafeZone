import { Nav, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router';

import { useAuthStore } from '@/hooks/useAuthStore';
import Avatar from './Avatar';
import ThemeToggle from './ThemeToggle';

const UserMenu = () => {
	const { user, isAuthenticated, logout } = useAuthStore();

	return (
		<Nav className='align-items-lg-center'>
			{!isAuthenticated ? (
				<>
					<NavLink
						to={'/sign-in'}
						className={'nav-link'}
						title='Sign In'>
						Sign In
					</NavLink>
					<NavLink
						to={'/sign-up'}
						className={'nav-link'}
						title='Sign Up'>
						Sign Up
					</NavLink>
				</>
			) : (
				<>
					<NavDropdown
						title={
							<Avatar
								user={user!}
								size={32}
							/>
						}
						id='user-nav-dropdown'>
						<NavDropdown.Item
							as={NavLink}
							to='/profile'>
							Profile
						</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item onClick={logout}>
							Logout
						</NavDropdown.Item>
					</NavDropdown>
					<ThemeToggle />
				</>
			)}
		</Nav>
	);
};

export default UserMenu;
