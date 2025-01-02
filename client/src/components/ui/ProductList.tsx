import { FC } from 'react';
import { Col, Row } from 'react-bootstrap';

import Product from './Product';
import { ProductListProps } from '@/types/product.type';

const ProductList: FC<ProductListProps> = ({ results }) => {
	return (
		<Row className='g-4'>
			{results.map((product, idx) => (
				<Col
					lg={3}
					md={6}
					sm={12}
					key={idx}>
					<Product
						key={product.id}
						{...product}
					/>
				</Col>
			))}
		</Row>
	);
};

export default ProductList;
