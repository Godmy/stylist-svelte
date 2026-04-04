import type { TokenThemeScheme } from '$stylist/theme/type/enum/theme-scheme';

/** Р¦РІРµС‚РѕРІР°СЏ СЃС…РµРјР° Рё С†РІРµС‚ РѕСЃРµР№ РґР»СЏ РіСЂР°С„РёС‡РµСЃРєРёС… РїСЂРµРґСЃС‚Р°РІР»РµРЅРёР№. */
export interface IChartColorable {
	colorScheme?: TokenThemeScheme | string;
	axisColor?: string;
}
