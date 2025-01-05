import { Nav } from 'react-bootstrap';
import { CiDark, CiSun } from 'react-icons/ci';

import { useThemeStore } from '@/hooks/useThemeStore';

const ThemeToggle = () => {
	const { isDarkMode, toggleTheme } = useThemeStore();

	return (
		<Nav.Link
			href={'#'}
			className={'nav-link'}
			onClick={toggleTheme}>
			{isDarkMode ? <CiSun size={24} /> : <CiDark size={24} />}
		</Nav.Link>
	);
};

export default ThemeToggle;
