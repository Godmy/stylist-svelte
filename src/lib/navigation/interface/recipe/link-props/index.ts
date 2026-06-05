import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction/interaction-html-attributes';
import type { SlotLink as BaseLinkProps } from '$stylist/typography/interface/slot/link';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';

export interface RecipeLinkProps
	extends StructIntersectAll<[BaseLinkProps, InteractionHTMLAttributes<HTMLAnchorElement>]> {}
