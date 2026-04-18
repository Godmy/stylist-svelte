import type { InformationHTMLAttributes } from '$stylist/information/type/struct';
import type { Snippet } from 'svelte';
import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { TokenPin } from '$stylist/geo/type/enum/pin';
import type { TokenShape } from '$stylist/layout/type/enum/shape';

export interface SlotCoordinates {
	lat: number;
	lng: number;
}
