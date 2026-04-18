import type { ValidationProps } from '$stylist/form/type/struct/validation-form-field';
import type { SlotValidationState } from '$stylist/form/interface/slot/validation-state';

export function createValidationState(props: ValidationProps): SlotValidationState {
	const containerClasses = $derived(`field-group ${props.orientation === 'horizontal' ? 'flex items-start gap-3' : 'flex flex-col gap-2'} ${props.disabled ? 'opacity-[var(--opacity-70)] cursor-not-allowed' : ''} ${props.class ?? ''}`);
	const hasError = $derived(!!props.error);

	const rootClass = $derived('field-group');
	const labelClass = $derived('field-label text-sm font-medium text-[var(--color-text-primary)] flex items-center gap-1');
	const requiredMarkClass = $derived('text-[var(--color-danger-500)]');
	const contentClass = $derived('field-content flex-1');
	const descriptionClass = $derived('mt-1 text-sm text-[var(--color-text-secondary)]');
	const errorClass = $derived('mt-1 text-sm text-[var(--color-danger-600)]');
	const hintClass = $derived('mt-1 text-sm text-[var(--color-text-secondary)]');

	return {
		get containerClasses() { return containerClasses; },
		get hasError() { return hasError; },
		get rootClass() { return rootClass; },
		get labelClass() { return labelClass; },
		get requiredMarkClass() { return requiredMarkClass; },
		get contentClass() { return contentClass; },
		get descriptionClass() { return descriptionClass; },
		get errorClass() { return errorClass; },
		get hintClass() { return hintClass; }
	};
}

export default createValidationState;
