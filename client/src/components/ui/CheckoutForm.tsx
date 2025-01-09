import { axiosClient } from '@/services/axios';
import { CardElement, useStripe } from '@stripe/react-stripe-js';
import React from 'react';

const CheckoutForm: React.FC = () => {
	const stripe = useStripe();

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const response = await axiosClient.post('/create-payment-intent', { amount: 100 });

		console.log(response);
	};

	return (
		<div>
			<h2>Thanh toán</h2>
			<form onSubmit={handleSubmit}>
				<CardElement />
				<button
					type='submit'
					disabled={!stripe}>
					Thanh toán
				</button>
			</form>
		</div>
	);
};

export default CheckoutForm;
