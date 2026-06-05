import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction/interaction-html-attributes';
import type { SlotLink as BaseBreadcrumbLinkProps } from '$stylist/typography/interface/slot/link';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';

export interface RecipeBreadcrumbLinkProps
	extends StructIntersectAll<
		[BaseBreadcrumbLinkProps, InteractionHTMLAttributes<HTMLAnchorElement>]
	> {}
