/**
 * UpsellContract вЂ” Р±Р»РѕРє Р°РїСЃРµР№Р»Р° (СЂРµРєРѕРјРµРЅРґР°С†РёР№ Рє Р°РїРіСЂРµР№РґСѓ).
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ILabelSlot        (information) вЂ” title (Р·Р°РіРѕР»РѕРІРѕРє Р±Р»РѕРєР°)
 *   ICaptionSlot      (information) вЂ” description (РѕРїРёСЃР°РЅРёРµ)
 *   ThemeAttributes   (theme)       вЂ” class, data-variant, data-tone
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';
import type { SlotCaption as ICaptionSlot } from '$stylist/typography/interface/slot/caption';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';
import type { SlotUpsellProduct } from '$stylist/commerce/interface/slot/upsell-product';
import type { BehaviorUpsellEvents } from '$stylist/commerce/interface/behavior/upsell-events';
import type { SlotCaption } from '$stylist/typography/interface/slot/caption';
import type { SlotLabel } from '$stylist/typography/interface/slot/label';

export interface RecipeUpsell extends StructIntersectAll<[ SlotLabel, SlotCaption, ThemeAttributes<HTMLDivElement> ]>, BehaviorUpsellEvents {
	/** Current product */
	currentProduct: SlotUpsellProduct;
	/** List of upsell products */
	upsellProducts: SlotUpsellProduct[];
	/** Maximum products to show */
	maxProducts?: number;
	/** SlotCurrency code */
	currency?: string;
	/** Locale for formatting */
	locale?: string;
	/** Show savings */
	showSavings?: boolean;
	/** Show reason */
	showReason?: boolean;
	/** Additional CSS class for header */
	headerClass?: string;
	/** Additional CSS class for product list */
	productListClass?: string;
	/** Additional CSS class for product card */
	productCardClass?: string;
}
