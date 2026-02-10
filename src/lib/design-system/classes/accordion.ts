/**
 * Accordion classes.
 * Used by:
 * - interaction/controls/accordion/accordion.ts
 */

export const ACCORDION_BASE_CLASSES = {
	complex: 'w-full space-y-2',
	header: 'flex w-full items-center justify-between text-left font-medium',
	item: 'border border-[var(--color-border-secondary)] rounded-lg overflow-hidden',
	panel: 'overflow-hidden transition-all duration-200 ease-in-out',
	chevron: 'text-[var(--color-text-secondary)] transition-transform duration-200',
	headerState: {
		open: 'bg-[var(--color-background-secondary)]',
		closed: 'bg-[var(--color-background-primary)] hover:bg-[var(--color-background-secondary)]'
	}
} as const;
