import type { HTMLAttributes } from 'svelte/elements';

export interface TableRecord {
	[key: string]: unknown;
}

export interface TableWithFiltersProps extends HTMLAttributes<HTMLDivElement> {
	data: TableRecord[];
	columns: string[];
	class?: string;
}

export interface TableWithGroupingProps extends HTMLAttributes<HTMLDivElement> {
	data: TableRecord[];
	groupBy: string;
	class?: string;
}

export interface TableWithStripesProps extends HTMLAttributes<HTMLDivElement> {
	data: TableRecord[];
	columns: string[];
	class?: string;
}
