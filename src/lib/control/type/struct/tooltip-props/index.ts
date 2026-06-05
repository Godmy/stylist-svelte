import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction/interaction-html-attributes';
import type { SlotTooltip as TooltipComponentProps } from '$stylist/control/interface/slot/tooltip';

export type TooltipProps = TooltipComponentProps & InteractionHTMLAttributes<HTMLElement>;
