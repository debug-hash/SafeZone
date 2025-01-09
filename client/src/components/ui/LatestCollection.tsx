import { Col, Container, Row } from 'react-bootstrap';
import { useContext, useEffect, useState } from 'react';

import { ShopContext } from '@/contexts/ShopContext';
import Title from './Title';
import { ProductProps } from '@/types/product.type';
import Product from './Product';

const LatestCollection = () => {
	const context = useContext(ShopContext);
	const [latestProducts, setLatestProducts] = useState<ProductProps[]>([]);

	useEffect(() => {
		if (context && context.products) {
			setLatestProducts(context.products.slice(0, 10));
		}
	}, [context]);

	return (
		<div className='my-5'>
			<section className='text-center py-3 fs-3'>
				<Title
					start={'latest'}
					end={'collections'}
				/>
				<p className='w-75 m-auto text-body fs-5 mb-2'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
				</p>
			</section>

			<Container fluid>
				<Row
					xs={1}
					sm={2}
					md={4}
					lg={5}
					className='g-4'>
					{latestProducts ? (
						latestProducts.map((item) => (
							<Col key={item.id}>
								<Product {...item} />
							</Col>
						))
					) : (
						<p className='text-center'>
							No products available.
						</p>
					)}
				</Row>
			</Container>
		</div>
	);
};

export default LatestCollection;
