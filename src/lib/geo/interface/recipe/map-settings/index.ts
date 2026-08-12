import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
export interface RecipeMapSettings extends ComputeIntersectAll<[]> {
	center: {
lat: number;
	lng: number;
};
	zoom: number;
	minZoom?: number;
	maxZoom?: number;
	showSearch?: boolean;
	showControls?: boolean;
	height?: string;
	width?: string;
}
