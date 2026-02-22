import { mergeClasses } from '$stylist/utils/classes';
﻿import { cn } from '$stylist/utils/classes';
import type { AccordionItemProps } from '$stylist/design-system/contracts';

/**
 * AccordionItem state
 */

export function createAccordionItemState(props: AccordionItemProps) {
	const classes = $derived(mergeClasses('accordion-item', props.class));

	return {
		get classes() {
			return classes;
		}
	};
}

export default createAccordionItemState;
