import { joinClassNames } from '$stylist/layout/function/script/join-class-names';
import type { AccordionHeaderProps } from '$stylist/control/interface/component/accordion/other';

/**
 * AccordionHeader state
 */

export function createAccordionHeaderState(props: AccordionHeaderProps) {
	const classes = $derived(
		joinClassNames(
			'accordion-header',
			props.open ? 'open' : 'closed',
			props.disabled ? 'disabled' : '',
			props.class
		)
	);

	const chevronClasses = $derived(
		joinClassNames(
			'accordion-chevron',
			`size-${props.chevronSize ?? 'md'}`,
			props.open ? 'rotated' : '',
			props.chevronSizeClass
		)
	);

	return {
		header: props.header,
		chevronSize: props.chevronSize ?? 'md',
		padding: props.padding ?? 'md',
		paddingClass: props.paddingClass,
		chevronSizeClass: props.chevronSizeClass,
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

export default createAccordionHeaderState;





