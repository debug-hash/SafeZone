import { QUERY_KEY } from '@/services/queryKey';
import { fetchProduct } from '@/services/fetchers';
import { ProductDetailProps } from '@/types/product.type';

import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';

const useProduct = () => {
	const { id } = useParams();

	return useQuery<ProductDetailProps>({
		queryKey: [QUERY_KEY.details, id],
		queryFn: () => fetchProduct(id),
	});
};

export default useProduct;
