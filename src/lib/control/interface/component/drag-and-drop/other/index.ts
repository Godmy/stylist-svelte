import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { IDraggable } from '$stylist/interaction/interface/proto/draggable';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';

/**
 * DragAndDropProps — свойства перетаскивания элемента.
 *
 * LEGO-состав:
 *   IDraggable            (interaction) — dropEffect, onDrag*, onDrop
 *   InteractionHTMLAttributes<HTMLDivElement>
 */
export interface DragAndDropProps
	extends Omit<IDraggable, 'draggable' | 'dragCursor'>,
		Omit<InteractionHTMLAttributes<HTMLDivElement>, 'draggable'>
{
	/** Разрешить перетаскивание */
	draggable?: boolean;
	/** Разрешить сброс элемента (drop zone) */
	dropzone?: boolean;
	/** Данные для передачи при перетаскивании */
	dragData?: any;
	/** Обработчик перетаскивания над зоной */
	onDragOver?: (event: DragEvent) => void;
	/** Блокировка перетаскивания */
	disabled?: boolean;
	/** Вариант отображения */
	variant?: TokenAppearance;
	/** Показывать индикатор перетаскивания */
	showDragHandle?: boolean;
	/** Курсор при перетаскивании */
	dragCursor?: 'grab' | 'grabbing' | 'move' | 'default';
}
