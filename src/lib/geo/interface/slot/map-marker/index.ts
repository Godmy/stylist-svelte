import type { HTMLAttributes } from 'svelte/elements';
import type { BehaviorBorderToken } from '$stylist/layout/interface/behavior/border-token';
import type { BehaviorTypography } from '$stylist/typography/interface/behavior/typography';
import type { Snippet } from 'svelte';
import type { TokenSize } from '$stylist/layout/type/alias/size';
import type { TokenPin } from '$stylist/geo/type/alias/pin';
import type { TokenShape } from '$stylist/layout/type/alias/shape';
import type { SlotCoordinates } from '$stylist/geo/interface/slot/coordinates';
import type { SlotContactInfo } from '$stylist/geo/interface/slot/contact-info';

export interface SlotMapMarker extends HTMLAttributes<HTMLDivElement>, BehaviorBorderToken, BehaviorTypography {
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
	contactInfo?: SlotContactInfo;
	distance?: string;
	selected?: boolean;
	onMarkerClick?: (coordinates: SlotCoordinates) => void;
	onInfoClick?: (coordinates: SlotCoordinates) => void;
	onNavigateClick?: (coordinates: SlotCoordinates) => void;
	class?: string;
	iconClass?: string;
	popupClass?: string;
	contentClass?: string;
}
