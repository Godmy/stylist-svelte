export type StructWbdExportOption = {
	id: 'csv' | 'json' | 'pdf' | 'xlsx';
	label: string;
	description?: string;
	disabled?: boolean;
};
