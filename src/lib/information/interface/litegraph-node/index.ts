import type { Snippet } from 'svelte';
import type { HtmlAttributesBase } from '$stylist/information/type/attribute/common';
import type { TokenRelationship } from '$stylist/architecture/type/token/relationship';
import type { TokenSize } from '$stylist/architecture/type/token/size';
import type { TokenInteration } from '$stylist/interaction/type/token/interaction';
import type { TokenSeverity } from '$stylist/interaction/type/token/sevetity';
import type { TokenPropertyType } from '$stylist/information/type/token/property-type';
import type { TokenNodeType } from '$stylist/architecture/type/token/node-type';
import type { SemanticZoomPresentation } from '$stylist/architecture/function/semantic-zoom/index';
/**
 * РџРѕСЂС‚ СѓР·Р»Р° РіСЂР°С„Р°
 */
export interface LiteGraphPort {
	/** РЈРЅРёРєР°Р»СЊРЅС‹Р№ РёРґРµРЅС‚РёС„РёРєР°С‚РѕСЂ РїРѕСЂС‚Р° */
	id: string;
	/** РќР°РїСЂР°РІР»РµРЅРёРµ */
	direction: TokenRelationship;
	/** РўРёРї РґР°РЅРЅС‹С… */
	dataType?: TokenPropertyType;
	/** РњРµС‚РєР° */
	label?: string;
	/** Р Р°Р·РјРµСЂ */
	size?: TokenSize;
	/** РџРѕРґРєР»СЋС‡С‘РЅ Р»Рё */
	connected?: boolean;
	/** Р¦РІРµС‚ */
	color?: string;
	/** CSS РєР»Р°СЃСЃ */
	class?: string;
}

/**
 * РЎРІРѕР№СЃС‚РІРѕ СѓР·Р»Р° РіСЂР°С„Р°
 */
export interface LiteGraphNodeProperty {
	/** РЈРЅРёРєР°Р»СЊРЅС‹Р№ РёРґРµРЅС‚РёС„РёРєР°С‚РѕСЂ СЃРІРѕР№СЃС‚РІР° */
	id: string;
	/** РРјСЏ СЃРІРѕР№СЃС‚РІР° */
	name: string;
	/** РўРёРї СЃРІРѕР№СЃС‚РІР° */
	type?: 'string' | 'number' | 'boolean' | 'enum' | 'color' | 'vector2' | 'vector3';
	/** Р—РЅР°С‡РµРЅРёРµ */
	value?: unknown;
	/** РњРµС‚РєР° */
	label?: string;
	/** РћРїРёСЃР°РЅРёРµ */
	description?: string;
	/** РћРїС†РёРё РґР»СЏ enum */
	options?: readonly string[];
}

/**
 * РЎРІРѕР№СЃС‚РІР° СѓР·Р»Р° РіСЂР°С„Р° LiteGraph
 */
