import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotTheme } from '$stylist/theme/interface/slot/theme';

export interface BorderRecipe
	extends StructIntersectAll<[SlotTheme, HTMLAttributes<HTMLDivElement>]>
{
	borderStyle?: 'solid' | 'dashed' | 'dotted' | 'double' | 'bold' | 'none' | 'invisible';
	borderWidth?: string;
	borderColor?: string;
	borderRadius?: string;
	borderTop?: boolean;
	borderBottom?: boolean;
	borderLeft?: boolean;
	borderRight?: boolean;
	animated?: boolean;
	children?: Snippet;
}

