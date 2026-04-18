import { joinClassNames } from '$stylist/layout/function/script/join-class-names';
import type { SlotAccordionPanel as AccordionPanelProps } from '$stylist/control/interface/slot/accordion-panel';

type AccordionPanelContext = {
	isPanelOpen: (value: string) => boolean;
};

type AccordionPanelStateProps = AccordionPanelProps & {
	accordionContext: AccordionPanelContext;
};

export function createAccordionPanelState(props: AccordionPanelStateProps) {
	const ctx = props.accordionContext;
	const isOpen = $derived(ctx.isPanelOpen(props.value));
	const classes = $derived(joinClassNames('accordion-panel', isOpen ? 'open' : 'closed', props.class));

	const contentClasses = $derived(
		joinClassNames(
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
		get isOpen() {
			return isOpen;
		},
		get classes() {
			return classes;
		},
		get contentClasses() {
			return contentClasses;
		}
	};
}

export default createAccordionPanelState;
