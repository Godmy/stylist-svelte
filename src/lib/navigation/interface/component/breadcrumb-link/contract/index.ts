import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { LinkProps as BaseBreadcrumbLinkProps } from '$stylist/navigation/interface/component/link/other';
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';

export interface BreadcrumbLinkProps
	extends RecordArchitectureMerge<[BaseBreadcrumbLinkProps, InteractionHTMLAttributes<HTMLAnchorElement>]>
{}
