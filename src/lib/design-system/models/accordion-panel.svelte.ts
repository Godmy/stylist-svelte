import { cn } from '$stylist/utils/classes';
import type {
	AccordionHeaderProps,
	AccordionHeaderDoubleProps,
	AccordionItemProps,
	AccordionPanelProps,
	ComplexAccordionProps
} from '$stylist/design-system/props';

	// Определение состояния для AccordionHeader
function createAccordionHeaderState(props: AccordionHeaderProps) {
		const classes = $derived(
			cn(
				'accordion-header',
				props.open ? 'open' : 'closed',
				props.disabled ? 'disabled' : '',
				props.class
			)
		);

		const chevronClasses = $derived(
			cn(
				'accordion-chevron',
				`size-${props.chevronSize ?? 'md'}`,
				props.open ? 'rotated' : '',
				props.chevronSizeClass
			)
		);

		return {
			classes,
			header: props.header,
			chevronSize: props.chevronSize ?? 'md',
			padding: props.padding ?? 'md',
			paddingClass: props.paddingClass,
			chevronSizeClass: props.chevronSizeClass,
			chevronClasses,
			open: props.open ?? false,
			disabled: props.disabled ?? false
		};
	}

	// Определение состояния для AccordionHeaderDouble
function createAccordionHeaderDoubleState(props: AccordionHeaderDoubleProps) {
		const classes = $derived(
			cn(
				'accordion-header-double',
				props.open ? 'open' : 'closed',
				props.disabled ? 'disabled' : '',
				props.class
			)
		);

		const chevronClasses = $derived(
			cn(
				'accordion-chevron',
				'size-md',
				props.open ? 'rotated' : ''
			)
		);

		return {
			classes,
			chevronClasses,
			open: props.open ?? false,
			disabled: props.disabled ?? false
		};
	}

	// Определение состояния для AccordionItem
function createAccordionItemState(props: AccordionItemProps) {
		const classes = $derived(cn('accordion-item', props.class));

		return {
			classes
		};
	}

	// Определение состояния для AccordionPanel
	export function createAccordionPanelState(props: AccordionPanelProps) {
		const classes = $derived(cn('accordion-panel', props.open ? 'open' : 'closed', props.class));

		const contentClasses = $derived(
			cn(
				'accordion-panel-content',
				props.paddingClass,
				props.borderClass,
				props.bgClass
			)
		);

		return {
			classes,
			content: props.content,
			paddingClass: props.paddingClass,
			borderClass: props.borderClass,
			bgClass: props.bgClass,
			contentClasses,
			open: props.open ?? false
		};
	}

	// Определение состояния для ComplexAccordion
function createComplexAccordionState(props: ComplexAccordionProps) {
		const classes = $derived(cn('complex-accordion-root', props.class));

		return {
			classes,
			multiple: props.multiple ?? false,
			defaultValue: props.defaultValue ?? [],
			value: props.value ?? [],
			onValueChange: props.onValueChange
		};
	}

export default createAccordionPanelState;



