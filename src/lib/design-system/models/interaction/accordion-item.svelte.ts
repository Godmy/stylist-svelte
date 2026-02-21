import { mergeClasses } from '$stylist/utils/classes';
﻿import { cn } from '$stylist/utils/classes';
import type { AccordionItemProps } from '$stylist/design-system/props';

/**
 * AccordionItem state
 */

export function createAccordionItemState(props: AccordionItemProps) {
	const classes = $derived(mergeClasses('accordion-item', props.class));

	return {
		classes
	};
}

export default createAccordionItemState;
