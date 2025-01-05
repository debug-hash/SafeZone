import { Badge, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router';
import { HiOutlineShoppingCart } from 'react-icons/hi2';

import useCategories from '@/hooks/useCategories';
import Search from './Search';
import UserMenu from './UserMenu';
import { useThemeStore } from '@/hooks/useThemeStore';

const Header = () => {
	const { data } = useCategories();
	const { isDarkMode } = useThemeStore();

	return (
		<header className={`sticky-top ${isDarkMode && 'border-bottom'}`}>
			<Navbar
				collapseOnSelect
				expand='lg'
				bg={isDarkMode ? 'primary' : 'light'}
				data-bs-theme={isDarkMode ? 'dark' : 'light'}>
				<Container>
					<Link
						className='navbar-brand fw-bold font-monospace'
						title={
							'eSale 🛒 - Mobile phone, dtdd, smartphone, tablet, tablet, laptop, notebook, accessories, smartwatch, watch, public news turmeric'
						}
						to={'/'}>
						eSale 🛒
					</Link>
					<Navbar.Toggle aria-controls='responsive-navbar-nav' />
					<Navbar.Collapse id='responsive-navbar-nav'>
						<div className='mx-auto'>
							<Search />
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
								<li className='nav-item'>
									<NavLink
										className={
											'nav-link'
										}
										to={'/collections'}
										title={
											'Collections'
										}>
										Collections
									</NavLink>
								</li>
								<li className='nav-item'>
									<NavLink
										className={
											'nav-link'
										}
										title={'Pricing'}
										to={'/pricing'}>
										Pricing
									</NavLink>
								</li>
								<Nav.Link
									className='nav-link'
									title={'Cart'}>
									<HiOutlineShoppingCart
										size={20}
									/>{' '}
									<Badge
										bg='primary'
										className='rounded-circle'>
										0
									</Badge>
								</Nav.Link>
							</Nav>
						</div>
						<UserMenu />
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
};

export default Header;
