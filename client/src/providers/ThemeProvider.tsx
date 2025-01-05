import { useEffect } from 'react';

import { useThemeStore } from '@/hooks/useThemeStore';

interface ThemeProviderProps {
	children: React.ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
	const { isDarkMode } = useThemeStore();

	useEffect(() => {
		document.documentElement.setAttribute(
			'data-bs-theme',
			isDarkMode ? 'dark' : 'light',
		);
	}, [isDarkMode]);

	return <>{children}</>;
};

export default ThemeProvider;
