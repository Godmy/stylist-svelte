import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';

export interface TableRecord {
	[key: string]: unknown;
}

export interface TableWithFiltersProps extends InteractionHTMLAttributes<HTMLDivElement> {
	data: TableRecord[];
	columns: string[];
	class?: string;
}

export interface TableWithGroupingProps extends InteractionHTMLAttributes<HTMLDivElement> {
	data: TableRecord[];
	groupBy: string;
	class?: string;
}

export interface TableWithStripesProps extends InteractionHTMLAttributes<HTMLDivElement> {
	data: TableRecord[];
	columns: string[];
	class?: string;
}
