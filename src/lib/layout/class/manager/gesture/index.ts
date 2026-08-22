import type { DragContract } from '$stylist/layout/interface/slot/drag-contract';
import type { GestureContract } from '$stylist/layout/interface/slot/gesture-contract';

export class ObjectManagerGesture {
	/**
	 * Нормализует базовый контракт жеста
	 */
	static normalizeGestureContract(contract: Partial<GestureContract>): GestureContract {
		return {
			disabled: contract.disabled ?? false,
			animation: contract.animation ?? 'ease',
			duration: contract.duration ?? '200ms',
			easing: contract.easing ?? 'ease-in-out',
			cursor: contract.cursor ?? 'pointer',
			pressEffect: contract.pressEffect ?? true,
			hoverEffect: contract.hoverEffect ?? true
		};
	}

	/**
	 * Нормализует клик контракт
	 */
	static normalizeClickContract(
		contract: Partial<
			GestureContract & {
				onClick?: (event: MouseEvent) => void;
				onDblClick?: (event: MouseEvent) => void;
				onContextMenu?: (event: MouseEvent) => void;
				onMouseDown?: (event: MouseEvent) => void;
				onMouseUp?: (event: MouseEvent) => void;
				onMouseEnter?: (event: MouseEvent) => void;
				onMouseLeave?: (event: MouseEvent) => void;
			}
		>
	): GestureContract & {
		onClick?: (event: MouseEvent) => void;
		onDblClick?: (event: MouseEvent) => void;
		onContextMenu?: (event: MouseEvent) => void;
		onMouseDown?: (event: MouseEvent) => void;
		onMouseUp?: (event: MouseEvent) => void;
		onMouseEnter?: (event: MouseEvent) => void;
		onMouseLeave?: (event: MouseEvent) => void;
	} {
		return {
			...this.normalizeGestureContract(contract),
			onClick: contract.onClick,
			onDblClick: contract.onDblClick,
			onContextMenu: contract.onContextMenu,
			onMouseDown: contract.onMouseDown,
			onMouseUp: contract.onMouseUp,
			onMouseEnter: contract.onMouseEnter,
			onMouseLeave: contract.onMouseLeave
		};
	}

	/**
	 * Нормализует drag контракт
	 */
	static normalizeDragContract(contract: Partial<DragContract>): DragContract {
		return {
			...this.normalizeGestureContract(contract),
			draggable: contract.draggable ?? true,
			dropzone: contract.dropzone ?? false,
			dragData: contract.dragData,
			onDragStart: contract.onDragStart,
			onDrag: contract.onDrag,
			onDragEnd: contract.onDragEnd,
			onDragEnter: contract.onDragEnter,
			onDragLeave: contract.onDragLeave,
			onDragOver: contract.onDragOver,
			onDrop: contract.onDrop
		};
	}

	/**
	 * Проверяет, активен ли жест
	 */
	static isGestureActive(contract: GestureContract): boolean {
		return !contract.disabled;
	}

	/**
	 * Создаёт данные о клике
	 */
	static createClickData(event: MouseEvent) {
		return {
			x: event.clientX,
			y: event.clientY,
			target: event.target,
			currentTarget: event.currentTarget,
			timestamp: Date.now(),
			button: event.button,
			buttons: event.buttons,
			altKey: event.altKey,
			ctrlKey: event.ctrlKey,
			metaKey: event.metaKey,
			shiftKey: event.shiftKey
		};
	}

	/**
	 * Создаёт данные о drag событии
	 */
	static createDragData(event: DragEvent) {
		return {
			x: event.clientX,
			y: event.clientY,
			target: event.target,
			dataTransfer: event.dataTransfer,
			timestamp: Date.now()
		};
	}
}
