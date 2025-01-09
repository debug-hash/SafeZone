import * as yup from 'yup';

export const signInSchema = yup
	.object()
	.shape({
		Email: yup
			.string()
			.email('Please enter a valid email address')
			.required('Email is required'),
		Password: yup
			.string()
			.required('Password is required')
			.min(4, 'Password must be at least 8 characters'),
	})
	.required();

export const signUpSchema = yup
	.object()
	.shape({
		Email: yup
			.string()
			.email('Please enter a valid email address')
			.required('Email is required'),
		Username: yup.string().required('Username is required'),
		Confirm_Password: yup
			.string()
			.required('Confirm Password is required')
			.min(4, 'Confirm Password must be at least 8 characters'),
		Password: yup
			.string()
			.required('Password is required')
			.min(4, 'Password must be at least 8 characters'),
	})
	.required();
