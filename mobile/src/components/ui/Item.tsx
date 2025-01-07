import { Button, Card, Text } from 'react-native-paper';

const Item = (props: { id: number; name: string; price: number }) => {
	return (
		<Card style={{ width: 170, margin: 6 }}>
			<Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
			<Card.Content style={{ marginTop: 6 }}>
				<Text
					variant='titleLarge'
					style={{
						fontWeight: 'bold',
						color: '#1A1A1A',
					}}>
					{props.name}
				</Text>
				<Text
					variant='bodyMedium'
					style={{ color: '#808080' }}>
					${props.price}
				</Text>
			</Card.Content>
			<Card.Actions style={{ alignSelf: 'center' }}>
				<Button>Add to Cart</Button>
			</Card.Actions>
		</Card>
	);
};

export default Item;
