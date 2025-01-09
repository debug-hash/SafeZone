import { Cookies } from 'react-cookie';
import { axiosClient } from './axios';
import { ENDPOINTS } from './endpoints';
import { User } from '@/types/user.type';

const cookies = new Cookies();

export const login = async (email: string, password: string) => {
	const response = await axiosClient.post(
		ENDPOINTS.token,
		{
			email,
			password,
		},
		{
			withCredentials: true,
		},
	);

	console.log(response);

	const user = await axiosClient.get(ENDPOINTS.current_user, {
		headers: {
			Authorization: `Bearer ${response.data.access_token}`,
		},
	});

	saveToken(response.data.access_token, user.data);

	return {
		token: response.data.access_token,
		user: user.data,
	};
};

export const saveToken = (token: string, user: User) => {
	cookies.set('token', token, {
		path: '/',
		maxAge: 7 * 24 * 60 * 60,
		secure: true,
		sameSite: 'strict',
	});

	cookies.set('current_user', user, {
		path: '/',
		maxAge: 7 * 24 * 60 * 60,
		secure: true,
		sameSite: 'strict',
	});
};

export const removeToken = () => {
	cookies.remove('token', { path: '/', secure: true, sameSite: 'strict' });
	cookies.remove('current_user', { path: '/', secure: true, sameSite: 'strict' });
};

export const getToken = () => {
	return {
		token: cookies.get('token'),
		currentUser: cookies.get('current_user'),
	};
};
