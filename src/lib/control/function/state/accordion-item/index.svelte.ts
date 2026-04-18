import { joinClassNames } from '$stylist/layout/function/script/join-class-names';
import type { SlotAccordionItem as AccordionItemProps } from '$stylist/control/interface/slot/accordion-item';

type AccordionItemContext = {
	accordionId: string;
};

type AccordionItemStateProps = AccordionItemProps & {
	accordionContext: AccordionItemContext;
};

export function createAccordionItemState(props: AccordionItemStateProps) {
	const ctx = props.accordionContext;
	const uniqueId = $derived(`${ctx.accordionId}-${props.value}`);
	const classes = $derived(joinClassNames('accordion-item', props.class));

	return {
		get uniqueId() {
			return uniqueId;
		},
		get classes() {
			return classes;
		}
	};
}

export default createAccordionItemState;
