import { mergeClasses } from '$stylist/layout/function/script/join-class-names';
import { cn } from '$stylist/layout/function/script/merge-class-names';
import type { AccordionItemProps } from '$stylist/control/interface/component/accordion/other';

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





