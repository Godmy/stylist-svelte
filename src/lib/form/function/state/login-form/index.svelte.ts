import type { LoginFormProps } from '$stylist/form/interface/component/interaction-forms/other';
import { InteractionFormsStyleManager } from '$stylist/form/class/style-manager/interaction-forms';

export interface LoginFormState {
	rootClass: string;
	inputClass: string;
	checkboxLabelClass: string;
	submitButtonClass: string;
}

export function createLoginFormState(props: LoginFormProps): LoginFormState {
	const rootClass = $derived(InteractionFormsStyleManager.root('c-login-form border rounded-lg p-4 space-y-3', props.class ?? ''));
	const inputClass = $derived('w-full border rounded px-2 py-1');
	const checkboxLabelClass = $derived('text-sm flex items-center gap-2');
	const submitButtonClass = $derived('px-3 py-1 bg-[var(--color-primary-600)] text-[var(--color-text-inverse)] rounded');

	return {
		get rootClass() { return rootClass; },
		get inputClass() { return inputClass; },
		get checkboxLabelClass() { return checkboxLabelClass; },
		get submitButtonClass() { return submitButtonClass; }
	};
}

export default createLoginFormState;
