import type { HTMLAttributes } from 'svelte/elements';
import type { SlotPagination as BasePaginationProps } from '$stylist/navigation/interface/slot/pagination';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipePaginationProps
	extends ComputeIntersectAll<[BasePaginationProps, HTMLAttributes<HTMLDivElement>]> {}
