import type { SlotInteraction } from '$stylist/interaction/interface/slot/interaction';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeCanvasColorPalette
	extends ComputeIntersectAll<[HTMLAttributes<HTMLDivElement>, SlotInteraction]> {
	value?: string;
	disabled?: boolean;
	showInput?: boolean;
	showPalette?: boolean;
	onInput?: (value: string) => void;
	onChange?: (value: string) => void;
	class?: string;
}
