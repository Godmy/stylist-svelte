import type { GestureContract } from '..';

/**
 * Контракт для draggable элементов
 */
export interface DragContract extends GestureContract {
	/** Разрешить перетаскивание */
	draggable: boolean;
	/** Разрешить drop зону */
	dropzone: boolean;
	/** Данные для передачи при drag */
	dragData?: any;
	/** Обработчик начала перетаскивания */
	onDragStart?: (event: DragEvent) => void;
	/** Обработчик перетаскивания */
	onDrag?: (event: DragEvent) => void;
	/** Обработчик окончания перетаскивания */
	onDragEnd?: (event: DragEvent) => void;
	/** Обработчик входа в drop зону */
	onDragEnter?: (event: DragEvent) => void;
	/** Обработчик выхода из drop зоны */
	onDragLeave?: (event: DragEvent) => void;
	/** Обработчик нахождения над drop зоной */
	onDragOver?: (event: DragEvent) => void;
	/** Обработчик сброса */
	onDrop?: (event: DragEvent) => void;
}
