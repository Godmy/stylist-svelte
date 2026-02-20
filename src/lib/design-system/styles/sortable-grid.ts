import {
	SORTABLE_GRID_CONTAINER_BASE_CLASSES,
	SORTABLE_GRID_SIZE_CLASSES,
	SORTABLE_GRID_DISABLED_CLASSES,
	SORTABLE_GRID_GRID_BASE_CLASSES,
	SORTABLE_GRID_GRID_COLS_CLASSES,
	SORTABLE_GRID_GAP_CLASSES,
	SORTABLE_GRID_ITEM_BASE_CLASSES,
	SORTABLE_GRID_ITEM_HOVER_CLASSES,
	SORTABLE_GRID_ITEM_DRAGGING_CLASSES,
	SORTABLE_GRID_ITEM_DRAG_OVER_CLASSES,
	SORTABLE_GRID_ITEM_CONTENT_BASE_CLASSES,
	SORTABLE_GRID_ITEM_CONTENT_VARIANT_CLASSES,
	SORTABLE_GRID_ITEM_TITLE_CLASSES,
	SORTABLE_GRID_ITEM_CONTENT_TEXT_CLASSES,
	SORTABLE_GRID_GRIP_ICON_CLASSES,
	DEFAULT_SORTABLE_GRID_SIZE,
	DEFAULT_SORTABLE_GRID_VARIANT
} from '../classes/sortable-grid';
import { cn } from '../utils/cn';

export interface SortableGridStyleManagerInterface {
	getContainerClass: (variant: string, size: string, disabled: boolean, className?: string) => string;
	getGridClass: (gridClass: string, gridColsClass: string, gapClass: string) => string;
	getItemClass: (variant: string, size: string, isDragging: boolean, draggedItem: any, className?: string) => string;
	getItemDraggingClass: () => string;
	getItemDragOverClass: () => string;
	getItemContentClass: (variant: string) => string;
	getItemTitleClass: () => string;
	getItemContentTextClass: () => string;
	getGripIconClass: () => string;
}

export class SortableGridStyleManager implements SortableGridStyleManagerInterface {
	static getContainerClass(variant: string, size: string, disabled: boolean, className?: string): string {
		const sizeClasses = SORTABLE_GRID_SIZE_CLASSES[size as keyof typeof SORTABLE_GRID_SIZE_CLASSES] || SORTABLE_GRID_SIZE_CLASSES[DEFAULT_SORTABLE_GRID_SIZE];
		const stateClasses = disabled ? SORTABLE_GRID_DISABLED_CLASSES : '';
		return cn(SORTABLE_GRID_CONTAINER_BASE_CLASSES, sizeClasses, stateClasses, className);
	}

	static getGridClass(gridClass: string, gridColsClass: string, gapClass: string): string {
		return cn(SORTABLE_GRID_GRID_BASE_CLASSES, gridClass, gridColsClass, gapClass);
	}

	static getItemClass(variant: string, size: string, isDragging: boolean, draggedItem: any, className?: string): string {
		const variantClasses = SORTABLE_GRID_ITEM_CONTENT_VARIANT_CLASSES[variant as keyof typeof SORTABLE_GRID_ITEM_CONTENT_VARIANT_CLASSES] || SORTABLE_GRID_ITEM_CONTENT_VARIANT_CLASSES[DEFAULT_SORTABLE_GRID_VARIANT];
		const draggingClasses = isDragging ? SORTABLE_GRID_ITEM_DRAGGING_CLASSES : '';
		return cn(SORTABLE_GRID_ITEM_BASE_CLASSES, variantClasses, draggingClasses, SORTABLE_GRID_ITEM_HOVER_CLASSES, className);
	}

	static getItemDraggingClass(): string {
		return SORTABLE_GRID_ITEM_DRAGGING_CLASSES;
	}

	static getItemDragOverClass(): string {
		return SORTABLE_GRID_ITEM_DRAG_OVER_CLASSES;
	}

	static getItemContentClass(variant: string): string {
		return cn(SORTABLE_GRID_ITEM_CONTENT_BASE_CLASSES, SORTABLE_GRID_ITEM_CONTENT_VARIANT_CLASSES[variant as keyof typeof SORTABLE_GRID_ITEM_CONTENT_VARIANT_CLASSES] || SORTABLE_GRID_ITEM_CONTENT_VARIANT_CLASSES[DEFAULT_SORTABLE_GRID_VARIANT]);
	}

	static getItemTitleClass(): string {
		return SORTABLE_GRID_ITEM_TITLE_CLASSES;
	}

	static getItemContentTextClass(): string {
		return SORTABLE_GRID_ITEM_CONTENT_TEXT_CLASSES;
	}

	static getGripIconClass(): string {
		return SORTABLE_GRID_GRIP_ICON_CLASSES;
	}

	// Instance methods for interface implementation
	getContainerClass(variant: string, size: string, disabled: boolean, className?: string): string {
		return SortableGridStyleManager.getContainerClass(variant, size, disabled, className);
	}

	getGridClass(gridClass: string, gridColsClass: string, gapClass: string): string {
		return SortableGridStyleManager.getGridClass(gridClass, gridColsClass, gapClass);
	}

	getItemClass(variant: string, size: string, isDragging: boolean, draggedItem: any, className?: string): string {
		return SortableGridStyleManager.getItemClass(variant, size, isDragging, draggedItem, className);
	}

	getItemDraggingClass(): string {
		return SortableGridStyleManager.getItemDraggingClass();
	}

	getItemDragOverClass(): string {
		return SortableGridStyleManager.getItemDragOverClass();
	}

	getItemContentClass(variant: string): string {
		return SortableGridStyleManager.getItemContentClass(variant);
	}

	getItemTitleClass(): string {
		return SortableGridStyleManager.getItemTitleClass();
	}

	getItemContentTextClass(): string {
		return SortableGridStyleManager.getItemContentTextClass();
	}

	getGripIconClass(): string {
		return SortableGridStyleManager.getGripIconClass();
	}
}