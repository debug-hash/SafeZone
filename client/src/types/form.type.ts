type Password = {
	Password: string;
};

export type SignUpFormValues = SignInFormValues & {
	'First Name': string;
	'Last Name': string;
	Phone: number;
	'Confirm Password': string;
	Avatar: string;
	Username: string;
};

export type SignInFormValues = Password & {
	Email: string;
};
