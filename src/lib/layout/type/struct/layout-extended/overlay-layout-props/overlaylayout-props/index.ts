import type { Snippet } from 'svelte';
import type { ArchitectureHTMLAttributes } from '$stylist/layout/type/struct/item-architecture-html-attributes';
import type { OverlayLayoutAlign } from '$stylist/layout/type/enum/overlay-layout-align';
import type { OverlayLayerProps } from '../overlaylayer-props';

export type OverlayLayoutProps = ArchitectureHTMLAttributes<HTMLDivElement> & {
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
