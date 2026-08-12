import type { Snippet } from 'svelte';
import type { LayoutHTMLAttributes } from '$stylist/layout/interface/behavior/layout-html-attributes';
import type { OverlayLayoutAlign } from '$stylist/layout/type/alias/overlay-layout-align';
export interface OverlayLayoutProps extends LayoutHTMLAttributes<HTMLDivElement> {
	class?: string;
	base: Snippet;
	overlays?: {
		content: Snippet;
		align?: OverlayLayoutAlign;
		zIndex?: number;
		pointerEvents?: boolean;
	}[];
	overlay?: Snippet;
	overlayAlign?: OverlayLayoutAlign;
	overlayZIndex?: number;
	overlayPointerEvents?: boolean;
}
