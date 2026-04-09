import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { ISkeletonProps as BaseSkeletonProps } from '$stylist/notification/interface/component/notification/other';
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';

export interface SkeletonProps
	extends RecordArchitectureMerge<[BaseSkeletonProps, InteractionHTMLAttributes<HTMLDivElement>]>
{}
