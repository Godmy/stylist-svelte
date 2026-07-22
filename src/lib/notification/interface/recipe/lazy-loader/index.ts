import type { HTMLAttributes } from 'svelte/elements';
import type { SlotChildren } from '$stylist/theme/interface/slot/children';
import type { SlotLazyLoader } from '$stylist/notification/interface/slot/lazy-loader';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeLazyLoader
	extends ComputeIntersectAll<[SlotLazyLoader, HTMLAttributes<HTMLDivElement>, SlotChildren]> {}