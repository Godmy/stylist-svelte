import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { AccordionPanelProps as AccordionPanelComponentProps } from '$stylist/control/interface/component/accordion/other';

export type AccordionPanelProps = AccordionPanelComponentProps & InteractionHTMLAttributes<HTMLDivElement>;
