import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { ISpinnerProps as BaseSpinnerProps } from '$stylist/notification/interface/component/notification/other';
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';

export interface SpinnerProps
	extends RecordArchitectureMerge<[BaseSpinnerProps, InteractionHTMLAttributes<HTMLDivElement>]>
{}
