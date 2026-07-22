import type { SlotLoginForm as LoginFormProps } from '$stylist/form/interface/slot/login-form';
import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import type { SlotLoginFormState } from '$stylist/form/interface/slot/login-form-state';

export function createLoginFormState(props: LoginFormProps): SlotLoginFormState {
	const rootClass = $derived(mergeClassNames('c-login-form', props.class ?? ''));
	const inputClass = $derived('c-login-form__input');
	const checkboxLabelClass = $derived('c-login-form__checkbox-label');
	const submitButtonClass = $derived('c-login-form__submit');

	return {
		get rootClass() {
			return rootClass;
		},
		get inputClass() {
			return inputClass;
		},
		get checkboxLabelClass() {
			return checkboxLabelClass;
		},
		get submitButtonClass() {
			return submitButtonClass;
		}
	};
}

export default createLoginFormState;
