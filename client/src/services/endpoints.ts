export const ENDPOINTS = {
	categories: import.meta.env.VITE_API_CATEGORIES_URL,
	products: (keyword: string, category: string, minPrice?: number, maxPrice?: number) => {
		let url = `${import.meta.env.VITE_API_PRODUCTS_URL}?`;
		if (keyword) url += `keyword=${keyword}&`;
		if (category) url += `category=${category}`;
		if (minPrice) url += `min_price=${minPrice}&`;
		if (maxPrice) url += `max_price=${maxPrice}&`;

		return url.endsWith('&') ? url.slice(0, -1) : url;
	},
	details: (id: string | undefined) => `${import.meta.env.VITE_API_PRODUCTS_URL}${id}/`,
	token: import.meta.env.VITE_API_TOKEN_URL,
	current_user: import.meta.env.VITE_API_CURRENT_USER_URL,
};
