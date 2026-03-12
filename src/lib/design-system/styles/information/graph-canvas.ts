import type { PrimitiveMarker } from '$stylist/design-system/tokens/architecture/primitives';
import { cn } from '$stylist/design-system/utils/cn';

/**
 * Менеджер стилей для холста графа
 */
export class GraphCanvasStyleManager {
	/**
	 * Получает класс контейнера холста
	 */
	static getContainerClass(className?: string): string {
		return cn('graph-canvas', className);
	}

	/**
	 * Получает класс сетки
	 */
	static getGridClass(gridMode: PrimitiveMarker, className?: string): string {
		return cn('graph-canvas__grid', `graph-canvas__grid--${gridMode}`, className);
	}

	/**
	 * Получает класс контента
	 */
	static getContentClass(className?: string): string {
		return cn('graph-canvas__content', className);
	}

	/**
	 * Получает стили сетки
	 */
	static getGridStyles(
		gridSize: number,
		gridColor: string,
		backgroundColor: string
	): string {
		return `
			--grid-size: ${gridSize}px;
			--grid-color: ${gridColor};
			--background-color: ${backgroundColor};
		`.trim();
	}

	/**
	 * Получает стили трансформации
	 */
	static getTransformStyles(offsetX: number, offsetY: number, zoom: number): string {
		return `transform: translate(${offsetX}px, ${offsetY}px) scale(${zoom}); transform-origin: 0 0;`;
	}

	/**
	 * Получает CSS для паттерна сетки
	 */
	static getGridPatternCSS(gridSize: number, gridColor: string): string {
		return `
			background-image: 
				linear-gradient(to right, ${gridColor} 1px, transparent 1px),
				linear-gradient(to bottom, ${gridColor} 1px, transparent 1px);
			background-size: ${gridSize}px ${gridSize}px;
		`.trim();
	}

	/**
	 * Получает CSS для точечной сетки
	 */
	static getDotsPatternCSS(gridSize: number, gridColor: string): string {
		return `
			background-image: radial-gradient(${gridColor} 1px, transparent 1px);
			background-size: ${gridSize}px ${gridSize}px;
		`.trim();
	}

	/**
	 * Получает CSS для крестообразной сетки
	 */
	static getCrossPatternCSS(gridSize: number, gridColor: string): string {
		return `
			background-image: 
				linear-gradient(to right, ${gridColor} 1px, transparent 1px),
				linear-gradient(to bottom, ${gridColor} 1px, transparent 1px),
				radial-gradient(${gridColor} 1px, transparent 1px);
			background-size: ${gridSize}px ${gridSize}px;
		`.trim();
	}
}

export default GraphCanvasStyleManager;








