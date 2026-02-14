import type { Orientation } from '../tokens/layout';

export const SEPARATOR_CLASSES: Record<Orientation, string> = {
	horizontal: 'w-full border-t border-[var(--color-border-secondary)]',
	vertical: 'h-full border-l border-[var(--color-border-secondary)]'
};
export const DEFAULT_SEPARATOR_DECORATIVE = true;
export const DEFAULT_SEPARATOR_ORIENTATION: keyof typeof SEPARATOR_CLASSES = 'horizontal';

export const SYNTAX_HIGHLIGHTED_CODE_CONTAINER_BASE_CLASSES = 'rounded-md';
export const SYNTAX_HIGHLIGHTED_CODE_CLASSES = 'font-mono text-sm';
