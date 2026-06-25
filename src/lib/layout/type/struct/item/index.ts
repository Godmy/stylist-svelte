import type { HTMLAttributes } from 'svelte/elements';
import type { LayoutLevel } from '$stylist/token/type/alias/item-layout-level';
import type { LayoutShape } from '$stylist/token/type/alias/item-layout-shape';
import type { LayoutGravity } from '$stylist/token/type/alias/item-layout-gravity';

export type LayoutHTMLAttributes<T extends HTMLElement = HTMLDivElement> = HTMLAttributes<T> & {
	layoutLevel?: LayoutLevel;
	layoutShape?: LayoutShape;
	layoutGravity?: LayoutGravity;
	layoutMargin?: string;
	layoutPadding?: string;
	layoutElevation?: number;
	layoutGutter?: string;
	layoutAnchor?: string;
};

