import { Button, Form } from 'react-bootstrap';

const NewsBox = () => {
	const handelSubmitForm = () => {};

	return (
		<div className='text-center'>
			<p className='fs-2 fw-bold'>Subscribe now & get 20% off</p>
			<p className='text-body my-3'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
			</p>
			<Form
				className='d-flex align-items-center gap-3 my-3 ps-3'
				onSubmit={handelSubmitForm}>
				<Form.Control
					type='email'
					className='w-100 outline-none'
					placeholder='Enter your email'
					required
				/>
				<Button type='submit'>Subscribe</Button>
			</Form>
		</div>
	);
};

export default NewsBox;
