import type { HTMLAttributes } from 'svelte/elements';
import type { LayoutGravity } from '$stylist/layout/type/alias/item-layout-gravity';
import type { LayoutLevel } from '$stylist/layout/type/alias/item-layout-level';
import type { LayoutShape } from '$stylist/layout/type/alias/item-layout-shape';
export interface LayoutHTMLAttributes<T extends HTMLElement = HTMLDivElement>
	extends HTMLAttributes<T> {
	layoutLevel?: LayoutLevel;
	layoutShape?: LayoutShape;
	layoutGravity?: LayoutGravity;
	layoutMargin?: string;
	layoutPadding?: string;
	layoutElevation?: number;
	layoutGutter?: string;
	layoutAnchor?: string;
}
