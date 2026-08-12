import type { HTMLAttributes } from 'svelte/elements';
import type { SlotThemeBorder } from '$stylist/theme/interface/slot/theme-border';
import type { SlotTypography } from '$stylist/theme/interface/slot/typography';
import type { Snippet } from 'svelte';
import type { TokenSize } from '$stylist/theme/type/alias/size';
import type { TokenPin } from '$stylist/geo/type/alias/pin';
import type { TokenShape } from '$stylist/layout/type/alias/shape';
import type { SlotCoordinates } from '$stylist/geo/interface/slot/coordinates';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
export interface RecipeMapMarker
	extends ComputeIntersectAll<[((HTMLAttributes<HTMLDivElement> & SlotThemeBorder & SlotTypography & {
coordinates: SlotCoordinates;
	title?: string;
	description?: string;
	snippet?: Snippet;
	type?: TokenPin;
	color?: string;
	size?: TokenSize;
	showPopup?: boolean;
	popupContent?: Snippet;
	pinStyle?: TokenShape;
	rating?: number;
	contactInfo?: ({
phone?: string;
	email?: string;
	website?: string;
	hours?: string;
});
	distance?: string;
	selected?: boolean;
	onMarkerClick?: (coordinates: SlotCoordinates) => void;
	onInfoClick?: (coordinates: SlotCoordinates) => void;
	onNavigateClick?: (coordinates: SlotCoordinates) => void;
	class?: string;
	iconClass?: string;
	popupClass?: string;
	contentClass?: string;
}))]> {
	class?: string;
}
