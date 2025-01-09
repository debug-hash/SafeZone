import { Badge, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router';
import { HiOutlineShoppingCart } from 'react-icons/hi2';
import { IoPersonOutline } from 'react-icons/io5';
import { CiSearch } from 'react-icons/ci';

import { useAuthStore } from '@/hooks/useAuthStore';
import Avatar from './Avatar';
import ThemeToggle from './ThemeToggle';

const UserMenu = () => {
	const { user, isAuthenticated, logout } = useAuthStore();

	return (
		<Nav className='flex-row align-items-lg-center'>
			{!isAuthenticated ? (
				<>
					<Nav.Item>
						<Nav.Link title='Search'>
							<CiSearch size={20} />
						</Nav.Link>
					</Nav.Item>

					<Nav.Item>
						<Link
							to={'/sign-in'}
							className={'nav-link'}
							title='Sign In'>
							<IoPersonOutline size={20} />
						</Link>
					</Nav.Item>
					{/* <NavLink
						to={'/sign-up'}
						className={'nav-link'}
						title='Sign Up'>
						Sign Up
					</NavLink> */}
					<Nav.Item>
						<Link
							to={'/cart'}
							title={'Cart'}
							className={'nav-link position-relative'}>
							<HiOutlineShoppingCart size={20} />{' '}
							<Badge
								bg='primary'
								className='rounded-circle position-absolute top-50'>
								0
							</Badge>
						</Link>
					</Nav.Item>
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
							as={Link}
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
			<Navbar.Toggle aria-controls='responsive-navbar-nav' />
		</Nav>
	);
};

export default UserMenu;
