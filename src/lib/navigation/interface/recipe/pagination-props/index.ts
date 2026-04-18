import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { SlotPagination as BasePaginationProps } from '$stylist/navigation/interface/slot/pagination';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';

export interface RecipePaginationProps extends StructIntersectAll<[BasePaginationProps, InteractionHTMLAttributes<HTMLDivElement>]> {}
