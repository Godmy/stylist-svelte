import type { Snippet } from 'svelte';
import type { HtmlAttributesBase } from '$stylist/design-system/contracts/information/common';
import type { GraphPortProps } from '$stylist/design-system/contracts/information/graph-port';
import type { TokenRelationship } from '$stylist/design-system/tokens/architecture/relationship';
import type { TokenSize } from '$stylist/design-system/tokens/architecture/size';

/**
 * РЎРІРѕР№СЃС‚РІР° РіСЂСѓРїРїС‹ РїРѕСЂС‚РѕРІ
 */
export interface PortGroupProps extends HtmlAttributesBase<HTMLDivElement> {
	/** РЈРЅРёРєР°Р»СЊРЅС‹Р№ РёРґРµРЅС‚РёС„РёРєР°С‚РѕСЂ РіСЂСѓРїРїС‹ */
	id: string;
	/** РќР°РїСЂР°РІР»РµРЅРёРµ РїРѕСЂС‚РѕРІ */
	direction: TokenRelationship;
	/** РџРѕСЂС‚С‹ */
	ports?: readonly GraphPortProps[];
	/** Р Р°Р·РјРµСЂ РїРѕСЂС‚РѕРІ */
	portSize?: TokenSize;
	/** РџРѕРєР°Р·С‹РІР°С‚СЊ РјРµС‚РєРё */
	showLabels?: boolean;
	/** РџРѕРєР°Р·С‹РІР°С‚СЊ РёРєРѕРЅРєРё С‚РёРїРѕРІ */
	showTypeIcons?: boolean;
	/** РљРѕРјРїР°РєС‚РЅС‹Р№ СЂРµР¶РёРј */
	compact?: boolean;
	/** Р Р°Р·РґРµР»РёС‚РµР»СЊ РјРµР¶РґСѓ РїРѕСЂС‚Р°РјРё */
	divider?: boolean;
	/** Р—Р°РіРѕР»РѕРІРѕРє РіСЂСѓРїРїС‹ */
	title?: string;
	/** РћР±СЂР°Р±РѕС‚С‡РёРє РєР»РёРєР° РїРѕ РїРѕСЂС‚Сѓ */
	onPortClick?: (portId: string, event: MouseEvent) => void;
	/** РћР±СЂР°Р±РѕС‚С‡РёРє РЅР°С‡Р°Р»Р° РїРѕРґРєР»СЋС‡РµРЅРёСЏ */
	onConnectionStart?: (port: GraphPortProps, event: MouseEvent) => void;
	/** РћР±СЂР°Р±РѕС‚С‡РёРє Р·Р°РІРµСЂС€РµРЅРёСЏ РїРѕРґРєР»СЋС‡РµРЅРёСЏ */
	onConnectionEnd?: (port: GraphPortProps, event: MouseEvent) => void;
	/** Р”РѕС‡РµСЂРЅРёР№ РєРѕРЅС‚РµРЅС‚ */
	children?: Snippet;
}






