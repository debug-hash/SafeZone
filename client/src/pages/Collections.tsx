import { Row, Container } from 'react-bootstrap';

import ProductList from '@/components/ui/ProductList';
import useProducts from '@/hooks/useProducts';
import PriceFilter from '@/components/ui/PriceFilter';

const Collections = () => {
	const { data } = useProducts();

	return (
		<Row className='py-5'>
			<Container>
				<h1 className='text-center mb-4'>Our Collections</h1>

				<PriceFilter />

				<ProductList results={data?.results || []} />
			</Container>
		</Row>
	);
};

export default Collections;
