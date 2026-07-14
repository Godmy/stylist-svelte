import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { Idef0Port } from '$stylist/idef-zero/type/object/idef0-port';
import type { SlotText } from '$stylist/typography/interface/slot/text';

export interface RecipeIdef0Io
	extends ComputeIntersectAll<[SlotTheme, SlotText, HTMLAttributes<HTMLDivElement>]> {
	ports: Idef0Port[];
	boxX: number;
	boxY?: number;
	boxHeight: number;
	boxWidth?: number;
	startX?: number;
	endX?: number;
}
