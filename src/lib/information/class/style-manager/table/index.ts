import { cn } from '$stylist/layout/function/script/merge-class-names';

const TABLE_CLASSES = {
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

const TABLE_ALIGNMENT_CLASSES: Record<string, string[]> = {
	left: ['text-left'],
	center: ['text-center'],
	right: ['text-right']
};





export class TableStyleManager {
	static getTableClasses(className = ''): string {
		return cn(...TABLE_CLASSES.table, className);
	}

	static getCaptionClasses(className = ''): string {
		return cn(...TABLE_CLASSES.caption, className);
	}

	static getHeaderClasses(className = ''): string {
		return cn(...TABLE_CLASSES.header, className);
	}

	static getBodyClasses(className = ''): string {
		return cn(...TABLE_CLASSES.body, className);
	}

	static getRowClasses(striped = false, active = false, className = ''): string {
		return cn(
			...(striped ? TABLE_CLASSES.row.striped : TABLE_CLASSES.row.normal),
			active && TABLE_CLASSES.row.active,
			className
		);
	}

	static getCellClasses(
		variant: 'header' | 'data' = 'data',
		align: 'left' | 'center' | 'right' = 'left',
		className = ''
	): string {
		return cn(
			...TABLE_CLASSES.cell.base,
			...(variant === 'header' ? TABLE_CLASSES.cell.header : TABLE_CLASSES.cell.data),
			...(TABLE_ALIGNMENT_CLASSES[align] ?? TABLE_ALIGNMENT_CLASSES.left),
			className
		);
	}
}



