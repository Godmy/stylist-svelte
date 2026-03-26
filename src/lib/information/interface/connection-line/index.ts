import type { HtmlAttributesBase } from '$stylist/information/type/attribute/common';
import type { TokenTrajectory } from '$stylist/architecture/type/token/trajectory';
import type { TokenBorderStyle as LineStyleToken } from '$stylist/architecture/type/token/border-style';

export interface ConnectionLineProps extends HtmlAttributesBase<SVGElement> {
	id: string;
	startX: number;
	startY: number;
	endX: number;
	endY: number;
	type?: TokenTrajectory;
	lineStyle?: LineStyleToken;
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
	onclick?: (event: MouseEvent) => void;
	onmouseenter?: (event: MouseEvent) => void;
	onmouseleave?: (event: MouseEvent) => void;
}

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





