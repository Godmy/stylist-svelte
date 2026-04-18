import { joinClassNames } from '$stylist/layout/function/script/join-class-names';
import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import type { SlotAccordionHeaderDouble as AccordionHeaderDoubleProps } from '$stylist/control/interface/slot/accordion-header-double';

/**
 * AccordionHeaderDouble state
 */

export function createAccordionHeaderDoubleState(props: AccordionHeaderDoubleProps) {
	const classes = $derived(
		joinClassNames(
			'accordion-header-double',
			props.open ? 'open' : 'closed',
			props.disabled ? 'disabled' : '',
			props.class
		)
	);

	const chevronClasses = $derived(
		joinClassNames(
			'accordion-chevron',
			'size-md',
			props.open ? 'rotated' : ''
		)
	);

	return {
		open: props.open ?? false,
		disabled: props.disabled ?? false,
		get classes() {
			return classes;
		},
		get chevronClasses() {
			return chevronClasses;
		}
	};
}

export default createAccordionHeaderDoubleState;





