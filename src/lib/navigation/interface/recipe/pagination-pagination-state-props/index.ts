import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotPagination as PaginationProps } from '$stylist/navigation/interface/slot/pagination';
import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';

export interface PaginationStateProps extends StructIntersectAll<[PaginationProps, Omit<InteractionHTMLAttributes<HTMLDivElement>, 'class'>]> {
	class?: string;
}
