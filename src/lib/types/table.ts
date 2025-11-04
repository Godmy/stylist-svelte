/**
 * Table-related types
 */

export type SortDirection = 'asc' | 'desc';

export interface Column<T = unknown> {
	key: keyof T | string;
	header: string;
	sortable?: boolean;
	filterable?: boolean;
	width?: string;
	align?: 'left' | 'center' | 'right';
	render?: (item: T) => string | number;
}

export interface TableColumn<T = unknown> extends Column<T> {
	visible?: boolean;
}
