// ExportPanel props interface
export interface SlotExportPanel {
	class?: string;
	onexport?: (
		event: CustomEvent<{
			format: 'png' | 'jpeg' | 'svg' | 'pdf';
			includeLegend: boolean;
			includeFilters: boolean;
		}>
	) => void;
	onExport?: (detail: {
		format: 'png' | 'jpeg' | 'svg' | 'pdf';
		includeLegend: boolean;
		includeFilters: boolean;
	}) => void;
}
