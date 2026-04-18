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

export interface BehaviorUpsellEvents {
	onProductUpgrade?: (product: SlotUpsellProduct) => void;
	onProductAddToCart?: (product: SlotUpsellProduct) => void;
}
