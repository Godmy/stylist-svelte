import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { TokenTrajectory } from '$stylist/architecture/type/enum/trajectory';
import type { TokenBorderStyle } from '$stylist/layout/type/enum/border-style';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface ConnectionLineRecipe extends StructIntersectAll<[ThemeAttributes<SVGPathElement>]> {
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
