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
