/**
 * GraphCanvas — canvas для графа..
 *
 * LEGO-состав:

 */
import type { ChildrenProp } from '$stylist/information/type/struct/common';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface GraphCanvasPosition {
	x: number;
	y: number;
}

export interface GraphCanvasViewport {
	position: GraphCanvasPosition;
	zoom: number;
	width: number;
	height: number;
}

export interface GraphCanvasRecipe extends ChildrenProp, ThemeAttributes<HTMLDivElement> {
	width?: number;
	height?: number;
	zoom?: number;
	offsetX?: number;
	offsetY?: number;
	gridSize?: number;
	gridMode?: string;
	gridColor?: string;
	backgroundColor?: string;
	snapToGrid?: boolean;
	gridClass?: string;
	contentClass?: string;
}
