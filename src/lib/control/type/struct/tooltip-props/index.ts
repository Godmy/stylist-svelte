import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { TooltipProps as TooltipComponentProps } from '$stylist/control/interface/component/tooltip/other';

export type TooltipProps = TooltipComponentProps & InteractionHTMLAttributes<HTMLElement>;
