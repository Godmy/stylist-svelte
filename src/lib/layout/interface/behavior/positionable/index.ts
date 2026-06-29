import type { LayoutGravity } from '$stylist/layout/type/alias/item-layout-gravity';
import type { LayoutLevel } from '$stylist/layout/type/alias/item-layout-level';

export interface BehaviorPositionable {
	layoutLevel?: LayoutLevel;
	layoutGravity?: LayoutGravity;
	layoutAnchor?: string;
}

