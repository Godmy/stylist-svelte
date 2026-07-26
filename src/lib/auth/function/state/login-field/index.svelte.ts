import type { RecipeLoginField } from '$stylist/auth/interface/recipe/login-field';

export const createLoginFieldState = (props: RecipeLoginField) => {
	const hasError = $derived(!!props.fieldError);

	const wrapperClass = $derived(['c-login-field', props.class ?? ''].filter(Boolean).join(' '));
	const labelClass = $derived('c-login-field__label');
	const inputClass = $derived(
		['c-login-field__input', hasError ? 'c-login-field__input--error' : '']
			.filter(Boolean)
			.join(' ')
	);
	const errorClass = $derived('c-login-field__error');

	return {
		get hasError() {
			return hasError;
		},
		get wrapperClass() {
			return wrapperClass;
		},
		get labelClass() {
			return labelClass;
		},
		get inputClass() {
			return inputClass;
		},
		get errorClass() {
			return errorClass;
		}
	};
};

export default createLoginFieldState;

