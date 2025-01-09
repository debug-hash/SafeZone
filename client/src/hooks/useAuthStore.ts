import { create } from 'zustand';

import { getToken, removeToken } from '@/services/auth';
import { User } from '@/types/user.type';

interface AuthState {
	user: User | null;
	isAuthenticated: boolean;
	setUser: (user: User) => void;
	logout: () => void;
}

export const useAuthStore = create<AuthState>()((set) => {
	const { token, currentUser } = getToken();

	if (token && currentUser) {
		return {
			user: currentUser,
			isAuthenticated: true,
			setUser: (user) => set({ user, isAuthenticated: true }),
			logout: () => {
				removeToken();
				set({ user: null, isAuthenticated: false });
			},
		};
	}

	return {
		user: null,
		isAuthenticated: false,
		setUser: (user) => set({ user, isAuthenticated: true }),
		logout: () => {
			removeToken();
			set({ user: null, isAuthenticated: false });
		},
	};
});
