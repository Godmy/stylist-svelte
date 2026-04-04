import type { Snippet } from 'svelte';

// ExportPanel props interface
export interface IExportPanelProps {
  class?: string;
  children?: Snippet;
  onexport?: (event: CustomEvent<{ format: 'png' | 'jpeg' | 'svg' | 'pdf'; includeLegend: boolean; includeFilters: boolean }>) => void;
}
