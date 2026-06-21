import type { SlotChildren } from '$stylist/architecture/interface/slot/children';
import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction/interaction-html-attributes';
import type { SlotLazyLoader } from '$stylist/notification/interface/slot/lazy-loader';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeLazyLoader
	extends ComputeIntersectAll<[SlotLazyLoader, InteractionHTMLAttributes<HTMLDivElement>, SlotChildren]> {}