import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { SlotAccordionItem as AccordionItemComponentProps } from '$stylist/control/interface/slot/accordion-item';

export type AccordionItemProps = AccordionItemComponentProps & InteractionHTMLAttributes<HTMLDivElement>;
