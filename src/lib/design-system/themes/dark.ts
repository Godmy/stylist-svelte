/**
 * РћРїСЂРµРґРµР»РµРЅРёРµ С‚РµРјРЅРѕР№ С‚РµРјС‹
 * РСЃРїРѕР»СЊР·СѓРµС‚ С‚РѕРєРµРЅС‹ РґРёР·Р°Р№РЅР° РґР»СЏ СЃРѕР·РґР°РЅРёСЏ СЃРѕРіР»Р°СЃРѕРІР°РЅРЅРѕР№ С‚РµРјРЅРѕР№ С‚РµРјС‹
 */

import { AMBER } from '../tokens/information/amber';
import { BLUE } from '../tokens/information/blue';
import { NEUTRAL } from '../tokens/information/neutral';
import { RED } from '../tokens/information/red';
import { SLATE } from '../tokens/information/slate';
import { TEAL } from '../tokens/information/teal';
import { SPACING } from '../tokens/architecture/spacing';
import { FONT_FAMILY } from '../tokens/information/font-family';
import { FONT_SIZE } from '../tokens/information/font-size';
import { FONT_WEIGHT } from '../tokens/information/font-weight';
import { LINE_HEIGHT } from '../tokens/information/line-height';
import { RADIUS } from '../tokens/architecture/radius';
import { SHADOWS } from '../tokens/architecture/shadows';
import type { Theme } from './types';

/**
 * РўРµРјРЅР°СЏ С‚РµРјР°
 * РћРїСЂРµРґРµР»СЏРµС‚ Р·РЅР°С‡РµРЅРёСЏ РґР»СЏ С‚РµРјРЅРѕРіРѕ СЂРµР¶РёРјР° РёРЅС‚РµСЂС„РµР№СЃР°
 */
