import type { Snippet } from 'svelte';
import type { OverlayLayoutAlign } from '$stylist/layout/type/alias/overlay-layout-align';

export type OverlayLayerProps = {
	content: Snippet;
	align?: OverlayLayoutAlign;
	/** z-index слоя */
	zIndex?: number;
	/** Разрешает pointer events на слое */
	pointerEvents?: boolean;
};
