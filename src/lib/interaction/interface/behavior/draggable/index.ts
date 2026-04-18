import type { DragContract } from '$stylist/interaction/type/struct/gesture-drag-contract';

/**
 * Прото-интерфейс для draggable элементов
 * Расширяет DragContract дополнительными свойствами
 */
export interface BehaviorDraggable extends Partial<DragContract> {
	/** Данные для передачи при drag */
	dragData?: any;
	/** Показывать handle для перетаскивания */
	showHandle?: boolean;
	/** Курсор при перетаскивании */
	dragCursor?: 'grab' | 'grabbing' | 'move';
}
