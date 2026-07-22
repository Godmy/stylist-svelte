import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotPagination as PaginationProps } from '$stylist/navigation/interface/slot/pagination';

export interface PaginationStateProps
	extends ComputeIntersectAll<[PaginationProps, Omit<HTMLAttributes<HTMLDivElement>, 'class'>]> {
	class?: string;
}
