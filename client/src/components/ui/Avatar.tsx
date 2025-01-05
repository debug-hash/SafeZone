import { Image } from 'react-bootstrap';

import { User } from '@/types/user.type';

type AvatarProps = {
	user: User;
	size: number;
};

const Avatar = (props: AvatarProps) => {
	return (
		<Image
			src={props.user.avatar}
			roundedCircle
			width={props.size}
			height={props.size}
			alt={`${props.user.last_name} ${props.user.first_name}`}
			title={`${props.user.last_name} ${props.user.first_name}`}
		/>
	);
};

export default Avatar;
