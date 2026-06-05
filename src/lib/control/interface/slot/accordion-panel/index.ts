import type { HTMLAttributes } from 'svelte/elements';
import type { ContentProp } from '$stylist/information/type/struct/content-prop';
import type { SlotAccordionBase } from '$stylist/control/interface/slot/accordion-base';

export interface SlotAccordionPanel
	extends Omit<HTMLAttributes<HTMLDivElement>, keyof SlotAccordionBase>,
		SlotAccordionBase,
		ContentProp {
	paddingClass?: string;
	borderClass?: string;
	bgClass?: string;
	open?: boolean;
}
