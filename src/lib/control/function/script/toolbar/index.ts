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

export function toolbarHandleZoomIn(onZoomIn?: () => void): void {
  onZoomIn?.();
}

export function toolbarHandleZoomOut(onZoomOut?: () => void): void {
  onZoomOut?.();
}

export function toolbarHandleFitView(onFitView?: () => void): void {
  onFitView?.();
}

export function toolbarHandleResetView(onResetView?: () => void): void {
  onResetView?.();
}

export function toolbarHandleExport(format: ToolbarExportFormat, onExportImage?: (format: ToolbarExportFormat) => void): void {
  onExportImage?.(format);
}

export function toolbarHandleLegendToggle(isVisible: boolean, onToggle?: () => void): void {
  onToggle?.();
}

export function toolbarHandleSearchToggle(isVisible: boolean, onToggle?: () => void): void {
  onToggle?.();
}

export default toolbarHandleZoomIn;
