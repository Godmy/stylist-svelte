import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';
import type { LayoutHTMLAttributes } from '$stylist/layout/type/struct/item';
import type { LayoutShape } from '$stylist/token/type/alias/item-layout-shape';
import type { TokenSize } from '$stylist/layout/type/enum/size';

export type CardProps = LayoutHTMLAttributes<HTMLDivElement> & {
	class?: string;
	children?: Snippet;
	/** РЎР»РѕС‚ РґР»СЏ РјРµРґРёР°-РєРѕРЅС‚РµРЅС‚Р° (РёР·РѕР±СЂР°Р¶РµРЅРёРµ, РІРёРґРµРѕ) */
	media?: Snippet;
	/** РЎР»РѕС‚ РґР»СЏ С€Р°РїРєРё РєР°СЂС‚РѕС‡РєРё */
	header?: Snippet;
	/** РЎР»РѕС‚ РґР»СЏ С„СѓС‚РµСЂР° РєР°СЂС‚РѕС‡РєРё */
	footer?: Snippet;
	/** Р¤РѕСЂРјР° СѓРіР»РѕРІ */
	shape?: LayoutShape;
	/** Р Р°Р·РјРµСЂ (СѓРїСЂР°РІР»СЏРµС‚ padding) */
	size?: TokenSize;
	/** РЈСЂРѕРІРµРЅСЊ С‚РµРЅРё (0вЂ“6) */
	elevation?: number;
	/** РђРєС‚РёРІРёСЂСѓРµС‚ hover/focus СЃС‚РёР»Рё РёРЅС‚РµСЂР°РєС‚РёРІРЅРѕР№ РєР°СЂС‚РѕС‡РєРё */
	clickable?: boolean;
	/** Р Р°СЃС‚СЏРіРёРІР°РµС‚ РЅР° РІСЃСЋ С€РёСЂРёРЅСѓ */
	fullWidth?: boolean;
};

