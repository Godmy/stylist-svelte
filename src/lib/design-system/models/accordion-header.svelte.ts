import { cn } from '$stylist/utils/classes';
import type { AccordionHeaderProps } from '$stylist/design-system/props';

/**
 * AccordionHeader state
 */

export function createAccordionHeaderState(props: AccordionHeaderProps) {
	const classes = $derived(
		cn(
			'accordion-header',
			props.open ? 'open' : 'closed',
			props.disabled ? 'disabled' : '',
			props.class
		)
	);

	const chevronClasses = $derived(
		cn(
			'accordion-chevron',
			`size-${props.chevronSize ?? 'md'}`,
			props.open ? 'rotated' : '',
			props.chevronSizeClass
		)
	);

	return {
		classes,
		header: props.header,
		chevronSize: props.chevronSize ?? 'md',
		padding: props.padding ?? 'md',
		paddingClass: props.paddingClass,
		chevronSizeClass: props.chevronSizeClass,
		chevronClasses,
		open: props.open ?? false,
		disabled: props.disabled ?? false
	};
}

export default createAccordionHeaderState;
