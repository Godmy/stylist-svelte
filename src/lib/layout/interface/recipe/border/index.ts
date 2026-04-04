/**
 * Border — декоративная граница..
 *
 * LEGO-состав:

 */
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { Snippet } from 'svelte';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface BorderRecipe
	extends RecordArchitectureMerge<[
		ThemeAttributes<HTMLDivElement>
	]>
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
