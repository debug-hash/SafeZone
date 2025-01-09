import { createContext, ReactNode } from 'react';

import useProducts from '@/hooks/useProducts';
import { ProductProps } from '@/types/product.type';

interface ShopContextType {
	products: ProductProps[] | undefined;
}

export const ShopContext = createContext<ShopContextType | undefined>(undefined);

const ShopContextProvider = ({ children }: { children: ReactNode }) => {
	const { data } = useProducts();
	const products = data?.results;

	const value: ShopContextType = { products };

	return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
