import type { HtmlAttributesBase } from './common';
import type { ConnectionLineType as ConnectionLineTypeToken, ConnectionLineStyle as ConnectionLineStyleToken } from '$stylist/design-system/tokens/information/connection-line';

export type ConnectionLineType = ConnectionLineTypeToken;
export type ConnectionLineStyle = ConnectionLineStyleToken;

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
