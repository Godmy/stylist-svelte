import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { LinkProps as BaseLinkProps } from '$stylist/navigation/interface/component/link/other';
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';

export interface LinkProps
	extends RecordArchitectureMerge<[BaseLinkProps, InteractionHTMLAttributes<HTMLAnchorElement>]>
{}
