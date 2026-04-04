import type { HoverContract, GestureContract } from '$stylist/interaction/type/struct/gesture';
import type { Snippet } from 'svelte';

/**
 * Прото-интерфейс для hoverable элементов
 */
export interface IHoverable extends Partial<GestureContract> {
	/** Обработчик наведения */
	onMouseEnter?: (event: MouseEvent) => void;
	/** Обработчик ухода с элемента */
	onMouseLeave?: (event: MouseEvent) => void;
}

/**
 * Props для hoverable компонента
 */
export interface HoverProps extends IHoverable {
	class?: string;
	children?: Snippet;
}
