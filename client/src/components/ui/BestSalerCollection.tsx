import { useContext, useEffect, useState } from 'react';

import { ShopContext } from '@/contexts/ShopContext';
import { ProductProps } from '@/types/product.type';
import Title from './Title';
import { Col, Container, Row } from 'react-bootstrap';
import Product from './Product';

const BestSalerCollection = () => {
	const context = useContext(ShopContext);
	const [bestSalerProducts, setBestSalerProducts] = useState<ProductProps[]>([]);

	useEffect(() => {
		if (context && context.products) {
			const products = context.products.filter((item) => item.id);
			setBestSalerProducts(products.slice(0, 4));
		}
	}, [context]);

	return (
		<div className='my-5'>
			<section className='text-center py-3 fs-3'>
				<Title
					start={'flash'}
					end={'sale'}
				/>
				<p className='w-75 m-auto text-body fs-5 mb-2'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
				</p>
			</section>

			<Container fluid>
				<Row
					xs={1}
					sm={2}
					lg={4}
					className='g-4'>
					{bestSalerProducts ? (
						bestSalerProducts.map((item) => (
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

export default BestSalerCollection;
