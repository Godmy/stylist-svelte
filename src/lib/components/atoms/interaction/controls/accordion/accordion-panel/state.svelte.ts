import type { AccordionPanelProps } from '$stylist/design-system/props';
import { mergeClasses } from '$stylist/utils/classes';

export const createAccordionPanelState = (props: AccordionPanelProps) => {
	const classes = $derived(mergeClasses('overflow-hidden text-sm transition-all', props.class));
	const contentClasses = $derived('pb-4 pt-0');
	return {
		...props,
		get classes() {
			return classes;
		},
		get contentClasses() {
			return contentClasses;
		}
	};
};

