export const ENDPOINTS = {
	categories: import.meta.env.VITE_API_CATEGORIES_URL,
	products: (keyword: string, category: string) => {
		let url = `${import.meta.env.VITE_API_PRODUCTS_URL}?`;
		if (keyword) url += `keyword=${keyword}&`;
		if (category) url += `category=${category}`;
		return url.endsWith('&') ? url.slice(0, -1) : url;
	},
};
