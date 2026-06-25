import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';
import type { LayoutHTMLAttributes } from '$stylist/layout/type/struct/item';
import type { ContainerQueryType } from '$stylist/token/type/alias/container-query-type';

export type ContainerQueryProps = LayoutHTMLAttributes<HTMLDivElement> & {
	class?: string;
	children: Snippet;
	/**
	 * РўРёРї РєРѕРЅС‚РµР№РЅРµСЂР°:
	 * - `inline-size` вЂ” Р·Р°РїСЂРѕСЃС‹ РїРѕ С€РёСЂРёРЅРµ (РЅР°РёР±РѕР»РµРµ С‡Р°СЃС‚С‹Р№ СЃР»СѓС‡Р°Р№)
	 * - `size` вЂ” Р·Р°РїСЂРѕСЃС‹ РїРѕ С€РёСЂРёРЅРµ Рё РІС‹СЃРѕС‚Рµ
	 * - `normal` вЂ” РѕС‚РєР»СЋС‡Р°РµС‚ Р·Р°РїСЂРѕСЃС‹ РїРѕ СЂР°Р·РјРµСЂСѓ, С‚РѕР»СЊРєРѕ style containment
	 */
	containerType?: ContainerQueryType;
	/**
	 * РРјСЏ РєРѕРЅС‚РµР№РЅРµСЂР° РґР»СЏ РёРјРµРЅРѕРІР°РЅРЅС‹С… Р·Р°РїСЂРѕСЃРѕРІ `@container/name`.
	 * РџРѕР·РІРѕР»СЏРµС‚ РІР»РѕР¶РµРЅРЅС‹Рј РєРѕРјРїРѕРЅРµРЅС‚Р°Рј СЏРІРЅРѕ С‚Р°СЂРіРµС‚РёСЂРѕРІР°С‚СЊ РєРѕРЅРєСЂРµС‚РЅС‹Р№ РєРѕРЅС‚РµР№РЅРµСЂ.
	 */
	containerName?: string;
};

