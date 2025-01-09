import { Alert, Button, Card, Form } from 'react-bootstrap';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router';
import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';

import { SignInType } from '@/types/form.type';
import Input from '@/components/ui/Input';
import useLogIn from '@/hooks/useLogIn';
import ActivityIndicator from '@/components/ui/ActivityIndicator';
import { signInSchema } from '@/schemas/schemas';

const SignIn = () => {
	const { login, isPending, error } = useLogIn();

	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<SignInType>({
		resolver: yupResolver(signInSchema),
		mode: 'onChange',
	});
	const [validated, setValidated] = useState(false);

	const onSubmit: SubmitHandler<SignInType> = (data) => {
		console.log(data);
		login(data);
		setValidated(true);
	};

	return (
		<Card className='col-lg-5 col-sm-8 col-md-7 container rounded p-4'>
			<Card.Body>
				{error && (
					<Alert
						variant='danger'
						className='mb-3'>
						<h4 className='alert-heading'>Warning!</h4>
						<strong>{error}</strong> and try submitting again.
					</Alert>
				)}

				<Card.Title className='fs-3 text-center mb-3'>
					Sign In to eSale
				</Card.Title>

				<Form
					noValidate
					validated={validated}
					onSubmit={handleSubmit(onSubmit)}>
					<Input
						label='Email'
						register={register}
						placeholder='Enter your email'
						type='Email'
						error={errors.Email}
						required
					/>

					<Input
						label='Password'
						register={register}
						placeholder='Enter your password'
						type='password'
						error={errors.Password}
						required
					/>

					<Button
						className='mb-3 mx-auto d-block w-100'
						variant='warning'
						type='submit'
						disabled={isPending}>
						{isPending ? (
							<ActivityIndicator />
						) : (
							'Sign In with email'
						)}
					</Button>

					<p className='text-center'>
						Don't have an account yet?{' '}
						<Link
							to={'/sign-up'}
							className='fst-italic text-body-secondary'>
							Sign Up
						</Link>
					</p>
				</Form>
			</Card.Body>
		</Card>
	);
};

export default SignIn;
