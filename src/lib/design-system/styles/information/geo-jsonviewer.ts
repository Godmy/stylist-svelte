import type { IGeoJSONViewerProps } from '$stylist/design-system/props/information/geo-jsonviewer';

export class GeoJSONViewerStyleManager {
  static getHostClasses(props: IGeoJSONViewerProps): string {
    const baseClasses = 'geojson-viewer flex flex-col h-full';
    const customClass = props.class || '';

    return `${baseClasses} ${customClass}`.trim();
  }

  static getMapContainerClasses(props: IGeoJSONViewerProps): string {
    const baseClasses = 'flex-1 relative rounded-lg overflow-hidden border shadow-sm';
    const customClass = props.mapClass || '';

    return `${baseClasses} ${customClass}`.trim();
  }

  static getMapContainerStyles(): string {
    return 'border-color: var(--color-border-default); background-color: var(--color-background-default);';
  }

  static getLayerControlItemClasses(): string {
    return 'flex items-center justify-between p-2 rounded border';
  }

  static getLayerControlItemStyles(): string {
    return 'background-color: var(--color-background-default); border-color: var(--color-border-default);';
  }

  static getLayerVisibilityCheckboxClasses(): string {
    return 'h-4 w-4 rounded';
  }

  static getLayerVisibilityCheckboxStyles(): string {
    return 'accent-color: var(--color-primary-600);';
  }

  static getLayerOpacitySliderClasses(): string {
    return 'w-16';
  }

  static getFileUploadButtonClasses(): string {
    return 'relative cursor-pointer rounded-md text-sm font-medium';
  }

  static getFileUploadButtonStyles(): string {
    return 'background-color: var(--color-background-default); color: var(--color-text-default);';
  }

  static getFileUploadButtonHoverStyles(): string {
    return 'background-color: var(--color-background-hover);';
  }

  static getLayersPanelClasses(): string {
    return 'mb-4 p-4 rounded-lg';
  }

  static getLayersPanelStyles(): string {
    return 'background-color: var(--color-background-subtle);';
  }

  static getFeatureInfoPanelClasses(): string {
    return 'mt-4 p-4 rounded-lg shadow';
  }

  static getFeatureInfoPanelStyles(): string {
    return 'background-color: var(--color-background-default); border: 1px solid var(--color-border-default);';
  }

  static getMapControlButtonClasses(): string {
    return '';
  }

  static getSvgClasses(): string {
    return 'overflow-visible';
  }

  static getGeometryElementClasses(): string {
    return 'cursor-pointer transition-opacity';
  }

  static getGeometryElementHoverStyles(): string {
    return 'opacity: 0.9;';
  }

  static getPointStyles(color: string, opacity: number): string {
    return `fill: ${color}; fill-opacity: ${opacity};`;
  }

  static getLineStringStyles(color: string, opacity: number): string {
    return `stroke: ${color}; stroke-opacity: ${opacity}; stroke-width: 2;`;
  }

  static getPolygonStyles(color: string, opacity: number): string {
    return `fill: ${color}; fill-opacity: ${opacity * 0.5}; stroke: ${color}; stroke-opacity: ${opacity}; stroke-width: 1;`;
  }
}


