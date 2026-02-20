/**
 * Shared Canvas CSS classes
 */

export const SHARED_CANVAS_CONTAINER_BASE_CLASSES = 'c-shared-canvas border border-[--color-border-default] rounded-lg overflow-hidden bg-[--color-background-primary]';

export const SHARED_CANVAS_SIZE_CLASSES = {
	sm: 'text-sm',
	md: 'text-base',
	lg: 'text-lg'
} as const;

export const SHARED_CANVAS_TOOLBAR_CLASSES = 'flex items-center gap-2 p-3 border-b border-[--color-border-default] bg-[--color-surface]';
export const SHARED_CANVAS_CANVAS_CLASSES = 'relative w-full h-[500px] bg-[--color-background-primary]';
export const SHARED_CANVAS_USER_PANEL_CLASSES = 'flex items-center gap-2 p-2 border-t border-[--color-border-default]';
export const SHARED_CANVAS_USER_ITEM_CLASSES = 'flex items-center gap-1 px-2 py-1 rounded hover:bg-[--color-surface-hover]';

export const SHARED_CANVAS_TOOL_BUTTON_BASE_CLASSES = 'p-2 rounded transition-colors';
export const SHARED_CANVAS_TOOL_BUTTON_ACTIVE_CLASSES = 'bg-[--color-primary-500] text-[--color-text-inverse]';
export const SHARED_CANVAS_TOOL_BUTTON_INACTIVE_CLASSES = 'hover:bg-[--color-surface-hover]';

export const SHARED_CANVAS_ACTION_BUTTON_CLASSES = 'px-3 py-1.5 text-sm rounded-md bg-[--color-primary-500] text-[--color-text-inverse] hover:bg-[--color-primary-600] transition-colors';

export const DEFAULT_SHARED_CANVAS_SIZE: keyof typeof SHARED_CANVAS_SIZE_CLASSES = 'md';
