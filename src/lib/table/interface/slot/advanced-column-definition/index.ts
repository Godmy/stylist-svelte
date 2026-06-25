export interface SlotAdvancedColumnDefinition<T extends Record<string, unknown>> {
	key: keyof T;
	header: string;
	sortable?: boolean;
	filterable?: boolean;
	renderCell?: (item: T) => unknown;
	width?: string;
}
