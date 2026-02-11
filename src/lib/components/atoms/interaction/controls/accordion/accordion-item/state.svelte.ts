import type { AccordionItemProps } from '$stylist/design-system/props';
import { mergeClasses } from '$stylist/utils/classes';

export const createAccordionItemState = (props: AccordionItemProps) => {
	const classes = $derived(mergeClasses('border-b border-[--color-border-muted]', props.class));
	return {
		get classes() {
			return classes;
		}
	};
};

