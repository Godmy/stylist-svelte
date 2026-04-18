export type ToolbarExportFormat = 'png' | 'jpeg' | 'svg';

export interface ToolbarHandlersProps {
	onZoomIn?: () => void;
	onZoomOut?: () => void;
	onFitView?: () => void;
	onResetView?: () => void;
	onExportImage?: (format: ToolbarExportFormat) => void;
	onToggleLegend?: () => void;
	onToggleSearch?: () => void;
	isLegendVisible: boolean;
	isSearchVisible: boolean;
	handleToggleLegend: () => void;
	handleToggleSearch: () => void;
}
