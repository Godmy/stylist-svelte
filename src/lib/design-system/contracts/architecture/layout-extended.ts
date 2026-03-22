import type { Snippet } from 'svelte';
import type { TokenAlignment, TokenJustification, TokenOrientation, TokenSize } from '$stylist/design-system/tokens';
import type { ArchitectureHTMLAttributes } from '$stylist/design-system/html/attributes/architecture';
import type { ChildrenHtmlAttributes } from '$stylist/design-system/html/attributes/children';

/**
 * РЎРµРєС†РёСЏ РґР»СЏ layout СЃ РґРёРЅР°РјРёС‡РµСЃРєРёРјРё СЌР»РµРјРµРЅС‚Р°РјРё
 */
export interface LayoutSection {
	id?: string;
	content: Snippet;
	size?: TokenSize | 'xl' | '2xl' | 'full';
	className?: string;
}

/**
 * Р’РµСЂС‚РёРєР°Р»СЊРЅС‹Р№ layout - Р±Р°Р·РѕРІС‹Р№ РєРѕРјРїРѕРЅРµРЅС‚ РґР»СЏ РІРµСЂС‚РёРєР°Р»СЊРЅРѕРіРѕ РІС‹СЂР°РІРЅРёРІР°РЅРёСЏ
 */
export interface VerticalLayoutProps
	extends ArchitectureHTMLAttributes<HTMLDivElement>,
		ChildrenHtmlAttributes<HTMLDivElement> {
	gap?: TokenSize;
	alignItems?: TokenAlignment;
	justifyContent?: TokenJustification;
	fillHeight?: boolean;
}

/**
 * Р“РѕСЂРёР·РѕРЅС‚Р°Р»СЊРЅС‹Р№ layout - СѓРЅРёРІРµСЂСЃР°Р»СЊРЅС‹Р№ РєРѕРјРїРѕРЅРµРЅС‚ РґР»СЏ РіРѕСЂРёР·РѕРЅС‚Р°Р»СЊРЅРѕРіРѕ/РІРµСЂС‚РёРєР°Р»СЊРЅРѕРіРѕ РІС‹СЂР°РІРЅРёРІР°РЅРёСЏ
 * РћР±СЉРµРґРёРЅСЏРµС‚ С„СѓРЅРєС†РёРѕРЅР°Р»СЊРЅРѕСЃС‚СЊ stacked-layout, side-by-side-layout Рё split-layout
 */
export interface HorizontalLayoutProps
	extends ArchitectureHTMLAttributes<HTMLDivElement>,
		ChildrenHtmlAttributes<HTMLDivElement> {
	sections?: LayoutSection[];
	direction?: TokenOrientation;
	gap?: TokenSize;
	alignItems?: TokenAlignment;
	justifyContent?: TokenJustification;
	responsive?: boolean;
	primarySize?: TokenSize | 'xl' | '2xl' | 'full';
	secondarySize?: TokenSize | 'xl' | '2xl' | 'full';
	wrap?: boolean;
}

/**
 * Grid layout - РєРѕРјРїРѕРЅРµРЅС‚ РґР»СЏ СЃРµС‚РѕС‡РЅРѕР№ СЂР°СЃРєР»Р°РґРєРё
 */
export interface GridLayoutExtendedProps
	extends ArchitectureHTMLAttributes<HTMLDivElement>,
		ChildrenHtmlAttributes<HTMLDivElement> {
	cols?: number;
	gap?: TokenSize;
	responsive?: boolean;
	alignItems?: TokenAlignment;
	justifyContent?: TokenJustification;
}



