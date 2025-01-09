import { Card } from 'react-bootstrap';
import { Link } from 'react-router';
import { FC, useState } from 'react';

import { ProductProps } from '@/types/product.type';
import { formatPrice } from '@/utils/formats';
import Hover from '../animations/Hover';

const Product: FC<ProductProps> = ({ id, image, title, price }) => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<Card
			className={isHovered ? 'shadow' : 'rounded'}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}>
			<Link
				to={`/collections/${id}`}
				className='text-decoration-none'>
				<Hover>
					<div className='overflow-hidden'>
						<Card.Img
							variant='top'
							src={image}
							alt={title}
							className='rounded'
							title={`${title} - ${formatPrice(price)}`}
							width={144}
						/>
					</div>
				</Hover>
				<Card.Body>
					<Card.Title title={title}>{title}</Card.Title>
					<Card.Text className='text-danger fw-bold'>
						{formatPrice(price)}
					</Card.Text>
				</Card.Body>
			</Link>
			<Card.Footer className='border-top-0'>
				<Link
					className='btn btn-primary btn-sm w-100'
					to={`/collections/${id}`}>
					Buy Now
				</Link>
			</Card.Footer>
		</Card>
	);
};

export default Product;
