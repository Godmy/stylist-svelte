import type { DragContract } from '$stylist/interaction/type/struct/gesture';
import type { Snippet } from 'svelte';

/**
 * Прото-интерфейс для draggable элементов
 * Расширяет DragContract дополнительными свойствами
 */
export interface IDraggable extends Partial<DragContract> {
	/** Данные для передачи при drag */
	dragData?: any;
	/** Показывать handle для перетаскивания */
	showDragHandle?: boolean;
	/** Курсор при перетаскивании */
	dragCursor?: 'grab' | 'grabbing' | 'move';
}

/**
 * Props для draggable компонента
 */
export interface DragProps extends IDraggable {
	showHandle?: boolean;
	class?: string;
	children?: Snippet;
}
