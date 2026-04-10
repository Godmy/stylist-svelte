import type { HoverContract } from '$stylist/interaction/type/struct/gesture-hover-contract';
import type { GestureContract } from '$stylist/interaction/type/struct/gesture/gesture-contract';

/**
 * Прото-интерфейс для hoverable элементов
 */
export interface IHoverable extends Partial<GestureContract> {
	/** Обработчик наведения */
	onMouseEnter?: (event: MouseEvent) => void;
	/** Обработчик ухода с элемента */
	onMouseLeave?: (event: MouseEvent) => void;
}
