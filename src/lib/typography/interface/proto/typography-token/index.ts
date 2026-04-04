import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { TokenLineHeight } from '$stylist/architecture/type/enum/line-height';
import type { TokenLetterSpacing } from '$stylist/architecture/type/enum/letter-spacing';

/** РўРѕРєРµРЅС‹ С‚РёРїРѕРіСЂР°С„РёРєРё вЂ” С€СЂРёС„С‚, СЂР°Р·РјРµСЂ, РЅР°С‡РµСЂС‚Р°РЅРёРµ, РјРµР¶СЃС‚СЂРѕС‡РЅС‹Р№ РёРЅС‚РµСЂРІР°Р» */
export interface ITypographyToken {
	/** Р Р°Р·РјРµСЂ С‚РµРєСЃС‚Р° РїРѕ С‚РѕРєРµРЅСѓ */
	fontSize?: TokenSize;
	/** РќР°СЃС‹С‰РµРЅРЅРѕСЃС‚СЊ С€СЂРёС„С‚Р° */
	fontWeight?: 'thin' | 'light' | 'regular' | 'medium' | 'semibold' | 'bold' | 'black';
	/** РЎРµРјРµР№СЃС‚РІРѕ С€СЂРёС„С‚Р° */
	fontFamily?: 'sans' | 'serif' | 'mono' | 'display' | string;
	/** РњРµР¶СЃС‚СЂРѕС‡РЅС‹Р№ РёРЅС‚РµСЂРІР°Р» */
	lineHeight?: TokenLineHeight;
	/** РњРµР¶Р±СѓРєРІРµРЅРЅС‹Р№ РёРЅС‚РµСЂРІР°Р» */
	letterSpacing?: TokenLetterSpacing;
	/** РўСЂР°РЅСЃС„РѕСЂРјР°С†РёСЏ С‚РµРєСЃС‚Р° */
	textTransform?: 'none' | 'uppercase' | 'lowercase' | 'capitalize';
	/** Р’С‹СЂР°РІРЅРёРІР°РЅРёРµ С‚РµРєСЃС‚Р° */
	textAlign?: 'left' | 'center' | 'right' | 'justify';
	/** РћРіСЂР°РЅРёС‡РµРЅРёРµ РґРѕ N СЃС‚СЂРѕРє (line-clamp) */
	lineClamp?: number;
}
