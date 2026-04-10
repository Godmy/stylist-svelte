import { joinClassNames } from '$stylist/layout/function/script/join-class-names';
import type { AccordionHeaderProps } from '$stylist/control/interface/component/accordion/other';

/**
 * AccordionHeader state
 */

type AccordionHeaderStateProps = AccordionHeaderProps & {
	isOpen?: () => boolean;
	handleValueChange?: (value: string) => void;
};

export function createAccordionHeaderState(props: AccordionHeaderStateProps) {
	const open = $derived(props.isOpen ? props.isOpen() : (props.open ?? false));
	const classes = $derived(
		joinClassNames(
			'accordion-header',
			open ? 'open' : 'closed',
			props.disabled ? 'disabled' : '',
			props.class
		)
	);

	const chevronClasses = $derived(
		joinClassNames(
			'accordion-chevron',
			`size-${props.chevronSize ?? 'md'}`,
			open ? 'rotated' : '',
			props.chevronSizeClass
		)
	);

	return {
		header: props.header,
		chevronSize: props.chevronSize ?? 'md',
		padding: props.padding ?? 'md',
		paddingClass: props.paddingClass,
		chevronSizeClass: props.chevronSizeClass,
		get open() {
			return open;
		},
		disabled: props.disabled ?? false,
		get classes() {
			return classes;
		},
		get chevronClasses() {
			return chevronClasses;
		},
		handleClick() {
			props.handleValueChange?.(props.value);
		}
	};
}

export default createAccordionHeaderState;





