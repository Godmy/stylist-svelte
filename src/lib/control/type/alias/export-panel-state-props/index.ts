type ExportFormat = string;
export type ExportPanelStateProps = {
  dispatch?: (type: 'export', detail: { format: ExportFormat; includeLegend: boolean; includeFilters: boolean }) => void;
};
