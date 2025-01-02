import { Badge } from 'react-bootstrap';

const Tag = ({ title }: { title: string }) => {
	return (
		<Badge
			title={`#${title}`}
			className='me-2'
			pill
			bg='primary'>
			#{title}
		</Badge>
	);
};

export default Tag;
