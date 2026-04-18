import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { SlotAccordionPanel as AccordionPanelComponentProps } from '$stylist/control/interface/slot/accordion-panel';

export type AccordionPanelProps = AccordionPanelComponentProps & InteractionHTMLAttributes<HTMLDivElement>;
