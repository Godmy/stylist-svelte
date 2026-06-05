import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import type { SlotGeoJSONViewer as IGeoJSONViewerProps } from '$stylist/geo/interface/slot/geo-json-viewer';

export class GeoJSONViewerStyleManager {
	static getHostClasses(props: IGeoJSONViewerProps): string {
		return mergeClassNames('c-geo-jsonviewer', props.class);
	}

	static getMapContainerClasses(props: IGeoJSONViewerProps): string {
		return mergeClassNames('c-geo-jsonviewer__map', props.mapClass);
	}

	static getMapContainerStyles(): string {
		return '';
	}

	static getLayerControlItemClasses(): string {
		return 'c-geo-jsonviewer__layer-item';
	}

	static getLayerControlItemStyles(): string {
		return '';
	}

	static getLayerVisibilityCheckboxClasses(): string {
		return 'c-geo-jsonviewer__layer-checkbox';
	}

	static getLayerVisibilityCheckboxStyles(): string {
		return 'accent-color: var(--color-primary-600);';
	}

	static getLayerOpacitySliderClasses(): string {
		return 'c-geo-jsonviewer__layer-slider';
	}

	static getFileUploadButtonClasses(): string {
		return 'c-geo-jsonviewer__upload-btn';
	}

	static getFileUploadButtonStyles(): string {
		return '';
	}

	static getFileUploadButtonHoverStyles(): string {
		return '';
	}

	static getLayersPanelClasses(): string {
		return 'c-geo-jsonviewer__layers-panel';
	}

	static getLayersPanelStyles(): string {
		return '';
	}

	static getFeatureInfoPanelClasses(): string {
		return 'c-geo-jsonviewer__feature-panel';
	}

	static getFeatureInfoPanelStyles(): string {
		return '';
	}

	static getMapControlButtonClasses(): string {
		return 'c-geo-jsonviewer__control-btn';
	}

	static getSvgClasses(): string {
		return 'c-geo-jsonviewer__svg';
	}

	static getGeometryElementClasses(): string {
		return 'c-geo-jsonviewer__geometry';
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