export interface LiteGraphNodeProps extends HtmlAttributesBase<HTMLDivElement> {
	/** РЈРЅРёРєР°Р»СЊРЅС‹Р№ РёРґРµРЅС‚РёС„РёРєР°С‚РѕСЂ СѓР·Р»Р° */
	id: string;
	/** Р—Р°РіРѕР»РѕРІРѕРє СѓР·Р»Р° */
	title: string;
	/** РўРёРї СѓР·Р»Р° */
	type?: TokenNodeType;
	/** РЎРѕСЃС‚РѕСЏРЅРёРµ СѓР·Р»Р° */
	mode?: TokenSeverity;
	status?: TokenInteration;
	/** РџРѕР·РёС†РёСЏ X */
	x: number;
	/** РџРѕР·РёС†РёСЏ Y */
	y: number;
	/** РЁРёСЂРёРЅР° СѓР·Р»Р° */
	width?: number;
	/** РњРёРЅРёРјР°Р»СЊРЅР°СЏ С€РёСЂРёРЅР° */
	minWidth?: number;
	/** Р’С‹СЃРѕС‚Р° (Р°РІС‚Рѕ РёР»Рё С„РёРєСЃРёСЂРѕРІР°РЅРЅР°СЏ) */
	height?: number | 'auto';
	/** Р¦РІРµС‚ СѓР·Р»Р° */
	color?: string;
	/** Р¦РІРµС‚ Р·Р°РіРѕР»РѕРІРєР° */
	headerColor?: string;
	/** Р Р°Р·РјРµСЂ РєРѕРјРїРѕРЅРµРЅС‚Р° */
	size?: TokenSize;
	/** Р’С…РѕРґРЅС‹Рµ РїРѕСЂС‚С‹ */
	inputs?: readonly LiteGraphPort[];
	/** Р’С‹С…РѕРґРЅС‹Рµ РїРѕСЂС‚С‹ */
	outputs?: readonly LiteGraphPort[];
	/** РЎРІРѕР№СЃС‚РІР° СѓР·Р»Р° */
	properties?: readonly LiteGraphNodeProperty[];
	/** Р’С‹РґРµР»РµРЅ Р»Рё СѓР·РµР» */
	selected?: boolean;
	/** РњРѕР¶РЅРѕ Р»Рё РїРµСЂРµРјРµС‰Р°С‚СЊ */
	draggable?: boolean;
	/** РњРѕР¶РЅРѕ Р»Рё РІС‹РґРµР»СЏС‚СЊ */
	selectable?: boolean;
	/** РњРѕР¶РЅРѕ Р»Рё РёР·РјРµРЅСЏС‚СЊ СЂР°Р·РјРµСЂ */
	resizable?: boolean;
	/** РњРѕР¶РЅРѕ Р»Рё СѓРґР°Р»СЏС‚СЊ */
	deletable?: boolean;
	/** РњРѕР¶РЅРѕ Р»Рё РґСѓР±Р»РёСЂРѕРІР°С‚СЊ */
	duplicable?: boolean;
	/** РЎРєСЂС‹С‚СЊ Р·Р°РіРѕР»РѕРІРѕРє */
	hideHeader?: boolean;
	/** РЎРєСЂС‹С‚СЊ РїРѕСЂС‚С‹ */
	hidePorts?: boolean;
	/** РЎРєСЂС‹С‚СЊ СЃРІРѕР№СЃС‚РІР° */
	hideProperties?: boolean;
	/** РџРѕРєР°Р·С‹РІР°С‚СЊ РєРЅРѕРїРєРё РґРµР№СЃС‚РІРёР№ */
	showActions?: boolean;
	/** РћР±СЂР°Р±РѕС‚С‡РёРє РІС‹РґРµР»РµРЅРёСЏ (РєР°СЃС‚РѕРјРЅРѕРµ СЃРѕР±С‹С‚РёРµ) */
	onNodeSelect?: (id: string) => void;
	/** РћР±СЂР°Р±РѕС‚С‡РёРє РїРµСЂРµРјРµС‰РµРЅРёСЏ (РєР°СЃС‚РѕРјРЅРѕРµ СЃРѕР±С‹С‚РёРµ) */
	onNodeDrag?: (id: string, position: { x: number; y: number }) => void;
	/** РћР±СЂР°Р±РѕС‚С‡РёРє РёР·РјРµРЅРµРЅРёСЏ СЂР°Р·РјРµСЂР° */
	onNodeResize?: (id: string, size: { width: number; height: number }) => void;
	/** РћР±СЂР°Р±РѕС‚С‡РёРє СѓРґР°Р»РµРЅРёСЏ */
	ondelete?: (id: string) => void;
	/** РћР±СЂР°Р±РѕС‚С‡РёРє РґСѓР±Р»РёСЂРѕРІР°РЅРёСЏ */
	onduplicate?: (id: string) => void;
	/** РћР±СЂР°Р±РѕС‚С‡РёРє РЅР°С‡Р°Р»Р° РїРѕРґРєР»СЋС‡РµРЅРёСЏ */
	onConnectionStart?: (port: LiteGraphPort, event: MouseEvent) => void;
	/** РћР±СЂР°Р±РѕС‚С‡РёРє Р·Р°РІРµСЂС€РµРЅРёСЏ РїРѕРґРєР»СЋС‡РµРЅРёСЏ */
	onConnectionEnd?: (port: LiteGraphPort, event: MouseEvent) => void;
	/** РћР±СЂР°Р±РѕС‚С‡РёРє РёР·РјРµРЅРµРЅРёСЏ СЃРІРѕР№СЃС‚РІР° */
	onPropertyChange?: (propertyId: string, value: unknown) => void;
	/** Р”РѕС‡РµСЂРЅРёР№ РєРѕРЅС‚РµРЅС‚ */
	children?: Snippet;
	/** РљРѕРЅС‚РµРЅС‚ Р·Р°РіРѕР»РѕРІРєР° */
	headerContent?: Snippet;
	/** РљРѕРЅС‚РµРЅС‚ С‚РµР»Р° */
	bodyContent?: Snippet;
	worldDepth?: number;
	cameraDepth?: number;
	localCameraDepth?: number;
	presentation?: SemanticZoomPresentation;
}






