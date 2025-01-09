import { Col, Container } from 'react-bootstrap';
import { Link } from 'react-router';
import { FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';

const Footer = () => {
	const socialLinks = [
		{ to: 'https://www.instagram.com/zin.0.1.0.4/', icon: <FaInstagram size={24} /> },
		{ to: 'https://www.facebook.com/zin.it.dev', icon: <FaFacebook size={24} /> },
		{ to: 'https://www.github.com/debug-hash/', icon: <FaGithub size={24} /> },
	];

	return (
		<footer className='mt-5 border-top text-primary'>
			<Container>
				<div className='d-flex flex-wrap justify-content-between align-items-center my-2'>
					<Col
						md={8}
						className='py-3'>
						<Link
							to='/'
							className='logo mb-5 text-decoration-none fs-3'>
							eSale &copy;
						</Link>
						<p className='w-75'>
							Lorem ipsum dolor sit amet consectetur
							adipisicing elit. Dolorem sunt architecto
							error laudantium iure? Delectus hic illum
							nisi iste, vero alias beatae quos maiores
							doloribus tempora, et minima, adipisci
							expedita.
						</p>
					</Col>
					<ul className='nav col-md-4 justify-content-end list-unstyled d-flex'>
						{socialLinks.map((link, index) => (
							<li
								key={index}
								className='ms-3'>
								<Link to={link.to}>
									{link.icon}
								</Link>
							</li>
						))}
					</ul>
				</div>
				<div>
					<hr />
					<p className='text-center'>
						&copy; {new Date().getFullYear()} Inc - All Right
						Reserved.
					</p>
				</div>
			</Container>
		</footer>
	);
};

export default Footer;
