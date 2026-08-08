import type { GestureContract } from '$stylist/layout/type/object/gesture-contract';

/**
 * Прото-интерфейс для hoverable элементов
 */
export interface BehaviorHoverable extends Partial<GestureContract> {
	/** Обработчик наведения */
	onMouseEnter?: (event: MouseEvent) => void;
	/** Обработчик ухода с элемента */
	onMouseLeave?: (event: MouseEvent) => void;
}
