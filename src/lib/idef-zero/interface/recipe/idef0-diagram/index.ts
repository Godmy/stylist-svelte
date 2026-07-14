import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotIdef0 } from '$stylist/idef-zero/interface/slot/idef0';
import type { Idef0Port } from '$stylist/idef-zero/type/object/idef0-port';

export interface RecipeIdef0Diagram
	extends ComputeIntersectAll<[SlotTheme, SlotIdef0, HTMLAttributes<HTMLDivElement>]> {
	inputs: Idef0Port[];
	outputs: Idef0Port[];
	class?: string;
}
