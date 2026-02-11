import { cn } from '../utils/classnames';

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

export const getTableClasses = (className = '') => cn(...TABLE_CLASSES.table, className);
export const getTableCaptionClasses = (className = '') => cn(...TABLE_CLASSES.caption, className);
export const getTableHeaderClasses = (className = '') => cn(...TABLE_CLASSES.header, className);
export const getTableBodyClasses = (className = '') => cn(...TABLE_CLASSES.body, className);
export const getTableRowClasses = (striped = false, active = false, className = '') =>
	cn(
		...(striped ? TABLE_CLASSES.row.striped : TABLE_CLASSES.row.normal),
		active && TABLE_CLASSES.row.active,
		className
	);
export const getTableCellClasses = (
	variant: 'header' | 'data' = 'data',
	align: keyof typeof TABLE_ALIGNMENT_CLASSES = 'left',
	className = ''
) =>
	cn(
		...TABLE_CLASSES.cell.base,
		...(variant === 'header' ? TABLE_CLASSES.cell.header : TABLE_CLASSES.cell.data),
		...TABLE_ALIGNMENT_CLASSES[align],
		className
	);
