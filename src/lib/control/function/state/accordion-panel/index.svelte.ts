import { mergeClasses } from '$stylist/layout/function/script/join-class-names';
import { cn } from '$stylist/layout/function/script/merge-class-names';
import type { AccordionPanelProps } from '$stylist/control/interface/component/accordion/other';

/**
 * AccordionPanel state
 */

export function createAccordionPanelState(props: AccordionPanelProps) {
	const classes = $derived(mergeClasses('accordion-panel', props.open ? 'open' : 'closed', props.class));

	const contentClasses = $derived(
		mergeClasses(
			'accordion-panel-content',
			props.paddingClass,
			props.borderClass,
			props.bgClass
		)
	);

	return {
		content: props.content,
		paddingClass: props.paddingClass,
		borderClass: props.borderClass,
		bgClass: props.bgClass,
		open: props.open ?? false,
		get classes() {
			return classes;
		},
		get contentClasses() {
			return contentClasses;
		}
	};
}

export default createAccordionPanelState;





