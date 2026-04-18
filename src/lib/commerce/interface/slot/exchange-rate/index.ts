/**
 * CurrencyConverterContract вЂ” РєРѕРЅРІРµСЂС‚РµСЂ РІР°Р»СЋС‚.
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   IClickable        (interaction) вЂ” disabled, loading
 *   ThemeAttributes   (theme)       вЂ” class, data-variant, data-tone
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { BehaviorClickable as IClickable } from '$stylist/interaction/interface/behavior/clickable';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface SlotExchangeRate {
	[key: string]: number;
}
