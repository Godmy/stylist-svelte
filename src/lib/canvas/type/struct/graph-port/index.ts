import type { TokenPropertyType } from '$stylist/information/type/enum/property-type';

export type GraphPortDataTypeColor = Record<TokenPropertyType, string>;

export interface GraphPortStateColor {
	default: string;
	connected: string;
	hovered: string;
	active: string;
	error: string;
	selected: string;
}
