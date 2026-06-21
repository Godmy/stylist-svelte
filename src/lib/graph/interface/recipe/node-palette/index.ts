import type { SlotChildren } from '$stylist/architecture/interface/slot/children';
import type { SlotNodePalette } from '$stylist/graph/interface/slot/node-palette';
import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction/interaction-html-attributes';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeNodePalette
	extends ComputeIntersectAll<[SlotNodePalette, InteractionHTMLAttributes<HTMLDivElement>, SlotChildren]> {}