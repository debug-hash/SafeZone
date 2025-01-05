import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import 'bootswatch/dist/lux/bootstrap.min.css';

import App from '@/App';
import { queryClient } from '@/services/queryClient';
import ThemeProvider from '@/providers/ThemeProvider';

const root = document.getElementById('root');

createRoot(root!).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<ReactQueryDevtools initialIsOpen={false} />
			<BrowserRouter>
				<ThemeProvider>
					<App />
				</ThemeProvider>
			</BrowserRouter>
		</QueryClientProvider>
	</StrictMode>,
);
