import { Row, Container, Col } from 'react-bootstrap';

import ProductList from '@/components/ui/ProductList';
import useProducts from '@/hooks/useProducts';
import PriceFilter from '@/components/ui/PriceFilter';

const Collections = () => {
	const { data } = useProducts();

	return (
		<Row className='py-5'>
			<Container>
				<Row>
					<Col lg={3}>
						<h3 className='mb-2'>Filters</h3>
						<PriceFilter />
					</Col>

					<Col lg={9}>
						<h1 className='mb-4'>Our Collections</h1>
						<ProductList results={data?.results || []} />
					</Col>
				</Row>
			</Container>
		</Row>
	);
};

export default Collections;
