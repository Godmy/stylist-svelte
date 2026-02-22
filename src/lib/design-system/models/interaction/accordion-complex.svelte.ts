import { mergeClasses } from '$stylist/utils/classes';
﻿import { cn } from '$stylist/utils/classes';
import type { ComplexAccordionProps } from '$stylist/design-system/contracts';

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
