import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';
import type { LayoutHTMLAttributes } from '$stylist/layout/type/struct/item';
import type { OverlayLayoutAlign } from '$stylist/layout/type/enum/overlay-layout-align';
import type { OverlayLayerProps } from '$stylist/layout/type/struct/layout-extended/overlay-layout-props/overlaylayer-props';

export type OverlayLayoutProps = LayoutHTMLAttributes<HTMLDivElement> & {
	class?: string;
	/** Р‘Р°Р·РѕРІС‹Р№ РєРѕРЅС‚РµРЅС‚ (РІСЃРµРіРґР° СЃРЅРёР·Сѓ) */
	base: Snippet;
	/** РћРґРёРЅ РёР»Рё РЅРµСЃРєРѕР»СЊРєРѕ РѕРІРµСЂР»РµР№-СЃР»РѕС‘РІ РїРѕРІРµСЂС… Р±Р°Р·РѕРІРѕРіРѕ */
	overlays?: OverlayLayerProps[];
	/** Р”РµС„РѕР»С‚РЅРѕРµ РїРѕР·РёС†РёРѕРЅРёСЂРѕРІР°РЅРёРµ РѕРІРµСЂР»РµСЏ РµСЃР»Рё overlays РЅРµ Р·Р°РґР°РЅ */
	overlay?: Snippet;
	overlayAlign?: OverlayLayoutAlign;
	overlayZIndex?: number;
	overlayPointerEvents?: boolean;
};
