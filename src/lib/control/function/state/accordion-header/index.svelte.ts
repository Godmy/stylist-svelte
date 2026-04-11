import { joinClassNames } from '$stylist/layout/function/script/join-class-names';
import type { AccordionHeaderProps } from '$stylist/control/interface/component/accordion/other';

type AccordionHeaderContext = {
	isPanelOpen: (value: string) => boolean;
	handleValueChange: (value: string) => void;
};

type AccordionHeaderStateProps = AccordionHeaderProps & {
	accordionContext: AccordionHeaderContext;
};

export function createAccordionHeaderState(props: AccordionHeaderStateProps) {
	const ctx = props.accordionContext;
	const open = $derived(ctx.isPanelOpen(props.value));
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
			ctx.handleValueChange?.(props.value);
		}
	};
}

export default createAccordionHeaderState;





