import { cn } from '$stylist/utils/classes';
import type { ChipProps } from '$stylist/design-system/props';

// Определение состояния для Chip
export function createChipState(props: ChipProps) {
	const classes = cn(
		'chip',
		`variant-${props.variant ?? 'default'}`,
		`size-${props.size ?? 'md'}`,
		props.disabled ? 'disabled' : '',
		props.closable ? 'closable' : '',
		props.class
	);

	const closeButtonClasses = cn(
		'chip-close-button',
		`size-${props.size ?? 'md'}`,
		props.disabled ? 'disabled' : ''
	);

	const closeButtonIconClasses = cn(
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