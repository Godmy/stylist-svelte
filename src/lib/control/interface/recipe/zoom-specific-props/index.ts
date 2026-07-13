import type { SlotChildren } from '$stylist/theme/interface/slot/children';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { Snippet } from 'svelte';

export interface ZoomSpecificProps extends ComputeIntersectAll<[SlotChildren]> {
	type?: 'controls' | 'toolbar';

	zoom?: number;

	minZoom?: number;

	maxZoom?: number;

	zoomStep?: number;

	onZoom?: (zoom: number) => void;

	onZoomIn?: () => void;

	onZoomOut?: () => void;

	onFit?: () => void;
}
