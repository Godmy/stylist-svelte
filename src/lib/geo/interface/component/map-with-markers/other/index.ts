/** AREA: STYLIST CODER MODEL -> AUTO-GENERATED */
import type { InformationHTMLAttributes } from '$stylist/information/type/struct';
import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { TokenMapType } from '$stylist/geo/type/enum/map-type';

export interface IMapMarkerItem {
	id: string;
	lat: number;
	lng: number;
	title?: string;
	description?: string;
	color?: string;
	/** Размер маркера */
	size?: TokenSize;
	icon?: string;
}

export interface IMapWithMarkersView {
	center: { lat: number; lng: number };
	zoom: number;
}

/**
 * IMapWithMarkersProps — свойства карты с маркерами.
 *
 * LEGO-состав:
 *   ILabelSlot            (information) — markers (titles, descriptions)
 *   IIconSlot             (information) — markers (icons)
 *   IPositionable         (architecture) — lat, lng, center
 *   IZoomable             (architecture) — zoom, minZoom, maxZoom
 *   IClickable            (interaction) — onMarkerClick, onMapClick
 *   ISizable              (architecture) — marker size
 *   ThemeAttributes       (theme)       — mapType
 */
export interface IMapWithMarkersProps extends Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'> {
	markers?: IMapMarkerItem[];
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
	initialView?: IMapWithMarkersView;
	maxZoom?: number;
	minZoom?: number;
	/** Тип карты */
	mapType?: TokenMapType;
	onMarkerClick?: (marker: IMapMarkerItem) => void;
	onMapClick?: (coordinates: { lat: number; lng: number }) => void;
	onMapMove?: (view: IMapWithMarkersView) => void;
	onMapZoom?: (zoom: number) => void;
}
