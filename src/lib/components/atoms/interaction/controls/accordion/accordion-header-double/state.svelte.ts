import type { AccordionHeaderDoubleProps } from '$stylist/design-system/attributes';
import { mergeClasses } from '$stylist/utils/classes';

export const createAccordionHeaderDoubleState = (props: AccordionHeaderDoubleProps) => {
	const classes = $derived(
		mergeClasses('flex w-full items-center justify-between py-3 text-left', props.class)
	);
	const chevronClasses = $derived(
		'h-4 w-4 transition-transform data-[state=open]:rotate-180'
	);
	return {
		get classes() {
			return classes;
		},
		get chevronClasses() {
			return chevronClasses;
		}
	};
};
