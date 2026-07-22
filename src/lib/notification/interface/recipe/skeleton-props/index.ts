import type { HTMLAttributes } from 'svelte/elements';
import type { SlotSkeleton as BaseSkeletonProps } from '$stylist/notification/interface/slot/skeleton';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeSkeletonProps
	extends ComputeIntersectAll<[BaseSkeletonProps, HTMLAttributes<HTMLDivElement>]> {}
