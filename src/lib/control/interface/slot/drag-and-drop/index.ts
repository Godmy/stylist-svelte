import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { BehaviorDraggable as IDraggable } from '$stylist/interaction/interface/behavior/draggable';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import type { BehaviorDraggable } from '$stylist/interaction/interface/behavior/draggable';

/**
 * SlotDragAndDrop — свойства перетаскивания элемента.
 *
 * LEGO-состав:
 *   BehaviorDraggable            (interaction) — dropEffect, onDrag*, onDrop
 *   InteractionHTMLAttributes<HTMLDivElement>
 */
export interface SlotDragAndDrop
	extends Omit<BehaviorDraggable, 'draggable' | 'dragCursor'>,
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
