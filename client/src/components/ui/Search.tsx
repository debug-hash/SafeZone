import { FormEvent } from 'react';
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router';

const Search = () => {
	const navigate = useNavigate();

	const handleSearch = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);
		const keyword = formData.get('keyword') as string;

		const params = new URLSearchParams({ keyword });
		navigate(`/?${params.toString()}`);
	};

	return (
		<Form
			method='get'
			onSubmit={handleSearch}>
			<Form.Control
				type='search'
				name='keyword'
				required={true}
				placeholder='What are you looking for...'
			/>
		</Form>
	);
};

export default Search;