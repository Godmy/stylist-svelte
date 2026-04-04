/**
 * ConnectionLine — линия соединения..
 *
 * LEGO-состав:

 */
import type { TokenBorderStyle } from '$stylist/architecture/type/enum/border-style';
import type { TokenTrajectory } from '$stylist/architecture/type/enum/trajectory';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface Point {
	x: number;
	y: number;
}

export interface ConnectionPathResult {
	path: string;
	length: number;
	midPoint: Point;
	angle: number;
}

export interface ConnectionLineRecipe extends ThemeAttributes<SVGPathElement> {
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
