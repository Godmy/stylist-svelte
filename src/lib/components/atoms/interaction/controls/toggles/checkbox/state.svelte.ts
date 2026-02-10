import type { CheckboxProps } from '$stylist/design-system/attributes';
import { STATE_CLASSES } from '$stylist/design-system/classes/classes';
import { mergeClasses } from '$stylist/utils/classes';

export function createCheckboxState(props: CheckboxProps) {
	const id = $derived(props.id);
	const label = $derived(props.label);
	const description = $derived(props.description ?? '');
	const checked = $derived(props.checked ?? false);
	const errors = $derived(props.errors ?? []);
	const required = $derived(props.required ?? false);
	const disabled = $derived(props.disabled ?? false);
	const className = $derived(props.class ?? '');

	const hasError = $derived(errors.length > 0);
	const errorId = $derived(`${id}-error`);

	const containerClasses = $derived(mergeClasses('flex items-start space-x-2', className));
	const wrapperClasses = $derived('flex items-center h-5');
	const checkboxWrapperClasses = $derived('');
	const checkboxClasses = $derived(
		mergeClasses(
			'h-4 w-4 rounded border text-[--color-primary-500] focus:ring-[--color-primary-500]',
			hasError
				? 'border-[--color-danger-500] focus:ring-[--color-danger-500]'
				: 'border-[--color-border-primary]',
			disabled ? STATE_CLASSES.disabled : ''
		)
	);
	const labelWrapperClasses = $derived('ml-2');
	const labelClasses = $derived(
		mergeClasses(
			'block leading-5',
			'text-sm font-medium',
			disabled ? 'opacity-50 cursor-not-allowed' : ''
		)
	);
	const descriptionClasses = $derived('block text-sm text-[--color-text-secondary]');
	const errorClasses = $derived('mt-1 text-sm text-[--color-danger-500]');

	return {
		get id() {
			return id;
		},
		get label() {
			return label;
		},
		get description() {
			return description;
		},
		get checked() {
			return checked;
		},
		get errors() {
			return errors;
		},
		get required() {
			return required;
		},
		get disabled() {
			return disabled;
		},
		get hasError() {
			return hasError;
		},
		get errorId() {
			return errorId;
		},
		get containerClasses() {
			return containerClasses;
		},
		get wrapperClasses() {
			return wrapperClasses;
		},
		get checkboxWrapperClasses() {
			return checkboxWrapperClasses;
		},
		get checkboxClasses() {
			return checkboxClasses;
		},
		get labelWrapperClasses() {
			return labelWrapperClasses;
		},
		get labelClasses() {
			return labelClasses;
		},
		get descriptionClasses() {
			return descriptionClasses;
		},
		get errorClasses() {
			return errorClasses;
		}
	};
}
