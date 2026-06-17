import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { TokenTrajectory } from '$stylist/architecture/type/enum/trajectory';
import type { TokenBorderStyle } from '$stylist/layout/type/enum/border-style';

export interface RecipeConnectionLine
	extends StructIntersectAll<[SlotTheme, HTMLAttributes<SVGPathElement>]> {
	startX: number;
	startY: number;
	endX: number;
	endY: number;
	type?: TokenTrajectory;
	lineStyle?: TokenBorderStyle;
	strokeWidth?: number;
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
