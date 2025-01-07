import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';

const TabBarIcon = (props: {
	name: React.ComponentProps<typeof Ionicons>['name'];
	color: string;
}) => {
	return (
		<Ionicons
			size={28}
			{...props}
			style={{ color: '#1A1A1A' }}
		/>
	);
};

export default TabBarIcon;
