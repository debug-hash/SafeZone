import { Form } from 'react-bootstrap';

import { InputProps } from '@/types/input.type';

const Input = ({ label, register, required, placeholder, type, error }: InputProps) => (
	<Form.Group className='mb-3'>
		<Form.Label className='fw-bold'>{label}</Form.Label>
		<Form.Control
			{...register(label, {
				required,
			})}
			isInvalid={!!error}
			type={type}
			placeholder={placeholder}
			aria-invalid={!!error}
		/>
		{error && (
			<Form.Control.Feedback type='invalid'>
				{error.message}
			</Form.Control.Feedback>
		)}
	</Form.Group>
);

export default Input;
