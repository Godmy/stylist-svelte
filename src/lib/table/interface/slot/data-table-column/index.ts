export interface SlotDataTableColumn<T extends Record<string, unknown>> {
	key: keyof T;
	title: string;
	sortable?: boolean;
	headerClass?: string;
	cellClass?: string;
	render?: (value: unknown, row: T) => string;
}
