/** AREA: STYLIST CODER MODEL -> AUTO-GENERATED */
import type { InformationHTMLAttributes } from '$stylist/information/type/struct/information-html-attributes';
import type { TokenMapType } from '$stylist/geo/type/enum/map-type/token-map-type';
import type { SlotMapMarkerItem } from '$stylist/geo/interface/slot/map-marker-item';
import type { SlotMapWithMarkersView } from '$stylist/geo/interface/slot/map-with-markers-view';

/**
 * SlotMapWithMarkers — свойства карты с маркерами.
 *
 * LEGO-состав:
 *   SlotLabel            (information) — markers (titles, descriptions)
 *   SlotIcon             (information) — markers (icons)
 *   BehaviorPositionable         (architecture) — lat, lng, center
 *   IZoomable             (architecture) — zoom, minZoom, maxZoom
 *   BehaviorClickable            (interaction) — onMarkerClick, onMapClick
 *   BehaviorSizable              (architecture) — marker size
 *   ThemeAttributes       (theme)       — mapType
 */
export interface SlotMapWithMarkers
	extends Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'> {
	markers?: SlotMapMarkerItem[];
	class?: string;
	mapClass?: string;
	markerClass?: string;
	showTooltip?: boolean;
	showSearch?: boolean;
	showZoomControls?: boolean;
	showCurrentLocation?: boolean;
	showScale?: boolean;
	showCompass?: boolean;
	showResetView?: boolean;
	initialView?: SlotMapWithMarkersView;
	maxZoom?: number;
	minZoom?: number;
	/** Тип карты */
	mapType?: TokenMapType;
	onMarkerClick?: (marker: SlotMapMarkerItem) => void;
	onMapClick?: (coordinates: { lat: number; lng: number }) => void;
	onMapMove?: (view: SlotMapWithMarkersView) => void;
	onMapZoom?: (zoom: number) => void;
}
