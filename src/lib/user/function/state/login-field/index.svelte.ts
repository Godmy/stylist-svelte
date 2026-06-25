import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import type { RecipeLoginField } from '$stylist/user/interface/recipe/login-field';

export const createLoginFieldState = (props: RecipeLoginField) => {
	const hasError = $derived(!!props.fieldError);

	const wrapperClass = $derived(mergeClassNames('c-login-field', props.class ?? ''));
	const labelClass = $derived('c-login-field__label');
	const inputClass = $derived(
		mergeClassNames('c-login-field__input', hasError && 'c-login-field__input--error')
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
