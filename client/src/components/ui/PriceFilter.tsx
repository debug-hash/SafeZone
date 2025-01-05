import { useNavigate } from 'react-router';
import { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { CiFilter } from 'react-icons/ci';

const PriceFilter = () => {
	const navigate = useNavigate();

	const [minPrice, setMinPrice] = useState<number | string>('0');
	const [maxPrice, setMaxPrice] = useState<number | string>('100000');

	const handleMinPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setMinPrice(event.target.value);
	};

	const handleMaxPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setMaxPrice(event.target.value);
	};

	const handleFilter = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const queryParams = new URLSearchParams();
		if (minPrice) queryParams.append('min_price', minPrice.toString());
		if (maxPrice) queryParams.append('max_price', maxPrice.toString());

		navigate(`/collections?${queryParams.toString()}`);
	};

	return (
		<Form
			className='mb-5 mt-3'
			onSubmit={handleFilter}
			method='GET'>
			<Row className='align-items-center'>
				<Col md={3}>
					<Form.Group
						controlId='minPrice'
						className='d-flex'>
						<Form.Label className='fw-bold'>
							Min Price
						</Form.Label>
						<Form.Control
							type='number'
							name='min_price'
							value={minPrice}
							onChange={handleMinPriceChange}
							placeholder='Min Price'
						/>
					</Form.Group>
				</Col>

				<Col md={3}>
					<Form.Group
						controlId='maxPrice'
						className='d-flex'>
						<Form.Label className='fw-bold'>
							Max Price
						</Form.Label>
						<Form.Control
							type='number'
							name='max_price'
							value={maxPrice}
							onChange={handleMaxPriceChange}
							placeholder='Max Price'
						/>
					</Form.Group>
				</Col>

				<Col md={2}>
					<Button
						variant='primary'
						type='submit'>
						<CiFilter size={20} />
					</Button>
				</Col>
			</Row>
		</Form>
	);
};

export default PriceFilter;
