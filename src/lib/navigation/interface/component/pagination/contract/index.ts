import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { PaginationProps as BasePaginationProps } from '$stylist/navigation/interface/component/pagination/other';
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';

export interface PaginationProps
	extends RecordArchitectureMerge<[BasePaginationProps, InteractionHTMLAttributes<HTMLDivElement>]>
{}
