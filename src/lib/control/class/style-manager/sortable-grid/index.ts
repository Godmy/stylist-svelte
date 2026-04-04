export class SortableGridStyleManager {
	static getContainerClass(
		_variant: string,
		_size: string,
		disabled: boolean,
		className = ''
	): string {
		return [
			'sortable-grid',
			disabled ? 'opacity-[var(--opacity-50)] pointer-events-none' : '',
			className
		]
			.filter(Boolean)
			.join(' ');
	}

	static getGridClass(gridClass: string, gridColsClass: string, gapClass: string): string {
		return ['grid', gridColsClass, gapClass, gridClass].filter(Boolean).join(' ');
	}

	static getItemClass(
		_variant: string,
		_size: string,
		isDragging: boolean,
		_draggedItem: unknown,
		className = ''
	): string {
		return [
			'group relative rounded-lg border border-[var(--color-border-primary)] bg-[var(--color-background-primary)] transition-shadow',
			isDragging ? 'cursor-grabbing' : 'cursor-grab',
			className
		]
			.filter(Boolean)
			.join(' ');
	}

	static getItemDraggingClass(): string {
		return 'opacity-[var(--opacity-50)] shadow-lg';
	}

	static getItemDragOverClass(): string {
		return 'ring-2 ring-[var(--color-primary-500)]';
	}

	static getItemContentClass(_variant?: string): string {
		return 'flex items-start gap-3 p-4';
	}

	static getItemTitleClass(): string {
		return 'text-sm font-medium text-[var(--color-text-primary)]';
	}

	static getItemContentTextClass(): string {
		return 'mt-1 text-sm text-[var(--color-text-secondary)]';
	}

	static getGripIconClass(): string {
		return 'mt-0.5 h-4 w-4 shrink-0 text-[var(--color-text-tertiary)]';
	}
}
