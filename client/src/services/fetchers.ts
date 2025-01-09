import { CategoryProps } from '@/types/category.type';
import { _get } from './axios';
import { ENDPOINTS } from './endpoints';
import { ProductDetailProps, ProductListProps } from '@/types/product.type';

export const fetchCategories = async (): Promise<CategoryProps[]> => {
	const response = await _get(ENDPOINTS.categories);
	return response.data;
};

export const fetchProducts = async (
	keyword: string,
	category: string,
	minPrice?: number,
	maxPrice?: number,
): Promise<ProductListProps> => {
	const response = await _get(ENDPOINTS.products(keyword, category, minPrice, maxPrice));
	return response.data;
};

export const fetchProduct = async (id: string | undefined): Promise<ProductDetailProps> => {
	const response = await _get(ENDPOINTS.details(id));
	return response.data;
};