export const darkTheme: Theme = {
	name: 'dark',

	colors: {
		// РЎРµРјР°РЅС‚РёС‡РµСЃРєРёРµ С†РІРµС‚РѕРІС‹Рµ СЃРѕРїРѕСЃС‚Р°РІР»РµРЅРёСЏ (РЅР°СЃС‚СЂРѕРµРЅРЅС‹Рµ РґР»СЏ С‚РµРјРЅРѕР№ С‚РµРјС‹)
		primary: BLUE, // РћСЃРЅРѕРІРЅРѕР№ С†РІРµС‚
		secondary: SLATE, // Р’С‚РѕСЂРёС‡РЅС‹Р№ С†РІРµС‚
		success: TEAL, // Р¦РІРµС‚ СѓСЃРїРµС…Р° (РёСЃРїРѕР»СЊР·СѓРµС‚СЃСЏ Р±РёСЂСЋР·РѕРІС‹Р№ РІРјРµСЃС‚Рѕ Р·РµР»РµРЅРѕРіРѕ РґР»СЏ Р»СѓС‡С€РµРіРѕ РєРѕРЅС‚СЂР°СЃС‚Р° РІ С‚РµРјРЅРѕР№ С‚РµРјРµ)
		warning: AMBER, // Р¦РІРµС‚ РїСЂРµРґСѓРїСЂРµР¶РґРµРЅРёСЏ
		danger: RED, // Р¦РІРµС‚ РѕРїР°СЃРЅРѕСЃС‚Рё
		neutral: NEUTRAL, // РќРµР№С‚СЂР°Р»СЊРЅС‹Р№ С†РІРµС‚

		// Р¦РІРµС‚Р° РїРѕРІРµСЂС…РЅРѕСЃС‚РµР№ (С‚РµРјРЅС‹Рµ С„РѕРЅС‹)
		background: {
			primary: SLATE[900], // РћСЃРЅРѕРІРЅРѕР№ С„РѕРЅ (#0f172a)
			secondary: SLATE[800], // Р’С‚РѕСЂРёС‡РЅС‹Р№ С„РѕРЅ (#1e293b)
			tertiary: SLATE[700] // РўСЂРµС‚РёС‡РЅС‹Р№ С„РѕРЅ (#334155)
		},

		// Р¦РІРµС‚Р° С‚РµРєСЃС‚Р° (СЃРІРµС‚Р»С‹Р№ С‚РµРєСЃС‚ РЅР° С‚РµРјРЅРѕРј С„РѕРЅРµ)
		text: {
			primary: SLATE[50], // РћСЃРЅРѕРІРЅРѕР№ С‚РµРєСЃС‚ (#f8fafc)
			secondary: SLATE[300], // Р’С‚РѕСЂРёС‡РЅС‹Р№ С‚РµРєСЃС‚ (#cbd5e1)
			tertiary: SLATE[400], // РўСЂРµС‚РёС‡РЅС‹Р№ С‚РµРєСЃС‚ (#94a3b8)
			inverse: SLATE[900] // РРЅРІРµСЂС‚РёСЂРѕРІР°РЅРЅС‹Р№ С‚РµРєСЃС‚ (#0f172a)
		},

		// Р¦РІРµС‚Р° РіСЂР°РЅРёС† (СЃРІРµС‚Р»С‹Рµ РіСЂР°РЅРёС†С‹ РґР»СЏ С‚РµРјРЅРѕРіРѕ СЂРµР¶РёРјР°)
		border: {
			primary: SLATE[600], // РћСЃРЅРѕРІРЅР°СЏ РіСЂР°РЅРёС†Р° (#475569)
			secondary: SLATE[700], // Р’С‚РѕСЂРёС‡РЅР°СЏ РіСЂР°РЅРёС†Р° (#334155)
			tertiary: SLATE[800] // РўСЂРµС‚РёС‡РЅР°СЏ РіСЂР°РЅРёС†Р° (#1e293b)
		}
	},

	spacing: SPACING, // РЁРєР°Р»Р° РѕС‚СЃС‚СѓРїРѕРІ РёР· С‚РѕРєРµРЅРѕРІ

	typography: {
		fontFamily: FONT_FAMILY.sans, // РЎРµРјРµР№СЃС‚РІРѕ С€СЂРёС„С‚РѕРІ
		fontSize: FONT_SIZE as Record<string, string>, // Р Р°Р·РјРµСЂС‹ С€СЂРёС„С‚Р°
		fontWeight: FONT_WEIGHT as Record<string, string>, // РќР°СЃС‹С‰РµРЅРЅРѕСЃС‚СЊ С€СЂРёС„С‚Р°
		lineHeight: LINE_HEIGHT as Record<string, string> // Р’С‹СЃРѕС‚Р° СЃС‚СЂРѕРє
	},

	borderRadius: RADIUS as Record<string, string>, // РЎРєСЂСѓРіР»РµРЅРёСЏ РіСЂР°РЅРёС†
	boxShadow: SHADOWS as Record<string, string> // РўРµРЅРё
};

/**
 * Design System Default Theme (Light)
 * Р‘Р°Р·РѕРІР°СЏ СЃРІРµС‚Р»Р°СЏ С‚РµРјР° РґРёР·Р°Р№РЅ-СЃРёСЃС‚РµРјС‹
 */
export const designSystemDefaultTheme: Theme = {
	name: 'light',
	colors: {
		primary: BLUE,
		secondary: SLATE,
		success: TEAL,
		warning: AMBER,
		danger: RED,
		neutral: NEUTRAL,
		background: {
			primary: '#ffffff',
			secondary: SLATE[50],
			tertiary: SLATE[100]
		},
		text: {
			primary: SLATE[900],
			secondary: SLATE[600],
			tertiary: SLATE[500],
			inverse: '#ffffff'
		},
		border: {
			primary: SLATE[300],
			secondary: SLATE[200],
			tertiary: SLATE[100]
		}
	},
spacing: SPACING,
	typography: {
		fontFamily: FONT_FAMILY.sans,
		fontSize: FONT_SIZE as Record<string, string>,
		fontWeight: FONT_WEIGHT as Record<string, string>,
		lineHeight: LINE_HEIGHT as Record<string, string>
	},
	borderRadius: RADIUS as Record<string, string>,
	boxShadow: SHADOWS as Record<string, string>
};

/**
 * Design System Dark Theme
 * РђР»СЊС‚РµСЂРЅР°С‚РёРІРЅРѕРµ СЌРєСЃРїРѕСЂС‚РёСЂСѓРµРјРѕРµ РёРјСЏ РґР»СЏ darkTheme
 */
export const designSystemDarkTheme = darkTheme;






