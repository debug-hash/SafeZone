import { CategoryProps } from '@/types/category.type';
import { _get } from './axios';
import { ENDPOINTS } from './endpoints';
import { ProductListProps } from '@/types/product.type';

export const fetchCategories = async (): Promise<CategoryProps[]> => {
	const response = await _get(ENDPOINTS.categories);
	return response.data;
};

export const fetchProducts = async (
	keyword: string,
	category: string,
): Promise<ProductListProps> => {
	const response = await _get(ENDPOINTS.products(keyword, category));
	return response.data;
};
