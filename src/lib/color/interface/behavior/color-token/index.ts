import type { TokenThemeTone } from '$stylist/theme/type/enum/theme-tone';
import type { TokenThemeVariant } from '$stylist/theme/type/enum/theme-variant';

/** РўРѕРєРµРЅС‹ С†РІРµС‚Р° Рё РІРёР·СѓР°Р»СЊРЅРѕРіРѕ Р°РєС†РµРЅС‚Р° РєРѕРјРїРѕРЅРµРЅС‚Р° */
export interface BehaviorColorToken {
	/** Р’РёР·СѓР°Р»СЊРЅС‹Р№ РІР°СЂРёР°РЅС‚ (default, accent, muted, ghost, outline) */
	variant?: TokenThemeVariant;
	/** РўРѕРЅР°Р»СЊРЅРѕСЃС‚СЊ (primary, secondary, success, warning, danger, info) */
	tone?: TokenThemeTone;
	/** Р“СЂР°РґРёРµРЅС‚РЅС‹Р№ СЂРµР¶РёРј (CSS gradient РёР»Рё С‚РѕРєРµРЅ) */
	gradient?: string;
	/** РРјСЏ С‚РµРјС‹ РґР»СЏ Р»РѕРєР°Р»СЊРЅРѕРіРѕ РїРµСЂРµРѕРїСЂРµРґРµР»РµРЅРёСЏ */
	theme?: string;
}
