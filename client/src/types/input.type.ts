import { FieldError, Path, UseFormRegister } from 'react-hook-form';

import { SignInFormValues } from './form.type';

export type InputProps = {
	label: Path<SignInFormValues>;
	register: UseFormRegister<SignInFormValues>;
	required: boolean;
	placeholder: string;
	type: string;
	error?: FieldError;
};
