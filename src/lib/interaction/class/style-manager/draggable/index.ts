import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import type { DraggableStyleManagerOptions } from '$stylist/interaction/interface/slot/draggable-style-manager-options';

export class DraggableStyleManager {
	private static readonly BASE = 'transition-all duration-200 ease-in-out';
	private static readonly DRAGGING = 'scale-105 shadow-xl';
	private static readonly DROP_ZONE = 'ring-2 ring-primary-500 bg-primary-50';
	private static readonly DISABLED = 'opacity-50 cursor-not-allowed';
	private static readonly HANDLE = 'cursor-grab active:cursor-grabbing';

	/**
	 * Базовые классы для draggable элементов
	 */
	static getBaseClasses(className?: string): string {
		return mergeClassNames(this.BASE, className);
	}

	/**
	 * Классы для состояния перетаскивания
	 */
	static getDraggingClasses(): string {
		return this.DRAGGING;
	}

	/**
	 * Классы для drop зоны
	 */
	static getDropZoneClasses(): string {
		return this.DROP_ZONE;
	}

	/**
	 * Классы для handle иконки
	 */
	static getHandleClasses(): string {
		return this.HANDLE;
	}

	/**
	 * Полные классы для draggable компонента
	 */
	static getClasses(options: DraggableStyleManagerOptions = {}): string {
		const {
			draggable = false,
			dropzone = false,
			isDragging = false,
			isOverDropZone = false,
			disabled = false,
			showHandle = false,
			class: className = ''
		} = options;

		if (disabled) {
			return mergeClassNames(this.BASE, this.DISABLED, className);
		}

		if (isDragging) {
			return mergeClassNames(this.BASE, this.DRAGGING, className);
		}

		if (dropzone && isOverDropZone) {
			return mergeClassNames(this.BASE, this.DROP_ZONE, className);
		}

		if (draggable && showHandle) {
			return mergeClassNames(this.BASE, this.HANDLE, className);
		}

		return mergeClassNames(this.BASE, draggable ? 'cursor-grab active:cursor-grabbing' : '', className);
	}
}
