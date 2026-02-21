import { mergeClasses } from '$stylist/utils/classes';
﻿import type { RadioProps } from '$stylist/design-system/props';
import { STATE_CLASSES } from '$stylist/design-system/classes/information/classes';

export const createRadioState = (props: RadioProps) => {
	const id = props.id;
	const name = props.name;
	const value = props.value;
	const checked = props.checked ?? false;
	const label = props.label;
	const disabled = props.disabled ?? false;
	const required = props.required ?? false;
	const className = props.class ?? '';

	const containerClasses = mergeClasses('flex items-center space-x-2', className);
	const radioClasses = mergeClasses(
		'h-4 w-4 text-[--color-primary-500] focus:ring-[--color-primary-500]',
		'border-[--color-border-primary] focus:ring-offset-0',
		disabled ? STATE_CLASSES.disabled : ''
	);
	const labelClasses = mergeClasses(
		'block text-sm font-medium leading-5',
		disabled ? 'opacity-50 cursor-not-allowed' : ''
	);

	return {
		id,
		name,
		value,
		checked,
		label,
		disabled,
		required,
		containerClasses,
		radioClasses,
		labelClasses
	};
};



export default createRadioState;



