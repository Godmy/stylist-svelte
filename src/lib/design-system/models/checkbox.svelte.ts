import type { CheckboxProps } from '$stylist/design-system/props/toggles';
import { STATE_CLASSES } from '$stylist/design-system/classes/classes';
import { mergeClasses } from '$stylist/utils/classes';

export function createCheckboxState(props: CheckboxProps) {
	const id = props.id;
	const label = props.label;
	const description = props.description ?? '';
	const checked = props.checked ?? false;
	const errors = props.errors ?? [];
	const required = props.required ?? false;
	const disabled = props.disabled ?? false;
	const className = props.class ?? '';

	const hasError = errors.length > 0;
	const errorId = `${id}-error`;

	const containerClasses = mergeClasses('flex items-start space-x-2', className);
	const wrapperClasses = 'flex items-center h-5';
	const checkboxWrapperClasses = '';
	const checkboxClasses = mergeClasses(
		'h-4 w-4 rounded border text-[--color-primary-500] focus:ring-[--color-primary-500]',
		hasError
			? 'border-[--color-danger-500] focus:ring-[--color-danger-500]'
			: 'border-[--color-border-primary]',
		disabled ? STATE_CLASSES.disabled : ''
	);
	const labelWrapperClasses = 'ml-2';
	const labelClasses = mergeClasses(
		'block leading-5',
		'text-sm font-medium',
		disabled ? 'opacity-50 cursor-not-allowed' : ''
	);
	const descriptionClasses = 'block text-sm text-[--color-text-secondary]';
	const errorClasses = 'mt-1 text-sm text-[--color-danger-500]';

	return {
		id,
		label,
		description,
		checked,
		errors,
		required,
		disabled,
		hasError,
		errorId,
		containerClasses,
		wrapperClasses,
		checkboxWrapperClasses,
		checkboxClasses,
		labelWrapperClasses,
		labelClasses,
		descriptionClasses,
		errorClasses
	};
}



export default createCheckboxState;



