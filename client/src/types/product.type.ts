import { Base, Common } from './base.type';

export type ProductProps = Common &
	Base & {
		price: number;
		image: string;
	};

export type ProductDetailProps = ProductProps & {
	description: string;
};

export type ProductListProps = {
	results: Pick<ProductProps, 'id' | 'title' | 'image' | 'price' | 'tags'>[];
};
