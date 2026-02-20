/**
 * Graph Node Card CSS classes
 */

export const GRAPH_NODE_CARD_CONTAINER_BASE_CLASSES = 'border rounded-lg overflow-hidden transition-all duration-200 bg-[--color-background-primary] border-[--color-border-default]';

export const GRAPH_NODE_CARD_SIZE_CLASSES = {
	sm: 'text-sm',
	md: 'text-base',
	lg: 'text-lg'
} as const;

export const GRAPH_NODE_CARD_SELECTED_CLASSES = 'ring-2 ring-[--color-primary-500]';
export const GRAPH_NODE_CARD_HIGHLIGHT_CLASSES = 'ring-2 ring-[--color-warning-500]';

export const GRAPH_NODE_CARD_HEADER_CLASSES = 'flex items-center p-3 border-b border-[--color-border-default] cursor-pointer hover:bg-[--color-surface-hover]';
export const GRAPH_NODE_CARD_TITLE_CLASSES = 'font-medium text-[--color-text-primary]';

export const GRAPH_NODE_CARD_TYPE_COLORS: Record<string, string> = {
	object: 'bg-[--color-surface-accent] text-[--color-primary-600]',
	interface: 'bg-[--color-success-100] text-[--color-success-600]',
	union: 'bg-[--color-danger-100] text-[--color-danger-600]',
	enum: 'bg-[--color-accent-100] text-[--color-accent-600]',
	scalar: 'bg-[--color-warning-100] text-[--color-warning-600]',
	input: 'bg-[--color-info-100] text-[--color-info-600]',
	default: 'bg-[--color-surface-muted] text-[--color-text-secondary]'
};

export const GRAPH_NODE_CARD_TYPE_CLASSES = 'text-xs uppercase px-2 py-1 rounded-full ml-auto';

export const GRAPH_NODE_CARD_CONTENT_CLASSES = 'p-3';
export const GRAPH_NODE_CARD_DESCRIPTION_CLASSES = 'text-sm text-[--color-text-secondary] mt-2';
export const GRAPH_NODE_CARD_FIELDS_LIST_CLASSES = 'space-y-2 mt-3';
export const GRAPH_NODE_CARD_FIELD_ITEM_CLASSES = 'flex items-center gap-2';
export const GRAPH_NODE_CARD_FIELD_NAME_CLASSES = 'font-medium text-[--color-text-primary]';
export const GRAPH_NODE_CARD_FIELD_TYPE_CLASSES = 'text-xs text-[--color-text-secondary]';
export const GRAPH_NODE_CARD_FIELD_REQUIRED_CLASSES = 'text-[--color-danger-500]';
export const GRAPH_NODE_CARD_ACTIONS_CLASSES = 'flex gap-2 mt-3 pt-3 border-t border-[--color-border-default]';

export const DEFAULT_GRAPH_NODE_CARD_SIZE: keyof typeof GRAPH_NODE_CARD_SIZE_CLASSES = 'md';
