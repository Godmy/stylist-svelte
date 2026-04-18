import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { SlotLink as BaseBreadcrumbLinkProps } from '$stylist/navigation/interface/slot/link';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';

export interface RecipeBreadcrumbLinkProps extends StructIntersectAll<[BaseBreadcrumbLinkProps, InteractionHTMLAttributes<HTMLAnchorElement>]> {}
