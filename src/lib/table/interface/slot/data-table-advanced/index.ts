import type { SlotInteraction } from '$stylist/interaction/interface/slot/interaction';
import type { HTMLAttributes } from 'svelte/elements';
import type { SlotAdvancedColumnDefinition } from '$stylist/table/interface/slot/advanced-column-definition';

export interface SlotDataTableAdvanced<T extends Record<string, unknown>>
	extends HTMLAttributes<HTMLDivElement>, SlotInteraction {
	data: T[];
	columns: SlotAdvancedColumnDefinition<T>[];
	title?: string;
	searchPlaceholder?: string;
	showSearch?: boolean;
	showFilters?: boolean;
	showExport?: boolean;
	pageSizeOptions?: number[];
	defaultPageSize?: number;
	class?: string;
	onExport?: () => void;
	onRowClick?: (item: T) => void;
	loading?: boolean;
}
