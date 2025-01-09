import { Button, Col, Figure, Form, ListGroup, Row } from 'react-bootstrap';

import useProduct from '@/hooks/useProduct';
import { formatPrice } from '@/utils/formats';
import Tag from '@/components/ui/Tag';
import { Link } from 'react-router';

const Details = () => {
	const { data } = useProduct();

	const sampleComments = [
		{ username: 'Ngoc', comment: 'Sản phẩm rất tuyệt vời, tôi rất thích!' },
		{ username: 'Linh', comment: 'Chất lượng tuyệt vời, giá cả hợp lý.' },
		{ username: 'Hoa', comment: 'Thời gian giao hàng nhanh chóng, đáng mua!' },
	];

	return (
		<Row className='py-lg-5 py-3'>
			{data ? (
				<>
					<Col md={6}>
						<Figure>
							<Figure.Image
								rounded
								thumbnail
								title={`${data.title} - ${data.description}`}
								alt={`${data.title}`}
								src={`${data.image}`}
							/>
							<Figure.Caption>
								{data.title} -{' '}
								{formatPrice(data.price)} -{' '}
								{data.description}
							</Figure.Caption>
						</Figure>
					</Col>
					<Col md={6}>
						<ListGroup>
							<ListGroup.Item>
								<h1 className='mt-3 mt-lg-0 mb-lg-3 mb-2 fs-1 fw-bold font-monospace'>
									{data.title}
								</h1>

								<p className='mb-2'>
									{data.tags.map(
										(tag, idx) => (
											<Tag
												key={
													idx
												}
												title={
													tag
												}
											/>
										),
									)}
								</p>
								<p className='fs-3 text-danger fw-bold mb-2'>
									{formatPrice(data.price)}
								</p>
								<p className='text-secondary'>
									{data.description}
								</p>
							</ListGroup.Item>
							<ListGroup.Item>
								<Form>
									<Row>
										<Col
											md={5}
											className='mb-2 mb-lg-0'>
											<Form.Control
												type='number'
												min={
													1
												}
											/>
										</Col>
										<Col md={7}>
											<Link
												className='btn btn-primary w-100'
												to={
													''
												}>
												Add
												to
												Cart
											</Link>
										</Col>
									</Row>
								</Form>
							</ListGroup.Item>
						</ListGroup>
						<Col
							md={12}
							className='mt-5'>
							<h3 className='h3 mb-3 fw-bold'>
								All Reviews
							</h3>
							<ListGroup>
								{sampleComments.map(
									(comment, idx) => (
										<ListGroup.Item
											key={idx}>
											<h5>
												{
													comment.username
												}
											</h5>
											<p>
												{
													comment.comment
												}
											</p>
										</ListGroup.Item>
									),
								)}
							</ListGroup>

							<Form className='mt-4'>
								<Form.Group controlId='comment'>
									<Form.Control
										as='textarea'
										rows={3}
										placeholder='Write a public comment...'
									/>
								</Form.Group>
								<Button
									variant='primary'
									type='submit'
									className='mt-3'>
									Comment
								</Button>
							</Form>
						</Col>
					</Col>
				</>
			) : (
				<p>No item...</p>
			)}
		</Row>
	);
};

export default Details;
