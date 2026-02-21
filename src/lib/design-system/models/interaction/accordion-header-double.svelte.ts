import { mergeClasses } from '$stylist/utils/classes';
﻿import { cn } from '$stylist/utils/classes';
import type { AccordionHeaderDoubleProps } from '$stylist/design-system/props';

/**
 * AccordionHeaderDouble state
 */

export function createAccordionHeaderDoubleState(props: AccordionHeaderDoubleProps) {
	const classes = $derived(
		mergeClasses(
			'accordion-header-double',
			props.open ? 'open' : 'closed',
			props.disabled ? 'disabled' : '',
			props.class
		)
	);

	const chevronClasses = $derived(
		mergeClasses(
			'accordion-chevron',
			'size-md',
			props.open ? 'rotated' : ''
		)
	);

	return {
		classes,
		chevronClasses,
		open: props.open ?? false,
		disabled: props.disabled ?? false
	};
}

export default createAccordionHeaderDoubleState;
