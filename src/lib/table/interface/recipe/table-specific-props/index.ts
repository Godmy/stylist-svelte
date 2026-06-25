import type { SlotChildren } from '$stylist/layout/interface/slot/children';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { Snippet } from 'svelte';

export interface TableSpecificProps extends ComputeIntersectAll<[SlotChildren]> {
	type?: 'extended' | 'controls' | 'header' | 'data';

	columns?: Array<{ key: string; label: string; sortable?: boolean; icon?: string }>;

	data?: Array<Record<string, any>>;

	sortBy?: string;
	sortDirection?: 'asc' | 'desc' | 'none';
	onSort?: (column: string, direction: 'asc' | 'desc') => void;

	pagination?: boolean;
	pageSize?: number;
	currentPage?: number;

	selectableRows?: boolean;
	multiSelect?: boolean;

}
