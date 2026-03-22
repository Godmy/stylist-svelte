import type { Snippet } from 'svelte';
import type { HtmlAttributesBase } from '$stylist/design-system/contracts/information/common';
import type { TokenSize } from '$stylist/design-system/tokens/architecture/size';
import type { TokenOrientation } from '$stylist/design-system/tokens/architecture/ownership/orientation';

/**
 * Р­Р»РµРјРµРЅС‚ РїР°РЅРµР»Рё РёРЅСЃС‚СЂСѓРјРµРЅС‚РѕРІ
 */
export interface GraphToolbarItem {
	/** РЈРЅРёРєР°Р»СЊРЅС‹Р№ РёРґРµРЅС‚РёС„РёРєР°С‚РѕСЂ */
	id: string;
	/** РўРёРї СЌР»РµРјРµРЅС‚Р° */
	type: 'button' | 'separator' | 'select' | 'input' | 'custom';
	/** РРєРѕРЅРєР° */
	icon?: string;
	/** РњРµС‚РєР° */
	label?: string;
	/** РџРѕРґСЃРєР°Р·РєР° */
	tooltip?: string;
	/** Р’С‹РєР»СЋС‡РµРЅ Р»Рё */
	disabled?: boolean;
	/** РђРєС‚РёРІРµРЅ Р»Рё */
	active?: boolean;
	/** Р—РЅР°С‡РµРЅРёРµ РґР»СЏ input/select */
	value?: unknown;
	/** РћРїС†РёРё РґР»СЏ select */
	options?: readonly string[];
	/** РћР±СЂР°Р±РѕС‚С‡РёРє РєР»РёРєР° */
	onclick?: () => void;
}

/**
 * РЎРІРѕР№СЃС‚РІР° РїР°РЅРµР»Рё РёРЅСЃС‚СЂСѓРјРµРЅС‚РѕРІ РіСЂР°С„Р°
 */
export interface GraphToolbarProps extends HtmlAttributesBase<HTMLDivElement> {
	/** РЈРЅРёРєР°Р»СЊРЅС‹Р№ РёРґРµРЅС‚РёС„РёРєР°С‚РѕСЂ */
	id: string;
	/** Р­Р»РµРјРµРЅС‚С‹ РїР°РЅРµР»Рё */
	items?: readonly GraphToolbarItem[];
	/** Р Р°Р·РјРµСЂ РєРѕРјРїРѕРЅРµРЅС‚Р° */
	size?: TokenSize;
	/** РћСЂРёРµРЅС‚Р°С†РёСЏ */
	orientation?: TokenOrientation;
	/** РљРѕРјРїР°РєС‚РЅС‹Р№ СЂРµР¶РёРј */
	compact?: boolean;
	/** РџРѕРєР°Р·С‹РІР°С‚СЊ РїРѕРґСЃРєР°Р·РєРё */
	showTooltips?: boolean;
	/** РћР±СЂР°Р±РѕС‚С‡РёРє РєР»РёРєР° РїРѕ СЌР»РµРјРµРЅС‚Сѓ */
	onItemClick?: (itemId: string) => void;
	/** РћР±СЂР°Р±РѕС‚С‡РёРє РёР·РјРµРЅРµРЅРёСЏ Р·РЅР°С‡РµРЅРёСЏ */
	onValueChange?: (itemId: string, value: unknown) => void;
	/** Р”РѕС‡РµСЂРЅРёР№ РєРѕРЅС‚РµРЅС‚ */
	children?: Snippet;
}





