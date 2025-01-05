import { QUERY_KEY } from '@/services/queryKey';
import { fetchProducts } from '@/services/fetchers';
import { ProductListProps } from '@/types/product.type';

import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router';

const useProducts = () => {
	const [searchParams] = useSearchParams();

	const keyword = searchParams.get('keyword') || '';
	const category = searchParams.get('category') || '';
	const minPrice = searchParams.has('min_price')
		? Number(searchParams.get('min_price'))
		: undefined;
	const maxPrice = searchParams.has('max_price')
		? Number(searchParams.get('max_price'))
		: undefined;

	return useQuery<ProductListProps>({
		queryKey: [QUERY_KEY.products, keyword, category, minPrice, maxPrice],
		queryFn: () => fetchProducts(keyword, category, minPrice, maxPrice),
	});
};

export default useProducts;
