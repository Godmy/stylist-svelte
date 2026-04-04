import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { TooltipProps as BaseTooltipProps } from '$stylist/control/interface/component/tooltip/other';
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';

export interface TooltipProps
	extends RecordArchitectureMerge<[BaseTooltipProps, InteractionHTMLAttributes<HTMLElement>]>
{}
