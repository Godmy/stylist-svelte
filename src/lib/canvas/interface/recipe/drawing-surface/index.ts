import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { HTMLCanvasAttributes } from 'svelte/elements';
import type { LayoutHTMLAttributes } from '$stylist/layout/interface/behavior/layout-html-attributes';

export interface RecipeDrawingSurface
	extends ComputeIntersectAll<[HTMLCanvasAttributes, LayoutHTMLAttributes<HTMLDivElement>]> {
	class?: string;
	width?: number;
	height?: number;
	drawingEnabled?: boolean;
	tool?: 'pen' | 'eraser' | 'select';
	strokeColor?: string;
	strokeWidth?: number;
	backgroundColor?: string;
}
