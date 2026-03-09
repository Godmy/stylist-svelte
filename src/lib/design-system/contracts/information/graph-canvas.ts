import type { Snippet } from 'svelte';
import type { HtmlAttributesBase } from './common';
import type { MarkerType } from '$stylist/design-system/tokens/architecture/markers';
import type { PanMode } from '$stylist/design-system/tokens/architecture/pan-modes';

/**
 * РЎРІРѕР№СЃС‚РІР° С…РѕР»СЃС‚Р° РіСЂР°С„Р°
 */
export interface GraphCanvasProps extends HtmlAttributesBase<HTMLDivElement> {
	/** РЁРёСЂРёРЅР° С…РѕР»СЃС‚Р° */
	width?: number;
	/** Р’С‹СЃРѕС‚Р° С…РѕР»СЃС‚Р° */
	height?: number;
	/** РњР°СЃС€С‚Р°Р± (zoom) */
	zoom?: number;
	/** РњРёРЅРёРјР°Р»СЊРЅС‹Р№ РјР°СЃС€С‚Р°Р± */
	minZoom?: number;
	/** РњР°РєСЃРёРјР°Р»СЊРЅС‹Р№ РјР°СЃС€С‚Р°Р± */
	maxZoom?: number;
	/** РЎРјРµС‰РµРЅРёРµ РїРѕ X */
	offsetX?: number;
	/** РЎРјРµС‰РµРЅРёРµ РїРѕ Y */
	offsetY?: number;
	/** Р Р°Р·РјРµСЂ СЏС‡РµР№РєРё СЃРµС‚РєРё */
	gridSize?: number;
	/** Р РµР¶РёРј РѕС‚РѕР±СЂР°Р¶РµРЅРёСЏ СЃРµС‚РєРё */
	gridMode?: MarkerType;
	/** Р¦РІРµС‚ СЃРµС‚РєРё */
	gridColor?: string;
	/** Р¦РІРµС‚ С„РѕРЅР° */
	backgroundColor?: string;
	/** Р РµР¶РёРј РїР°РЅРѕСЂР°РјРёСЂРѕРІР°РЅРёСЏ */
	panMode?: PanMode;
	/** Р’РєР»СЋС‡РµРЅРѕ Р»Рё РїРµСЂРµС‚Р°СЃРєРёРІР°РЅРёРµ */
	panEnabled?: boolean;
	/** Р’РєР»СЋС‡РµРЅРѕ Р»Рё РјР°СЃС€С‚Р°Р±РёСЂРѕРІР°РЅРёРµ РєРѕР»РµСЃРѕРј */
	zoomEnabled?: boolean;
	/** Р’РєР»СЋС‡РµРЅРѕ Р»Рё РІС‹РґРµР»РµРЅРёРµ СѓР·Р»РѕРІ */
	selectionEnabled?: boolean;
	/** Р’РєР»СЋС‡РµРЅР° Р»Рё СЃРµС‚РєР° */
	snapToGrid?: boolean;
	/** РЎРёР»Р° РїСЂРёС‚СЏР¶РµРЅРёСЏ Рє СЃРµС‚РєРµ */
	snapThreshold?: number;
	/** РљР»Р°СЃСЃ РґР»СЏ РѕР±Р»Р°СЃС‚Рё РєРѕРЅС‚РµРЅС‚Р° */
	contentClass?: string;
	/** РљР»Р°СЃСЃ РґР»СЏ СЃРµС‚РєРё */
	gridClass?: string;
	/** РћР±СЂР°Р±РѕС‚С‡РёРє РёР·РјРµРЅРµРЅРёСЏ РјР°СЃС€С‚Р°Р±Р° */
	onzoomchange?: (zoom: number) => void;
	/** РћР±СЂР°Р±РѕС‚С‡РёРє РёР·РјРµРЅРµРЅРёСЏ СЃРјРµС‰РµРЅРёСЏ */
	onoffsetchange?: (offset: { x: number; y: number }) => void;
	/** РћР±СЂР°Р±РѕС‚С‡РёРє РЅР°С‡Р°Р»Р° РїР°РЅРѕСЂР°РјРёСЂРѕРІР°РЅРёСЏ */
	onpanstart?: (event: MouseEvent) => void;
	/** РћР±СЂР°Р±РѕС‚С‡РёРє РїР°РЅРѕСЂР°РјРёСЂРѕРІР°РЅРёСЏ */
	onpan?: (event: MouseEvent) => void;
	/** РћР±СЂР°Р±РѕС‚С‡РёРє Р·Р°РІРµСЂС€РµРЅРёСЏ РїР°РЅРѕСЂР°РјРёСЂРѕРІР°РЅРёСЏ */
	onpanend?: (event: MouseEvent) => void;
	/** РћР±СЂР°Р±РѕС‚С‡РёРє РєР»РёРєР° РїРѕ С…РѕР»СЃС‚Сѓ */
	oncanvasclick?: (event: MouseEvent) => void;
	/** РћР±СЂР°Р±РѕС‚С‡РёРє РґРІРѕР№РЅРѕРіРѕ РєР»РёРєР° */
	ondblclick?: (event: MouseEvent) => void;
	/** РћР±СЂР°Р±РѕС‚С‡РёРє РєРѕРЅС‚РµРєСЃС‚РЅРѕРіРѕ РјРµРЅСЋ */
	oncontextmenu?: (event: MouseEvent) => void;
	/** Р”РѕС‡РµСЂРЅРёР№ РєРѕРЅС‚РµРЅС‚ (СѓР·Р»С‹, СЃРІСЏР·Рё) */
	children?: Snippet;
}

/**
 * РџРѕР·РёС†РёСЏ РІ 2D РїСЂРѕСЃС‚СЂР°РЅСЃС‚РІРµ
 */
export interface GraphCanvasPosition {
	x: number;
	y: number;
}

/**
 * РћР±Р»Р°СЃС‚СЊ РІРёРґРёРјРѕСЃС‚Рё С…РѕР»СЃС‚Р°
 */
export interface GraphCanvasViewport {
	position: GraphCanvasPosition;
	zoom: number;
	width: number;
	height: number;
}







