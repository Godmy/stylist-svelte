export type ExportFormat = 'png' | 'jpeg' | 'svg' | 'pdf';

export type ExportPanelStateProps = {
  dispatch?: (type: 'export', detail: { format: ExportFormat; includeLegend: boolean; includeFilters: boolean }) => void;
};

export function createExportPanelState(props: ExportPanelStateProps) {
  let exportFormat = $state<ExportFormat>('png');
  let includeLegend = $state(true);
  let includeFilters = $state(true);

  function selectFormat(format: ExportFormat) {
    exportFormat = format;
  }

  function handleFormatKeydown(event: KeyboardEvent, format: ExportFormat) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      exportFormat = format;
    }
  }

  function handleExport() {
    props.dispatch?.('export', {
      format: exportFormat,
      includeLegend,
      includeFilters
    });
  }

  return {
    get exportFormat() {
      return exportFormat;
    },
    get includeLegend() {
      return includeLegend;
    },
    get includeFilters() {
      return includeFilters;
    },
    set includeLegend(value: boolean) {
      includeLegend = value;
    },
    set includeFilters(value: boolean) {
      includeFilters = value;
    },
    selectFormat,
    handleFormatKeydown,
    handleExport
  };
}

export default createExportPanelState;
