import { useState } from 'react';
import { Searchbar } from 'react-native-paper';

const Search = () => {
	const [searchQuery, setSearchQuery] = useState<string>('');

	return (
		<Searchbar
			placeholder='What are you looking for...'
			onChangeText={setSearchQuery}
			value={searchQuery}
		/>
	);
};

export default Search;
