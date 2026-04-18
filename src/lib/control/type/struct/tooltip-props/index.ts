import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { SlotTooltip as TooltipComponentProps } from '$stylist/control/interface/slot/tooltip';

export type TooltipProps = TooltipComponentProps & InteractionHTMLAttributes<HTMLElement>;
