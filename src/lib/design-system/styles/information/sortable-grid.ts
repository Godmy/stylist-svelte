import { cn } from '../../utils/cn/index';

const SORTABLE_GRID_SIZE_CLASSES = {
	sm: 'text-sm',
	md: 'text-base',
	lg: 'text-lg'
} as const;

const SORTABLE_GRID_ITEM_DRAGGING_CLASSES =
	'opacity-50 ring-2 ring-[--color-primary-500] scale-105';

const SORTABLE_GRID_ITEM_CONTENT_VARIANT_CLASSES = {
	default: 'text-[--color-text-primary]',
	primary: 'text-[--color-primary-600]',
	secondary: 'text-[--color-secondary-600]'
} as const;

const DEFAULT_SORTABLE_GRID_SIZE: keyof typeof SORTABLE_GRID_SIZE_CLASSES = 'md';
const DEFAULT_SORTABLE_GRID_VARIANT: keyof typeof SORTABLE_GRID_ITEM_CONTENT_VARIANT_CLASSES =
	'default';

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
		const stateClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';
		return cn('c-sortable-grid', sizeClasses, stateClasses, className);
	}

	static getGridClass(gridClass: string, gridColsClass: string, gapClass: string): string {
		return cn('grid', gridClass, gridColsClass, gapClass);
	}

	static getItemClass(variant: string, size: string, isDragging: boolean, draggedItem: any, className?: string): string {
		const variantClasses = SORTABLE_GRID_ITEM_CONTENT_VARIANT_CLASSES[variant as keyof typeof SORTABLE_GRID_ITEM_CONTENT_VARIANT_CLASSES] || SORTABLE_GRID_ITEM_CONTENT_VARIANT_CLASSES[DEFAULT_SORTABLE_GRID_VARIANT];
		const draggingClasses = isDragging ? SORTABLE_GRID_ITEM_DRAGGING_CLASSES : '';
		return cn('border rounded-lg p-4 bg-[--color-background-primary] transition-all duration-200 cursor-move', variantClasses, draggingClasses, 'hover:shadow-md hover:border-[--color-primary-300]', className);
	}

	static getItemDraggingClass(): string {
		return SORTABLE_GRID_ITEM_DRAGGING_CLASSES;
	}

	static getItemDragOverClass(): string {
		return 'border-[--color-primary-500] bg-[--color-primary-50]';
	}

	static getItemContentClass(variant: string): string {
		return cn('flex items-start gap-3', SORTABLE_GRID_ITEM_CONTENT_VARIANT_CLASSES[variant as keyof typeof SORTABLE_GRID_ITEM_CONTENT_VARIANT_CLASSES] || SORTABLE_GRID_ITEM_CONTENT_VARIANT_CLASSES[DEFAULT_SORTABLE_GRID_VARIANT]);
	}

	static getItemTitleClass(): string {
		return 'font-medium text-[--color-text-primary]';
	}

	static getItemContentTextClass(): string {
		return 'text-sm text-[--color-text-secondary] mt-1';
	}

	static getGripIconClass(): string {
		return 'text-[--color-text-secondary] cursor-move';
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
