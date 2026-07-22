import type { SlotFormWithValidation as FormWithValidationProps } from '$stylist/form/interface/slot/form-with-validation';
import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import type { SlotFormWithValidationState } from '$stylist/form/interface/slot/form-with-validation-state';

export function createFormWithValidationState(
	props: FormWithValidationProps
): SlotFormWithValidationState {
	const emailValid = $derived(props.email?.includes('@') ?? false);
	const passwordValid = $derived((props.password?.length ?? 0) >= 8);

	const rootClass = $derived(
		mergeClassNames('c-form-with-validation', props.class ?? '')
	);
	const inputClass = $derived('c-form-with-validation__input');
	const emailValidText = $derived(emailValid ? 'Valid email' : 'Enter valid email');
	const emailValidClass = $derived(
		`c-form-with-validation__hint ${emailValid ? 'c-form-with-validation__hint--valid' : 'c-form-with-validation__hint--invalid'}`
	);
	const passwordValidText = $derived(passwordValid ? 'Strong enough' : 'Min 8 chars');
	const passwordValidClass = $derived(
		`c-form-with-validation__hint ${passwordValid ? 'c-form-with-validation__hint--valid' : 'c-form-with-validation__hint--invalid'}`
	);

	return {
		get rootClass() {
			return rootClass;
		},
		get inputClass() {
			return inputClass;
		},
		get emailValidText() {
			return emailValidText;
		},
		get emailValidClass() {
			return emailValidClass;
		},
		get passwordValidText() {
			return passwordValidText;
		},
		get passwordValidClass() {
			return passwordValidClass;
		}
	};
}

export default createFormWithValidationState;
