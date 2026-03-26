import type { TokenPlace } from '$stylist/architecture/type/token/place/index';

export interface PlacePoint {
	x: number;
	y: number;
	z?: number;
	space?: TokenPlace;
}
