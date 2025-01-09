import { QUERY_KEY } from '@/services/queryKey';
import { fetchCategories } from '@/services/fetchers';
import { CategoryProps } from '@/types/category.type';

import { useQuery } from '@tanstack/react-query';

const useCategories = () => {
	return useQuery<CategoryProps[]>({
		queryKey: [QUERY_KEY.categories],
		queryFn: fetchCategories,
	});
};

export default useCategories;
