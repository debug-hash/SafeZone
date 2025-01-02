import { Col, Container } from 'react-bootstrap';
import { Link } from 'react-router';
import { FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';

const Footer = () => {
	const socialLinks = [
		{ to: 'https://www.instagram.com/zin.0.1.0.4/', icon: <FaInstagram size={20} /> },
		{ to: 'https://www.facebook.com/zin.it.dev', icon: <FaFacebook size={20} /> },
		{ to: 'https://www.github.com/debug-hash/', icon: <FaGithub size={20} /> },
	];

	return (
		<footer className='py-3 border-top'>
			<Container className='d-flex flex-wrap justify-content-between align-items-center my-2'>
				<Col
					md={4}
					className='d-flex align-items-center'>
					<Link
						to='/'
						className='font-monospace mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1'>
						eSale 🛒
					</Link>
					<span className='mb-3 mb-md-0 text-body-secondary'>
						&copy; {new Date().getFullYear()} Inc
					</span>
				</Col>
				<ul className='nav col-md-4 justify-content-end list-unstyled d-flex'>
					{socialLinks.map((link, index) => (
						<li
							key={index}
							className='ms-3'>
							<Link to={link.to}>{link.icon}</Link>
						</li>
					))}
				</ul>
			</Container>
		</footer>
	);
};

export default Footer;
