import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { ProtoTheme } from '$stylist/theme/interface/proto/thema';

export interface BorderRecipe
	extends RecordArchitectureMerge<[ProtoTheme, HTMLAttributes<HTMLDivElement>]>
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
