export interface SlotColumnManager {
	columns: ({
key: string;
	header: string;
	visible: boolean;
	sortable?: boolean;
	filterable?: boolean;
	width?: string;
})[];
	onColumnsChange?: (columns: ({
key: string;
	header: string;
	visible: boolean;
	sortable?: boolean;
	filterable?: boolean;
	width?: string;
})[]) => void;
	class?: string;
}
