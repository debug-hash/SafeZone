import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router';

import Hero from '@/components/ui/Hero';
import useProducts from '@/hooks/useProducts';
import ProductList from '@/components/ui/ProductList';

const Home = () => {
	const { data } = useProducts();

	return (
		<>
			<Hero />
			<Row className='align-items-md-stretch'>
				<Col md={6}>
					<div className='h-100 p-5 bg-light rounded-3'>
						<h2>Smartphone X Pro</h2>
						<p className='text-uppercase'>
							0% interest, installment payment available
						</p>
						<Link
							className='btn btn-outline-primary'
							to={'/'}>
							Buy Now
						</Link>
					</div>
				</Col>
				<Col md={6}>
					<div className='h-100 p-5 bg-body-tertiary border rounded-3'>
						<h2>Smartwatch 5</h2>
						<p>
							Featuring advanced smart features to track
							your health and sync with other devices in
							your tech ecosystem. Discover how this
							device can enhance your life.
						</p>
						<Link
							className='btn btn-outline-primary'
							to={'/'}>
							Explore Now
						</Link>
					</div>
				</Col>
			</Row>

			<Row className='py-5'>
				<Container>
					<h3 className='h3 mb-3 fw-bold'>All Collections</h3>
					<ProductList results={data?.results || []} />
				</Container>
			</Row>
		</>
	);
};

export default Home;
