import type { HTMLButtonAttributes } from 'svelte/elements';
import type { SlotAccordionHeader as AccordionHeaderComponentProps } from '$stylist/control/interface/slot/accordion-header';

export type AccordionHeaderProps = AccordionHeaderComponentProps & HTMLButtonAttributes;
