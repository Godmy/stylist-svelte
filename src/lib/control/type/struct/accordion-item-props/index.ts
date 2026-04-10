import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { AccordionItemProps as AccordionItemComponentProps } from '$stylist/control/interface/component/accordion/other';

export type AccordionItemProps = AccordionItemComponentProps & InteractionHTMLAttributes<HTMLDivElement>;
