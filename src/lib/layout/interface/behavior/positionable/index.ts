import type { LayoutGravity } from '$stylist/layout/type/struct/item-layout-gravity';
import type { LayoutLevel } from '$stylist/layout/type/struct/item-layout-level';

export interface BehaviorPositionable {
	layoutLevel?: LayoutLevel;
	layoutGravity?: LayoutGravity;
	layoutAnchor?: string;
}
