import type { SlotChildren } from '$stylist/architecture/interface/slot/children';
import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction/interaction-html-attributes';
import type { SlotLoadingBoundary } from '$stylist/notification/interface/slot/loading-boundary';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeLoadingBoundary
	extends ComputeIntersectAll<[SlotLoadingBoundary, InteractionHTMLAttributes<HTMLDivElement>, SlotChildren]> {}