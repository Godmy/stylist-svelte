import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { IProgressBarProps as BaseProgressBarProps } from '$stylist/feedback/interface/component/feedback/other';
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';

export interface ProgressBarProps
	extends RecordArchitectureMerge<[BaseProgressBarProps, InteractionHTMLAttributes<HTMLDivElement>]>
{}
