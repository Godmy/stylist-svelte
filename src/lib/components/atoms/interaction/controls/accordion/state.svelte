<script lang="ts">
	import { cn } from '$stylist/utils/classes';
	import type {
		AccordionHeaderProps,
		AccordionHeaderDoubleProps,
		AccordionItemProps,
		AccordionPanelProps,
		ComplexAccordionProps
	} from '$stylist/design-system/attributes';

	// Определение состояния для AccordionHeader
	export function createAccordionHeaderState(props: AccordionHeaderProps) {
		const classes = $derived(
			cn(
				'accordion-header',
				props.open ? 'open' : 'closed',
				props.disabled ? 'disabled' : '',
				props.class
			)
		);

		return {
			classes,
			header: props.header,
			chevronSize: props.chevronSize ?? 'md',
			padding: props.padding ?? 'md',
			paddingClass: props.paddingClass,
			chevronSizeClass: props.chevronSizeClass,
			open: props.open ?? false,
			disabled: props.disabled ?? false
		};
	}

	// Определение состояния для AccordionHeaderDouble
	export function createAccordionHeaderDoubleState(props: AccordionHeaderDoubleProps) {
		const classes = $derived(
			cn(
				'accordion-header-double',
				props.open ? 'open' : 'closed',
				props.disabled ? 'disabled' : '',
				props.class
			)
		);

		return {
			classes,
			open: props.open ?? false,
			disabled: props.disabled ?? false
		};
	}

	// Определение состояния для AccordionItem
	export function createAccordionItemState(props: AccordionItemProps) {
		const classes = $derived(cn('accordion-item', props.class));

		return {
			classes
		};
	}

	// Определение состояния для AccordionPanel
	export function createAccordionPanelState(props: AccordionPanelProps) {
		const classes = $derived(cn('accordion-panel', props.open ? 'open' : 'closed', props.class));

		return {
			classes,
			content: props.content,
			paddingClass: props.paddingClass,
			borderClass: props.borderClass,
			bgClass: props.bgClass,
			open: props.open ?? false
		};
	}

	// Определение состояния для ComplexAccordion
	export function createComplexAccordionState(props: ComplexAccordionProps) {
		const classes = $derived(cn('complex-accordion-root', props.class));

		return {
			classes,
			multiple: props.multiple ?? false,
			defaultValue: props.defaultValue ?? [],
			value: props.value ?? [],
			onValueChange: props.onValueChange
		};
	}
</script>
