
export const TABLE_CLASSES = {
	table: ['min-w-full', 'divide-y', 'divide-[var(--color-border-secondary)]'] as const,
	caption: [
		'py-3',
		'px-6',
		'text-left',
		'text-sm',
		'font-medium',
		'text-[var(--color-text-primary)]',
		'bg-[var(--color-background-secondary)]'
	] as const,
	body: [
		'bg-[var(--color-background-primary)]',
		'divide-y',
		'divide-[var(--color-border-secondary)]'
	] as const,
	header: ['bg-[var(--color-background-secondary)]'] as const,
	row: {
		striped: [
			'odd:bg-[var(--color-background-primary)]',
			'even:bg-[var(--color-background-secondary)]'
		] as const,
		normal: ['bg-[var(--color-background-primary)]'] as const,
		active: 'bg-[var(--color-primary-50)]'
	},
	cell: {
		base: ['px-6', 'py-4'] as const,
		header: [
			'px-6',
			'py-3',
			'text-left',
			'text-xs',
			'font-medium',
			'text-[var(--color-text-secondary)]',
			'uppercase',
			'tracking-wider'
		] as const,
		data: ['whitespace-nowrap'] as const
	}
} as const;

export const TABLE_ALIGNMENT_CLASSES: Record<string, string[]> = {
	left: ['text-left'],
	center: ['text-center'],
	right: ['text-right']
};

export const NPM_BADGE_BASE_CLASSES =
	'npm-badge inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium';

export const NPM_BADGE_TYPE_CLASSES: Record<string, string> = {
	version:
		'bg-[var(--color-primary-100)] text-[var(--color-primary-800)] dark:bg-[var(--color-primary-900)]/30 dark:text-[var(--color-primary-300)]',
	downloads:
		'bg-[var(--color-success-100)] text-[var(--color-success-800)] dark:bg-[var(--color-success-900)]/30 dark:text-[var(--color-success-300)]',
	license:
		'bg-[var(--color-secondary-100)] text-[var(--color-secondary-800)] dark:bg-[var(--color-secondary-900)]/30 dark:text-[var(--color-secondary-300)]',
	size: 'bg-[var(--color-warning-100)] text-[var(--color-warning-800)] dark:bg-[var(--color-warning-900)]/30 dark:text-[var(--color-warning-300)]',
	custom:
		'bg-[var(--color-neutral-100)] text-[var(--color-neutral-800)] dark:bg-[var(--color-neutral-700)] dark:text-[var(--color-neutral-300)]'
};
