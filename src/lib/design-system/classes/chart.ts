export const PIE_CHART_CONTAINER_BASE_CLASSES = 'relative inline-flex items-center justify-center';
export const PIE_CHART_SVG_BASE_CLASSES = 'block';
export const COLOR_SWATCH_BASE_CLASSES =
	'inline-block rounded border border-[--color-border-secondary]';

export const NPM_BADGE_BASE_CLASSES =
	'npm-badge inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium';

export const NPM_BADGE_TYPE_CLASSES: Record<string, string> = {
	version:
		'bg-[var(--color-primary-100)] text-[var(--color-primary-800)] dark:bg-[var(--color-primary-900)]/30 dark:text-[var(--color-primary-300)]',
	downloads:
		'bg-[var(--color-success-100)] text-[var(--color-success-800)] dark:bg-[var(--color-success-900)]/30 dark:text-[var(--color-success-300)]',
	license:
		'bg-[var(--color-secondary-100)] text-[var(--color-secondary-800)] dark:bg-[var(--color-secondary-900)]/30 dark:text-[var(--color-secondary-300)]',
	size:
		'bg-[var(--color-warning-100)] text-[var(--color-warning-800)] dark:bg-[var(--color-warning-900)]/30 dark:text-[var(--color-warning-300)]',
	custom:
		'bg-[var(--color-neutral-100)] text-[var(--color-neutral-800)] dark:bg-[var(--color-neutral-700)] dark:text-[var(--color-neutral-300)]'
};

export const NPM_BADGE_LINK_BASE_CLASSES = 'inline-flex items-center gap-1 hover:opacity-80';
