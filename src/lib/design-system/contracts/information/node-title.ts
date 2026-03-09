import type { Snippet } from 'svelte';
import type { HtmlAttributesBase } from './common';
import type { ComponentSize } from '$stylist/design-system/tokens/architecture/component-size';
import type { NodeTitleVariant } from '$stylist/design-system/tokens/information/node-title';

/**
 * Р’Р°СЂРёР°РЅС‚С‹ Р·Р°РіРѕР»РѕРІРєР° СѓР·Р»Р°
 */
/**
 * РЎРІРѕР№СЃС‚РІР° Р·Р°РіРѕР»РѕРІРєР° СѓР·Р»Р° РіСЂР°С„Р°
 */
export interface NodeTitleProps extends Omit<HtmlAttributesBase<HTMLHeadingElement>, 'onchange'> {
	/** РўРµРєСЃС‚ Р·Р°РіРѕР»РѕРІРєР° */
	title: string;
	/** Р’Р°СЂРёР°РЅС‚ РѕС‚РѕР±СЂР°Р¶РµРЅРёСЏ */
	variant?: NodeTitleVariant;
	/** Р Р°Р·РјРµСЂ Р·Р°РіРѕР»РѕРІРєР° */
	size?: ComponentSize;
	/** Р¦РІРµС‚ Р·Р°РіРѕР»РѕРІРєР° */
	color?: string;
	/** РРєРѕРЅРєР° СЃР»РµРІР° РѕС‚ Р·Р°РіРѕР»РѕРІРєР° */
	icon?: string | Snippet;
	/** РРєРѕРЅРєР° СЃРїСЂР°РІР° РѕС‚ Р·Р°РіРѕР»РѕРІРєР° */
	trailingIcon?: string | Snippet;
	/** Р’С‹РґРµР»РµРЅРЅРѕРµ СЃРѕСЃС‚РѕСЏРЅРёРµ */
	selected?: boolean;
	/** Р РµРґР°РєС‚РёСЂСѓРµРјС‹Р№ */
	editable?: boolean;
	/** РћР±СЂР°Р±РѕС‚С‡РёРє РёР·РјРµРЅРµРЅРёСЏ С‚РµРєСЃС‚Р° */
	onchange?: (value: string) => void;
	/** РћР±СЂР°Р±РѕС‚С‡РёРє РґРІРѕР№РЅРѕРіРѕ РєР»РёРєР° */
	ondblclick?: (event: MouseEvent) => void;
	/** Р”РѕС‡РµСЂРЅРёР№ РєРѕРЅС‚РµРЅС‚ */
	children?: Snippet;
}


