/**
 * ShippingInfoContract вЂ” РёРЅС„РѕСЂРјР°С†РёСЏ Рѕ РґРѕСЃС‚Р°РІРєРµ.
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ThemeAttributes   (theme) вЂ” class, data-variant, data-tone
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';
import type { SlotShippingOptionInfo } from '$stylist/commerce/interface/slot/shipping-option-info';
import type { RecipeShippingRegion } from '$stylist/commerce/interface/recipe/shipping-region';

export interface RecipeShippingInfo extends StructIntersectAll<[ ThemeAttributes<HTMLDivElement> ]> {
	/** List of shipping options */
	shippingOptions: SlotShippingOptionInfo[];
	/** List of shipping regions */
	regions?: RecipeShippingRegion[];
	/** Estimated delivery date */
	estimatedDeliveryDate?: Date;
	/** Free shipping threshold */
	freeShippingThreshold?: number;
	/** Delivery estimate */
	deliveryEstimate?: Date;
	/** Show options list */
	showOptions?: boolean;
	/** Show regions */
	showRegions?: boolean;
	/** Show delivery estimate */
	showDeliveryEstimate?: boolean;
	/** Show free shipping info */
	showFreeShippingInfo?: boolean;
	/** Show restrictions */
	showRestrictions?: boolean;
	/** Show carbon neutral options */
	showCarbonNeutralOptions?: boolean;
	/** Show estimates */
	showEstimates?: boolean;
	/** Show free shipping */
	showFreeShipping?: boolean;
	/** Additional CSS class for header */
	headerClass?: string;
	/** Additional CSS class for option */
	optionClass?: string;
	/** Additional CSS class for region */
	regionClass?: string;
}
