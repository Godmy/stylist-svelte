/**
 * ShippingCalculatorContract вЂ” РєР°Р»СЊРєСѓР»СЏС‚РѕСЂ СЃС‚РѕРёРјРѕСЃС‚Рё РґРѕСЃС‚Р°РІРєРё.
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ThemeAttributes   (theme) вЂ” class, data-variant, data-tone
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';
import type { SlotShippingOption } from '$stylist/commerce/interface/slot/shipping-option';
import type { SlotCountry } from '$stylist/commerce/interface/slot/country';
import type { SlotState } from '$stylist/commerce/interface/slot/state';
import type { SlotDimensions } from '$stylist/commerce/interface/slot/dimensions';
import type { BehaviorShippingCalculatorEvents } from '$stylist/commerce/interface/behavior/shipping-calculator-events';

export interface RecipeShippingCalculator extends StructIntersectAll<[ ThemeAttributes<HTMLDivElement> ]>, BehaviorShippingCalculatorEvents {
	/** List of shipping options */
	shippingOptions: SlotShippingOption[];
	/** List of countries */
	countries: SlotCountry[];
	/** List of states */
	states?: SlotState[];
	/** Default origin country */
	defaultOriginCountry?: string;
	/** Default destination country */
	defaultDestinationCountry?: string;
	/** Default weight */
	defaultWeight?: number;
	/** Default dimensions */
	defaultDimensions?: SlotDimensions;
	/** SlotCurrency code */
	currency?: string;
	/** Locale for formatting */
	locale?: string;
	/** Show weight input */
	showWeightInput?: boolean;
	/** Show dimensions input */
	showDimensionsInput?: boolean;
	/** Show country selector */
	showCountrySelector?: boolean;
	/** Show state selector */
	showStateSelector?: boolean;
	/** Additional CSS class for form */
	formClass?: string;
	/** Additional CSS class for results */
	resultClass?: string;
}
