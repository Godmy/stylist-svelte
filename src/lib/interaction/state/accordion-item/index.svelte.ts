import { mergeClasses } from '$stylist/information/function/classes';
import { cn } from '$stylist/information/function/classes';
import type { AccordionItemProps } from '$stylist';

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




