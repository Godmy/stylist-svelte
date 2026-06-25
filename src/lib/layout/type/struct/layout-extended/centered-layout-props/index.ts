import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';
import type { LayoutHTMLAttributes } from '$stylist/layout/type/struct/item';
import type { CenteredLayoutAxis } from '$stylist/token/type/alias/centered-layout-axis';

export type CenteredLayoutProps = LayoutHTMLAttributes<HTMLDivElement> & {
	class?: string;
	children: Snippet;
	/** РћСЃСЊ С†РµРЅС‚СЂРёСЂРѕРІР°РЅРёСЏ */
	axis?: CenteredLayoutAxis;
	/** Р Р°СЃС‚СЏРіРёРІР°РµС‚ wrapper РЅР° РІСЃСЋ РІС‹СЃРѕС‚Сѓ */
	fillHeight?: boolean;
	/** Р Р°СЃС‚СЏРіРёРІР°РµС‚ wrapper РЅР° РІСЃСЋ С€РёСЂРёРЅСѓ */
	fillWidth?: boolean;
	/** РћРіСЂР°РЅРёС‡РёРІР°РµС‚ С€РёСЂРёРЅСѓ РІРЅСѓС‚СЂРµРЅРЅРµРіРѕ РєРѕРЅС‚РµРЅС‚Р° (CSS value, РЅР°РїСЂ. '640px', '40rem') */
	maxWidth?: string;
};

