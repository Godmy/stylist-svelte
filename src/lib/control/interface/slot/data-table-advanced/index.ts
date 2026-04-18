import type { HTMLAttributes } from 'svelte/elements';
import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { SlotAdvancedColumnDefinition } from '$stylist/control/interface/slot/advanced-column-definition';

export interface SlotDataTableAdvanced<T extends Record<string, unknown>> extends InteractionHTMLAttributes<HTMLDivElement> {
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
