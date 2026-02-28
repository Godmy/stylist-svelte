/**
 * РћРїСЂРµРґРµР»РµРЅРёСЏ С‚РёРїРѕРІ С‚РµРјС‹
 */

import type { ColorScale } from '../tokens/information/color-scale';

/**
 * РЎРµРјР°РЅС‚РёС‡РµСЃРєРёРµ СЃРѕРїРѕСЃС‚Р°РІР»РµРЅРёСЏ С†РІРµС‚РѕРІ РґР»СЏ С‚РµРјС‹
 */
export interface ThemeColors {
	// РЎРµРјР°РЅС‚РёС‡РµСЃРєРёРµ С†РІРµС‚РѕРІС‹Рµ С€РєР°Р»С‹
	primary: ColorScale;
	secondary: ColorScale;
	success: ColorScale;
	warning: ColorScale;
	danger: ColorScale;
	neutral: ColorScale;

	// Р¦РІРµС‚Р° РїРѕРІРµСЂС…РЅРѕСЃС‚РµР№
	background: {
		primary: string; // РћСЃРЅРѕРІРЅРѕР№ С„РѕРЅ
		secondary: string; // Р’С‚РѕСЂРёС‡РЅС‹Р№ С„РѕРЅ
		tertiary: string; // РўСЂРµС‚РёС‡РЅС‹Р№ С„РѕРЅ
	};

	// Р¦РІРµС‚Р° С‚РµРєСЃС‚Р°
	text: {
		primary: string; // РћСЃРЅРѕРІРЅРѕР№ С‚РµРєСЃС‚
		secondary: string; // Р’С‚РѕСЂРёС‡РЅС‹Р№ С‚РµРєСЃС‚
		tertiary: string; // РўСЂРµС‚РёС‡РЅС‹Р№ С‚РµРєСЃС‚
		inverse: string; // РРЅРІРµСЂС‚РёСЂРѕРІР°РЅРЅС‹Р№ С‚РµРєСЃС‚ (РЅР° С‚РµРјРЅРѕРј С„РѕРЅРµ)
	};

	// Р¦РІРµС‚Р° РіСЂР°РЅРёС†
	border: {
		primary: string; // РћСЃРЅРѕРІРЅР°СЏ РіСЂР°РЅРёС†Р°
		secondary: string; // Р’С‚РѕСЂРёС‡РЅР°СЏ РіСЂР°РЅРёС†Р°
		tertiary: string; // РўСЂРµС‚РёС‡РЅР°СЏ РіСЂР°РЅРёС†Р°
	};
}

/**
 * РџРѕР»РЅР°СЏ СЃС‚СЂСѓРєС‚СѓСЂР° С‚РµРјС‹
 */
export interface Theme {
	name: string; // РРјСЏ С‚РµРјС‹
	colors: ThemeColors; // Р¦РІРµС‚Р° С‚РµРјС‹
	spacing: Record<string, string>; // РћС‚СЃС‚СѓРїС‹ С‚РµРјС‹
	typography: {
		fontFamily: string; // РЎРµРјРµР№СЃС‚РІРѕ С€СЂРёС„С‚РѕРІ
		fontSize: Record<string, string>; // Р Р°Р·РјРµСЂС‹ С€СЂРёС„С‚Р°
		fontWeight: Record<string, string>; // РќР°СЃС‹С‰РµРЅРЅРѕСЃС‚СЊ С€СЂРёС„С‚Р°
		lineHeight: Record<string, string>; // Р’С‹СЃРѕС‚Р° СЃС‚СЂРѕРє
	};
	borderRadius: Record<string, string>; // РЎРєСЂСѓРіР»РµРЅРёСЏ РіСЂР°РЅРёС†
	boxShadow: Record<string, string>; // РўРµРЅРё
}

/**
 * РќР°Р·РІР°РЅРёСЏ С‚РµРј
 */
export type ThemeName = 'light' | 'dark';



