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
import type { SlotConversionResult } from '$stylist/commerce/interface/slot/conversion-result';

export interface BehaviorCurrencyConverterEvents {
	onConvert?: (result: SlotConversionResult) => void;
	onCurrencyChange?: (from: string, to: string) => void;
}
