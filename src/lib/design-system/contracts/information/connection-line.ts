import type { HtmlAttributesBase } from './common';
import type { LineType as LineTypeToken } from '$stylist/design-system/tokens/architecture/line-types';
import type { LineStyle as LineStyleToken } from '$stylist/design-system/tokens/architecture/line-styles';

export type ConnectionLineType = LineTypeToken;
export type ConnectionLineStyle = LineStyleToken;

/**
 * Интерфейс для отрисовки соединительных линий
 */
export interface ConnectionLineProps extends HtmlAttributesBase<SVGElement> {
	id: string;
	startX: number;
	startY: number;
	endX: number;
	endY: number;
	type?: ConnectionLineType;
	lineStyle?: ConnectionLineStyle;
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



