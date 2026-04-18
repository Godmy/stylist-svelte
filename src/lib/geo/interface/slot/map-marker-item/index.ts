/** AREA: STYLIST CODER MODEL -> AUTO-GENERATED */
import type { InformationHTMLAttributes } from '$stylist/information/type/struct';
import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { TokenMapType } from '$stylist/geo/type/enum/map-type';

export interface SlotMapMarkerItem {
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
