/** AREA: STYLIST CODER MODEL -> AUTO-GENERATED */
import type { HTMLAttributes } from 'svelte/elements';
import type { TableSchema } from '$stylist/table/type/schema/table';

export interface SlotDataTable<T extends Record<string, unknown>>
	extends HTMLAttributes<HTMLDivElement> {
	data: T[];
	schema: TableSchema<T>;
	striped?: boolean;
	hoverable?: boolean;
	maxHeight?: string;
	onRowClick?: (row: T) => void;
}
