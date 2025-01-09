import { RoutesTypes } from '@/types/routes.type';
import Details from '@/pages/Details';
import Home from '@/pages/Home';
import Pricing from '@/pages/Pricing';
import Collections from '@/pages/Collections';
import SignIn from '@/pages/SignIn';
import Cart from '@/pages/Cart';
import Profile from '@/pages/Profile';
import Payment from '@/pages/Payment';

const publicRoutes: RoutesTypes[] = [
	{
		path: '/',
		component: Home,
	},
	{
		path: '/collections',
		component: Collections,
	},
	{
		path: '/collections/:id',
		component: Details,
	},
	{
		path: '/pricing',
		component: Pricing,
	},
	{
		path: '/cart',
		component: Cart,
	},
	{
		path: '/checkout',
		component: Payment,
	},
	// {
	// 	path: '/*',
	// 	component: NotFound,
	// },
];

const authRoutes: RoutesTypes[] = [
	{
		path: '/sign-in',
		component: SignIn,
	},
];

const privateRoutes: RoutesTypes[] = [
	{
		path: '/profile',
		component: Profile,
	},
];

export { publicRoutes, authRoutes, privateRoutes };
