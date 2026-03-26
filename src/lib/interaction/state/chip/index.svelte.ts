import { mergeClasses } from '$stylist/information/function/classes';
import { cn } from '$stylist/information/function/classes';
import type { ChipProps } from '$stylist/information/interface/badge';

// Определение состояния для Chip
export function createChipState(props: ChipProps) {
	const classes = mergeClasses(
		'chip',
		`variant-${props.variant ?? 'default'}`,
		`size-${props.size ?? 'md'}`,
		props.disabled ? 'disabled' : '',
		props.closable ? 'closable' : '',
		props.class
	);

	const closeButtonClasses = mergeClasses(
		'chip-close-button',
		`size-${props.size ?? 'md'}`,
		props.disabled ? 'disabled' : ''
	);

	const closeButtonIconClasses = mergeClasses(
		'chip-close-icon',
		`size-${props.size ?? 'sm'}`
	);

	return {
		classes,
		variant: props.variant ?? 'default',
		size: props.size ?? 'md',
		closable: props.closable ?? false,
		disabled: props.disabled ?? false,
		label: props.label,
		text: props.text,
		icon: props.icon,
		content: props.content,
		closeButtonClasses,
		closeButtonIconClasses
	};
}

export default createChipState;





