import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { SlotLink as BaseLinkProps } from '$stylist/navigation/interface/slot/link';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';

export interface RecipeLinkProps extends StructIntersectAll<[BaseLinkProps, InteractionHTMLAttributes<HTMLAnchorElement>]> {}
