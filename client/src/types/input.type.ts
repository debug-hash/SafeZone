import { FieldError, Path, UseFormRegister } from 'react-hook-form';

export type InputProps = {
	label: Path<any>;
	register: UseFormRegister<any>;
	required: boolean;
	placeholder: string;
	type: string;
	error?: FieldError;
};
