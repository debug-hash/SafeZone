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
				<Col
					md={6}
					className='mb-3 mb-lg-0'>
					<div className='h-100 p-5 bg-warning rounded-3'>
						<h2>Year-End Mega Sale</h2>
						<p className='text-uppercase'>
							Up to <strong>50% off</strong> on all
							smartphones and accessories!
						</p>
						<Link
							className='btn btn-outline-primary'
							to='/sale'>
							Shop Now
						</Link>
					</div>
				</Col>
				<Col md={6}>
					<div className='h-100 p-5 bg-body-tertiary border rounded-3'>
						<h2>Exclusive Discounts</h2>
						<p>
							Grab the best deals on smartwatches, fitness
							trackers, and more. Limited-time offers to
							upgrade your tech at unbeatable prices.
							Don't miss out!
						</p>
						<Link
							className='btn btn-outline-primary'
							to='/sale'>
							Discover Deals
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
