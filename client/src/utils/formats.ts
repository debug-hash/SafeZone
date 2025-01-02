export const formatPrice = (price: number) => {
	const roundedPrice = parseFloat(price.toFixed(2));
	return new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
	}).format(roundedPrice);
};
