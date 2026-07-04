import type { SlotInteraction } from '$stylist/interaction/interface/slot/interaction';
import type { HTMLAttributes } from 'svelte/elements';
import type { SlotChildren } from '$stylist/theme/interface/slot/children';
import type { SlotLoadingBoundary } from '$stylist/notification/interface/slot/loading-boundary';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeLoadingBoundary
	extends ComputeIntersectAll<[SlotLoadingBoundary, HTMLAttributes<HTMLDivElement>, SlotInteraction, SlotChildren]> {}