import type { AccordionHeaderProps } from '$stylist/design-system/attributes';
import { mergeClasses } from '$stylist/utils/classes';

export const createAccordionHeaderState = (props: AccordionHeaderProps) => {
	const classes = $derived(
		mergeClasses(
			'flex w-full items-center justify-between py-3 text-left text-sm font-medium',
			props.class
		)
	);
	return {
		get classes() {
			return classes;
		}
	};
};
