import type { LayoutGravity } from '$stylist/token/type/alias/item-layout-gravity';
import type { LayoutLevel } from '$stylist/token/type/alias/item-layout-level';

export interface BehaviorPositionable {
	layoutLevel?: LayoutLevel;
	layoutGravity?: LayoutGravity;
	layoutAnchor?: string;
}

