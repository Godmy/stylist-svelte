import type { LayoutGravity } from '$stylist/layout/type/struct/item-layout-gravity';
import type { LayoutLevel } from '$stylist/layout/type/struct/item-layout-level';

export interface IPositionable {
	layoutLevel?: LayoutLevel;
	layoutGravity?: LayoutGravity;
	layoutAnchor?: string;
}
