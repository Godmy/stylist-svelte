import type { AccordionHeaderProps } from '$stylist/design-system/props';
import { mergeClasses } from '$stylist/utils/classes';

export const createAccordionHeaderState = (props: AccordionHeaderProps) => {
	const classes = $derived(
		mergeClasses(
			'flex w-full items-center justify-between py-3 text-left text-sm font-medium',
			props.class
		)
	);

	const chevronClasses = $derived(
		mergeClasses(
			'ml-2 h-4 w-4 shrink-0 transition-transform duration-200',
			props.chevronSizeClass
		)
	);

	return {
		...props,
		get classes() {
			return classes;
		},
		get chevronClasses() {
			return chevronClasses;
		}
	};
};

