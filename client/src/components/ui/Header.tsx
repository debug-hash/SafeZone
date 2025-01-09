import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router';

import useCategories from '@/hooks/useCategories';
// import Search from './Search';
import UserMenu from './UserMenu';
import { useThemeStore } from '@/hooks/useThemeStore';

const Header = () => {
	const { data } = useCategories();
	const { isDarkMode } = useThemeStore();

	const menu = [
		{
			title: 'Collections',
			path: '/collections',
		},
		{
			title: 'About',
			path: '/about',
		},
		{
			title: 'Contact',
			path: '/contact',
		},
		{
			title: 'Pricing',
			path: '/pricing',
		},
	];

	return (
		<header className={`sticky-top ${isDarkMode && 'border-bottom'}`}>
			<Navbar
				collapseOnSelect
				expand='lg'
				bg={isDarkMode ? 'primary' : 'light'}
				data-bs-theme={isDarkMode ? 'dark' : 'light'}>
				<Container>
					<Link
						className='logo navbar-brand w-36 fw-bold'
						title={
							'eSale 🛒 - Mobile phone, dtdd, smartphone, tablet, tablet, laptop, notebook, accessories, smartwatch, watch, public news turmeric'
						}
						to={'/'}>
						eSale &copy;
					</Link>
					<Navbar.Collapse aria-controls='responsive-navbar-nav'>
						<div className='mx-auto'>
							<Nav className='align-items-lg-center'>
								<NavDropdown
									title='Categories'
									id='collapsible-nav-categories'>
									{data?.map((item) => (
										<Link
											className='dropdown-item'
											key={
												item.id
											}
											title={
												item.title
											}
											to={`/collections/?category=${item.id}`}>
											{item.title}
										</Link>
									))}
								</NavDropdown>
								{menu.map((item, idx) => (
									<li
										className='nav-item'
										key={idx}>
										<NavLink
											className={
												'nav-link'
											}
											to={
												item.path
											}
											title={
												item.title
											}>
											{item.title}
										</NavLink>
									</li>
								))}
							</Nav>
						</div>
					</Navbar.Collapse>
					{/* <Search /> */}
					<UserMenu />
				</Container>
			</Navbar>
		</header>
	);
};

export default Header;
