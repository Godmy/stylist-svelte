import { cn } from '../utils/classnames';

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

export const getPieChartContainerClass = (className = '') =>
	cn('relative inline-flex items-center justify-center', className);
export const getPieChartContainerClasses = getPieChartContainerClass;
export const getPieChartSvgClass = (className = '') => cn('block', className);
export const getPieChartSvgClasses = getPieChartSvgClass;
export const getColorSwatchClasses = (className = '') =>
	cn('inline-block rounded border border-[--color-border-secondary]', className);
export const getColorSwatchStyle = (color: string, size = 16) =>
	`background-color: ${color}; width: ${size}px; height: ${size}px;`;

export const getNpmBadgeClasses = (
	type: keyof typeof NPM_BADGE_TYPE_CLASSES = 'version',
	className = ''
) => cn(NPM_BADGE_BASE_CLASSES, NPM_BADGE_TYPE_CLASSES[type], className);
export const getNpmBadgeLabel = (
	type: 'version' | 'downloads' | 'license' = 'version',
	label?: string
) => label ?? (type === 'version' ? 'version' : type);
export const getNpmBadgeLinkClasses = (className = '') =>
	cn('inline-flex items-center gap-1 hover:opacity-80', className);
