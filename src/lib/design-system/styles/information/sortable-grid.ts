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

export const SortableGridStyleManager: SortableGridStyleManagerInterface = {
	getContainerClass: (_variant, _size, disabled, className = '') =>
		[
			'sortable-grid',
			disabled ? 'opacity-[var(--opacity-50)] pointer-events-none' : '',
			className
		]
			.filter(Boolean)
			.join(' '),
	getGridClass: (gridClass, gridColsClass, gapClass) =>
		['grid', gridColsClass, gapClass, gridClass].filter(Boolean).join(' '),
	getItemClass: (_variant, _size, isDragging, _draggedItem, className = '') =>
		[
			'group relative rounded-lg border border-[var(--color-border-primary)] bg-[var(--color-background-primary)] transition-shadow',
			isDragging ? 'cursor-grabbing' : 'cursor-grab',
			className
		]
			.filter(Boolean)
			.join(' '),
	getItemDraggingClass: () => 'opacity-[var(--opacity-50)] shadow-lg',
	getItemDragOverClass: () => 'ring-2 ring-[var(--color-primary-500)]',
	getItemContentClass: () => 'flex items-start gap-3 p-4',
	getItemTitleClass: () => 'text-sm font-medium text-[var(--color-text-primary)]',
	getItemContentTextClass: () => 'mt-1 text-sm text-[var(--color-text-secondary)]',
	getGripIconClass: () => 'mt-0.5 h-4 w-4 shrink-0 text-[var(--color-text-tertiary)]'
};
