import type { GestureContract } from '$stylist/interaction/type/struct/gesture/gesture-contract';

/**
 * Контракт для hoverable элементов
 */
export type HoverContract = GestureContract & {
	/** Обработчик наведения */
	onMouseEnter?: (event: MouseEvent) => void;
	/** Обработчик ухода с элемента */
	onMouseLeave?: (event: MouseEvent) => void;
};
