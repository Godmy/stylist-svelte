import type { InteractionHTMLAttributes } from '$stylist/interaction/type/attribute/interaction';
import type { TokenAppearance } from '$stylist/information/type/token/appearance';

export interface DragAndDropProps extends InteractionHTMLAttributes<HTMLDivElement> {
	/** Разрешить перетаскивание */
	draggable?: boolean;
	/** Разрешить сброс элемента (drop zone) */
	dropzone?: boolean;
	/** Данные для передачи при перетаскивании */
	dragData?: any;
	/** Обработчик начала перетаскивания */
	onDragStart?: (event: DragEvent) => void;
	/** Обработчик перетаскивания */
	onDrag?: (event: DragEvent) => void;
	/** Обработчик окончания перетаскивания */
	onDragEnd?: (event: DragEvent) => void;
	/** Обработчик входа в зону сброса */
	onDragEnter?: (event: DragEvent) => void;
	/** Обработчик выхода из зоны сброса */
	onDragLeave?: (event: DragEvent) => void;
	/** Обработчик перетаскивания над зоной */
	onDragOver?: (event: DragEvent) => void;
	/** Обработчик сброса */
	onDrop?: (event: DragEvent) => void;
	/** Блокировка перетаскивания */
	disabled?: boolean;
	/** Вариант отображения */
	variant?: TokenAppearance;
	/** Показывать индикатор перетаскивания */
	showDragHandle?: boolean;
	/** Курсор при перетаскивании */
	dragCursor?: 'grab' | 'grabbing' | 'move' | 'default';
}
