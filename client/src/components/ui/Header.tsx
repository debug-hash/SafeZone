import { Badge, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router';
import { HiOutlineShoppingCart } from 'react-icons/hi2';

import useCategories from '@/hooks/useCategories';
import Search from './Search';

const Header = () => {
	const { data } = useCategories();

	return (
		<header className='sticky-top'>
			<Navbar
				collapseOnSelect
				expand='lg'
				className='bg-light'>
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
										<NavLink
											className='dropdown-item'
											key={
												item.id
											}
											title={
												item.title
											}
											to={`/collections/?category=${item.id}`}>
											{item.title}
										</NavLink>
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
						<Nav>
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
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
};

export default Header;
