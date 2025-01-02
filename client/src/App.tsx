import { Route, Routes } from 'react-router';

import RootLayout from '@/components/layouts/RootLayout';
import { publicRoutes } from '@/routes/routes';

const App = () => {
	return (
		<Routes>
			<Route element={<RootLayout />}>
				{publicRoutes.map((route, idx) => (
					<Route
						key={idx}
						path={route.path}
						element={<route.component />}
					/>
				))}
			</Route>
		</Routes>
	);
};

export default App;
