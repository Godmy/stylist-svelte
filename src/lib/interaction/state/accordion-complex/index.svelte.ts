import { mergeClasses } from '$stylist/information/function/classes';
import { cn } from '$stylist/information/function/classes';
import type { ComplexAccordionProps } from '$stylist';

/**
 * ComplexAccordion state
 */

export function createComplexAccordionState(props: ComplexAccordionProps) {
	const classes = $derived(mergeClasses('complex-accordion-root', props.class));

	return {
		multiple: props.multiple ?? false,
		defaultValue: props.defaultValue ?? [],
		value: props.value ?? [],
		onValueChange: props.onValueChange,
		get classes() {
			return classes;
		}
	};
}

export default createComplexAccordionState;




