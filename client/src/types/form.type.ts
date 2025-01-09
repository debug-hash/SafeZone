import { User } from './user.type';

type Password = {
	Password: string;
};

export type SignInType = Password & {
	Email: string;
};

export type SignUpType = User & Password;
