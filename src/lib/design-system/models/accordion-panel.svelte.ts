import { cn } from '$stylist/utils/classes';
import type { AccordionPanelProps } from '$stylist/design-system/props';

/**
 * AccordionPanel state
 */

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

export default createAccordionPanelState;
