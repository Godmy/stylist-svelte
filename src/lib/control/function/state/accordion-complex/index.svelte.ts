import { mergeClasses } from '$stylist/layout/function/script/join-class-names';
import { cn } from '$stylist/layout/function/script/merge-class-names';
import type { ComplexAccordionProps } from '$stylist/control/interface/component/accordion/other';

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





