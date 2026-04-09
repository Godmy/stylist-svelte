import type { GestureContract } from '..';

/**
 * Контракт для hoverable элементов
 */
export interface HoverContract extends GestureContract {
	/** Обработчик наведения */
	onMouseEnter?: (event: MouseEvent) => void;
	/** Обработчик ухода с элемента */
	onMouseLeave?: (event: MouseEvent) => void;
}
