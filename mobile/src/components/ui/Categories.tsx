import { Category } from '@/types/category.type';

import { useState } from 'react';
import { List } from 'react-native-paper';

const Categories = () => {
	const categories: Category[] = [
		{ id: 1, title: 'Technology' },
		{ id: 2, title: 'Health' },
		{ id: 3, title: 'Education' },
		{ id: 3, title: 'Sports' },
		{ id: 3, title: 'Entertainment' },
	];

	const [expanded, setExpanded] = useState<boolean>(false);

	const handlePress = () => setExpanded(!expanded);

	return (
		<List.Section>
			<List.Accordion
				title='Categories'
				left={(props) => (
					<List.Icon
						{...props}
						icon='menu'
					/>
				)}
				expanded={expanded}
				onPress={handlePress}>
				{categories.map((item, idx) => (
					<List.Item
						title={item.title}
						key={idx}
						left={(props) => (
							<List.Icon
								{...props}
								icon='star'
							/>
						)}
					/>
				))}
			</List.Accordion>
		</List.Section>
	);
};

export default Categories;
