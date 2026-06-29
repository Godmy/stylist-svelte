import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { TokenTrajectory } from '$stylist/architecture/type/alias/trajectory';
import type { TokenBorderStyle } from '$stylist/layout/type/alias/border-style';

export interface RecipeConnectionLine
	extends ComputeIntersectAll<[SlotTheme, HTMLAttributes<SVGPathElement>]> {
	startX: number;
	startY: number;
	endX: number;
	endY: number;
	type?: TokenTrajectory;
	style?: string;
	lineStyle?: TokenBorderStyle;
	strokeWidth?: number;
	width?: number;
	color?: string;
	activeColor?: string;
	hoverColor?: string;
	active?: boolean;
	animated?: boolean;
	showArrow?: boolean;
	arrowSize?: number;
	label?: string;
	labelPosition?: 'start' | 'middle' | 'end';
}
