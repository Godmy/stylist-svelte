/**
 * Sortable Grid CSS classes
 */

export const SORTABLE_GRID_CONTAINER_BASE_CLASSES = 'c-sortable-grid';

export const SORTABLE_GRID_SIZE_CLASSES = {
	sm: 'text-sm',
	md: 'text-base',
	lg: 'text-lg'
} as const;

export const SORTABLE_GRID_DISABLED_CLASSES = 'opacity-50 cursor-not-allowed';

export const SORTABLE_GRID_GRID_BASE_CLASSES = 'grid';
export const SORTABLE_GRID_GRID_COLS_CLASSES = 'grid-cols-1';
export const SORTABLE_GRID_GAP_CLASSES = 'gap-4';

export const SORTABLE_GRID_ITEM_BASE_CLASSES = 'border rounded-lg p-4 bg-[--color-background-primary] transition-all duration-200 cursor-move';
export const SORTABLE_GRID_ITEM_HOVER_CLASSES = 'hover:shadow-md hover:border-[--color-primary-300]';
export const SORTABLE_GRID_ITEM_DRAGGING_CLASSES = 'opacity-50 ring-2 ring-[--color-primary-500] scale-105';
export const SORTABLE_GRID_ITEM_DRAG_OVER_CLASSES = 'border-[--color-primary-500] bg-[--color-primary-50]';

export const SORTABLE_GRID_ITEM_CONTENT_BASE_CLASSES = 'flex items-start gap-3';
export const SORTABLE_GRID_ITEM_CONTENT_VARIANT_CLASSES = {
	default: 'text-[--color-text-primary]',
	primary: 'text-[--color-primary-600]',
	secondary: 'text-[--color-secondary-600]'
} as const;

export const SORTABLE_GRID_ITEM_TITLE_CLASSES = 'font-medium text-[--color-text-primary]';
export const SORTABLE_GRID_ITEM_CONTENT_TEXT_CLASSES = 'text-sm text-[--color-text-secondary] mt-1';
export const SORTABLE_GRID_GRIP_ICON_CLASSES = 'text-[--color-text-secondary] cursor-move';

export const DEFAULT_SORTABLE_GRID_SIZE: keyof typeof SORTABLE_GRID_SIZE_CLASSES = 'md';
export const DEFAULT_SORTABLE_GRID_VARIANT: keyof typeof SORTABLE_GRID_ITEM_CONTENT_VARIANT_CLASSES = 'default';
