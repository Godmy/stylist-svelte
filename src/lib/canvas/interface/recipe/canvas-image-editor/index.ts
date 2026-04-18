/**
 * CanvasImageEditor вЂ” СЂРµРґР°РєС‚РѕСЂ РёР·РѕР±СЂР°Р¶РµРЅРёР№..
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   IMediaSlot        (information) вЂ” media (Media)
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotMedia as IMediaSlot } from '$stylist/media/interface/slot/media';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface CanvasImageEditorRecipe
	extends StructIntersectAll<[
		IMediaSlot,
		ThemeAttributes<HTMLCanvasElement>
	]>
{
	/** РЁРёСЂРёРЅР° С…РѕР»СЃС‚Р° */
	width?: number;
	/** Р’С‹СЃРѕС‚Р° С…РѕР»СЃС‚Р° */
	height?: number;
	/** Р’РєР»СЋС‡РµРЅ Р»Рё СЂРµР¶РёРј РѕР±СЂРµР·РєРё */
	cropEnabled?: boolean;
	/** РўРёРї С„РёР»СЊС‚СЂР° */
	filter?: 'none' | 'grayscale' | 'sepia' | 'invert' | 'blur' | 'brightness' | 'contrast' | 'saturate' | 'hue-rotate';
	/** РћР±Р»Р°СЃС‚СЊ РѕР±СЂРµР·РєРё */
	cropArea?: { x: number; y: number; width: number; height: number };
	/** РЇСЂРєРѕСЃС‚СЊ (0-200) */
	brightness?: number;
	/** РљРѕРЅС‚СЂР°СЃС‚ (0-200) */
	contrast?: number;
	/** РќР°СЃС‹С‰РµРЅРЅРѕСЃС‚СЊ (0-200) */
	saturation?: number;
	/** РћС‚С‚РµРЅРѕРє (0-360) */
	hue?: number;
}

