import type { HTMLButtonAttributes } from 'svelte/elements';
import type { AccordionHeaderProps as AccordionHeaderComponentProps } from '$stylist/control/interface/component/accordion/other';

export type AccordionHeaderProps = AccordionHeaderComponentProps & HTMLButtonAttributes;
