import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { ISpinnerProps as BaseSpinnerProps } from '$stylist/feedback/interface/component/feedback/other';
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';

export interface SpinnerProps
	extends RecordArchitectureMerge<[BaseSpinnerProps, InteractionHTMLAttributes<HTMLDivElement>]>
{}
