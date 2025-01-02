import { QUERY_KEY } from '@/services/queryKey';
import { fetchProducts } from '@/services/fetchers';
import { ProductListProps } from '@/types/product.type';

import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router';

const useProducts = () => {
	const [searchParams] = useSearchParams();
	const keyword = searchParams.get('keyword');
	const category = searchParams.get('category');

	return useQuery<ProductListProps>({
		queryKey: [QUERY_KEY.products, keyword, category],
		queryFn: () => fetchProducts(keyword, category),
	});
};

export default useProducts;
