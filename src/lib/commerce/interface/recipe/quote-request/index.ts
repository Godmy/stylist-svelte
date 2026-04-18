/**
 * QuoteRequestContract вЂ” Р·Р°РїСЂРѕСЃ РєРѕРјРјРµСЂС‡РµСЃРєРѕРіРѕ РїСЂРµРґР»РѕР¶РµРЅРёСЏ (С„РѕСЂРјР°).
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ThemeAttributes   (theme) вЂ” class, data-variant, data-tone
 *
 * РџСЂРёРјРµС‡Р°РЅРёРµ: РЅР°СЃР»РµРґСѓРµС‚ ThemeAttributes РІРјРµСЃС‚Рѕ InformationHTMLAttributes
 * РґР»СЏ РµРґРёРЅРѕРѕР±СЂР°Р·РёСЏ СЃ РѕСЃС‚Р°Р»СЊРЅС‹РјРё commerce-РєРѕРЅС‚СЂР°РєС‚Р°РјРё.
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface RecipeQuoteRequest extends StructIntersectAll<[ ThemeAttributes<HTMLDivElement> ]> {}
