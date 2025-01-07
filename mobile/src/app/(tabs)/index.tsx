import { FlatList, Text, View } from 'react-native';
import { type ErrorBoundaryProps } from 'expo-router';

import Categories from '@/components/ui/Categories';
import Search from '@/components/ui/Search';
import Item from '@/components/ui/Item';

export function ErrorBoundary({ error, retry }: ErrorBoundaryProps) {
	return (
		<View style={{ flex: 1, backgroundColor: 'red' }}>
			<Text>{error.message}</Text>
			<Text onPress={retry}>Try Again?</Text>
		</View>
	);
}

const Home = () => {
	const products = [
		{
			id: 1,
			name: 'Product 1',
			price: 29.99,
			imageUrl: 'https://via.placeholder.com/150',
		},
		{
			id: 2,
			name: 'Product 2',
			price: 49.99,
			imageUrl: 'https://via.placeholder.com/150',
		},
		{
			id: 3,
			name: 'Product 3',
			price: 19.99,
			imageUrl: 'https://via.placeholder.com/150',
		},
		{
			id: 4,
			name: 'Product 4',
			price: 99.99,
			imageUrl: 'https://via.placeholder.com/150',
		},
		{
			id: 5,
			name: 'Product 2',
			price: 49.99,
			imageUrl: 'https://via.placeholder.com/150',
		},
		{
			id: 6,
			name: 'Product 3',
			price: 19.99,
			imageUrl: 'https://via.placeholder.com/150',
		},
		{
			id: 7,
			name: 'Product 4',
			price: 99.99,
			imageUrl: 'https://via.placeholder.com/150',
		},
	];

	return (
		<View style={{ paddingVertical: 10, paddingHorizontal: 8 }}>
			<View style={{ paddingVertical: 3 }}>
				<Search />
			</View>
			<View style={{ paddingVertical: 3 }}>
				<Categories />
			</View>

			<FlatList
				style={{paddingLeft: 6 }}
				data={products}
				numColumns={2}
				keyExtractor={(item) => item.id.toString()}
				renderItem={({ item }) => <Item {...item} />}
			/>
		</View>
	);
};

export default Home;
