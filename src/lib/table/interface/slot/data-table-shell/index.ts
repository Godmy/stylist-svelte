/** AREA: STYLIST CODER MODEL -> AUTO-GENERATED */
import type { SlotInteraction } from '$stylist/interaction/interface/slot/interaction';
import type { HTMLAttributes } from 'svelte/elements';
import type { TableSchema } from '$stylist/table/type/schema/table';

export interface SlotDataTableShell<T extends Record<string, unknown>>
	extends HTMLAttributes<HTMLDivElement>,
		SlotInteraction {
	data: T[];
	schema: TableSchema<T>;
	title?: string;
	searchPlaceholder?: string;
	showSearch?: boolean;
	showColumnManager?: boolean;
	pageSizeOptions?: number[];
	defaultPageSize?: number;
	loading?: boolean;
	onExport?: () => void;
	onRowClick?: (item: T) => void;
}
