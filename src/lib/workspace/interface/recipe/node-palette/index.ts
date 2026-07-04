import type { SlotInteraction } from '$stylist/interaction/interface/slot/interaction';
import type { HTMLAttributes } from 'svelte/elements';
import type { SlotChildren } from '$stylist/theme/interface/slot/children';
import type { SlotNodePalette } from '$stylist/workspace/interface/slot/node-palette';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeNodePalette
	extends ComputeIntersectAll<[SlotNodePalette, HTMLAttributes<HTMLDivElement>, SlotInteraction, SlotChildren]> {}