import type { Snippet } from 'svelte';
import type { HtmlAttributesBase } from './common';

/**
 * Режимы отображения сетки
 */
export type GraphCanvasGridMode = 'none' | 'dots' | 'lines' | 'cross';

/**
 * Режимы панорамирования
 */
export type GraphCanvasPanMode = 'drag' | 'space' | 'always';

/**
 * Свойства холста графа
 */
export interface GraphCanvasProps extends HtmlAttributesBase<HTMLDivElement> {
	/** Ширина холста */
	width?: number;
	/** Высота холста */
	height?: number;
	/** Масштаб (zoom) */
	zoom?: number;
	/** Минимальный масштаб */
	minZoom?: number;
	/** Максимальный масштаб */
	maxZoom?: number;
	/** Смещение по X */
	offsetX?: number;
	/** Смещение по Y */
	offsetY?: number;
	/** Размер ячейки сетки */
	gridSize?: number;
	/** Режим отображения сетки */
	gridMode?: GraphCanvasGridMode;
	/** Цвет сетки */
	gridColor?: string;
	/** Цвет фона */
	backgroundColor?: string;
	/** Режим панорамирования */
	panMode?: GraphCanvasPanMode;
	/** Включено ли перетаскивание */
	panEnabled?: boolean;
	/** Включено ли масштабирование колесом */
	zoomEnabled?: boolean;
	/** Включено ли выделение узлов */
	selectionEnabled?: boolean;
	/** Включена ли сетка */
	snapToGrid?: boolean;
	/** Сила притяжения к сетке */
	snapThreshold?: number;
	/** Класс для области контента */
	contentClass?: string;
	/** Класс для сетки */
	gridClass?: string;
	/** Обработчик изменения масштаба */
	onzoomchange?: (zoom: number) => void;
	/** Обработчик изменения смещения */
	onoffsetchange?: (offset: { x: number; y: number }) => void;
	/** Обработчик начала панорамирования */
	onpanstart?: (event: MouseEvent) => void;
	/** Обработчик панорамирования */
	onpan?: (event: MouseEvent) => void;
	/** Обработчик завершения панорамирования */
	onpanend?: (event: MouseEvent) => void;
	/** Обработчик клика по холсту */
	oncanvasclick?: (event: MouseEvent) => void;
	/** Обработчик двойного клика */
	ondblclick?: (event: MouseEvent) => void;
	/** Обработчик контекстного меню */
	oncontextmenu?: (event: MouseEvent) => void;
	/** Дочерний контент (узлы, связи) */
	children?: Snippet;
}

/**
 * Позиция в 2D пространстве
 */
export interface GraphCanvasPosition {
	x: number;
	y: number;
}

/**
 * Область видимости холста
 */
export interface GraphCanvasViewport {
	position: GraphCanvasPosition;
	zoom: number;
	width: number;
	height: number;
}
