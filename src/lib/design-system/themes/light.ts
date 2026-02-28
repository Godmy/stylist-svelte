/**
 * РћРїСЂРµРґРµР»РµРЅРёРµ СЃРІРµС‚Р»РѕР№ С‚РµРјС‹
 * РСЃРїРѕР»СЊР·СѓРµС‚ С‚РѕРєРµРЅС‹ РґРёР·Р°Р№РЅР° РґР»СЏ СЃРѕР·РґР°РЅРёСЏ СЃРѕРіР»Р°СЃРѕРІР°РЅРЅРѕР№ СЃРІРµС‚Р»РѕР№ С‚РµРјС‹
 */

import { AMBER } from '../tokens/information/amber';
import { BLUE } from '../tokens/information/blue';
import { GREEN } from '../tokens/information/green';
import { NEUTRAL } from '../tokens/information/neutral';
import { RED } from '../tokens/information/red';
import { SLATE } from '../tokens/information/slate';
import { SPACING } from '../tokens/architecture/spacing';
import { FONT_FAMILY } from '../tokens/information/font-family';
import { FONT_SIZE } from '../tokens/information/font-size';
import { FONT_WEIGHT } from '../tokens/information/font-weight';
import { LINE_HEIGHT } from '../tokens/information/line-height';
import { RADIUS } from '../tokens/architecture/radius';
import { SHADOWS } from '../tokens/architecture/shadows';
import type { Theme } from './types';

/**
 * РЎРІРµС‚Р»Р°СЏ С‚РµРјР°
 * РћРїСЂРµРґРµР»СЏРµС‚ Р·РЅР°С‡РµРЅРёСЏ РґР»СЏ СЃРІРµС‚Р»РѕРіРѕ СЂРµР¶РёРјР° РёРЅС‚РµСЂС„РµР№СЃР°
 */
export const lightTheme: Theme = {
	name: 'light',

	colors: {
		// РЎРµРјР°РЅС‚РёС‡РµСЃРєРёРµ С†РІРµС‚РѕРІС‹Рµ СЃРѕРїРѕСЃС‚Р°РІР»РµРЅРёСЏ
		primary: BLUE, // РћСЃРЅРѕРІРЅРѕР№ С†РІРµС‚
		secondary: SLATE, // Р’С‚РѕСЂРёС‡РЅС‹Р№ С†РІРµС‚
		success: GREEN, // Р¦РІРµС‚ СѓСЃРїРµС…Р°
		warning: AMBER, // Р¦РІРµС‚ РїСЂРµРґСѓРїСЂРµР¶РґРµРЅРёСЏ
		danger: RED, // Р¦РІРµС‚ РѕРїР°СЃРЅРѕСЃС‚Рё
		neutral: NEUTRAL, // РќРµР№С‚СЂР°Р»СЊРЅС‹Р№ С†РІРµС‚

		// Р¦РІРµС‚Р° РїРѕРІРµСЂС…РЅРѕСЃС‚РµР№
		background: {
			primary: '#ffffff', // РћСЃРЅРѕРІРЅРѕР№ С„РѕРЅ
			secondary: '#f9fafb', // Р’С‚РѕСЂРёС‡РЅС‹Р№ С„РѕРЅ
			tertiary: '#f3f4f6' // РўСЂРµС‚РёС‡РЅС‹Р№ С„РѕРЅ
		},

		// Р¦РІРµС‚Р° С‚РµРєСЃС‚Р°
		text: {
			primary: SLATE[900], // РћСЃРЅРѕРІРЅРѕР№ С‚РµРєСЃС‚ (#0f172a)
			secondary: SLATE[600], // Р’С‚РѕСЂРёС‡РЅС‹Р№ С‚РµРєСЃС‚ (#475569)
			tertiary: SLATE[500], // РўСЂРµС‚РёС‡РЅС‹Р№ С‚РµРєСЃС‚ (#64748b)
			inverse: '#ffffff' // РРЅРІРµСЂС‚РёСЂРѕРІР°РЅРЅС‹Р№ С‚РµРєСЃС‚
		},

		// Р¦РІРµС‚Р° РіСЂР°РЅРёС†
		border: {
			primary: SLATE[200], // РћСЃРЅРѕРІРЅР°СЏ РіСЂР°РЅРёС†Р° (#e2e8f0)
			secondary: SLATE[300], // Р’С‚РѕСЂРёС‡РЅР°СЏ РіСЂР°РЅРёС†Р° (#cbd5e1)
			tertiary: SLATE[100] // РўСЂРµС‚РёС‡РЅР°СЏ РіСЂР°РЅРёС†Р° (#f1f5f9)
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






