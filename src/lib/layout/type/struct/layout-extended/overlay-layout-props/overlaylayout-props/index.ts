import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';
import type { LayoutHTMLAttributes } from '$stylist/layout/type/struct/item';
import type { OverlayLayoutAlign } from '$stylist/layout/type/alias/overlay-layout-align';
import type { OverlayLayerProps } from '$stylist/layout/type/struct/layout-extended/overlay-layout-props/overlaylayer-props';

export type OverlayLayoutProps = LayoutHTMLAttributes<HTMLDivElement> & {
	class?: string;
	/** Базовый контент (всегда снизу) */
	base: Snippet;
	/** Один или несколько оверлей-слоёв поверх базового */
	overlays?: OverlayLayerProps[];
	/** Дефолтное позиционирование оверлея если overlays не задан */
	overlay?: Snippet;
	overlayAlign?: OverlayLayoutAlign;
	overlayZIndex?: number;
	overlayPointerEvents?: boolean;
};
