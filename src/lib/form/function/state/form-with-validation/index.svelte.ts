import type { SlotFormWithValidation as FormWithValidationProps } from '$stylist/form/interface/slot/form-with-validation';
import { InteractionFormsStyleManager } from '$stylist/form/class/style-manager/interaction-forms';
import type { SlotFormWithValidationState } from '$stylist/form/interface/slot/form-with-validation-state';

export function createFormWithValidationState(props: FormWithValidationProps): SlotFormWithValidationState {
	const emailValid = $derived(props.email?.includes('@') ?? false);
	const passwordValid = $derived((props.password?.length ?? 0) >= 8);

	const rootClass = $derived(InteractionFormsStyleManager.root('c-form-with-validation border rounded-lg p-4 space-y-2', props.class ?? ''));
	const inputClass = $derived('w-full border rounded px-2 py-1');
	const emailValidText = $derived(emailValid ? 'Valid email' : 'Enter valid email');
	const emailValidClass = $derived(`text-xs ${emailValid ? 'text-[var(--color-success-600)]' : 'text-[var(--color-danger-600)]'}`);
	const passwordValidText = $derived(passwordValid ? 'Strong enough' : 'Min 8 chars');
	const passwordValidClass = $derived(`text-xs ${passwordValid ? 'text-[var(--color-success-600)]' : 'text-[var(--color-danger-600)]'}`);

	return {
		get rootClass() { return rootClass; },
		get inputClass() { return inputClass; },
		get emailValidText() { return emailValidText; },
		get emailValidClass() { return emailValidClass; },
		get passwordValidText() { return passwordValidText; },
		get passwordValidClass() { return passwordValidClass; }
	};
}

export default createFormWithValidationState;
