/**
 * TaxCalculatorContract вЂ” РєР°Р»СЊРєСѓР»СЏС‚РѕСЂ РЅР°Р»РѕРіРѕРІ.
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ThemeAttributes   (theme) вЂ” class, data-variant, data-tone
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';
import type { SlotTaxRate } from '$stylist/commerce/interface/slot/tax-rate';
import type { SlotLocation } from '$stylist/commerce/interface/slot/location';
import type { BehaviorTaxCalculatorEvents } from '$stylist/commerce/interface/behavior/tax-calculator-events';

export interface RecipeTaxCalculator extends StructIntersectAll<[ ThemeAttributes<HTMLDivElement> ]>, BehaviorTaxCalculatorEvents {
	/** List of locations */
	locations: SlotLocation[];
	/** List of tax rates */
	taxRates?: SlotTaxRate[];
	/** Default location ID */
	defaultLocation?: string;
	/** Default tax rate IDs */
	defaultTaxRates?: string[];
	/** Default amount */
	defaultAmount?: number;
	/** Default include tax */
	defaultIncludeTax?: boolean;
	/** SlotCurrency code */
	currency?: string;
	/** Locale for formatting */
	locale?: string;
	/** Show location selector */
	showLocationSelector?: boolean;
	/** Show tax rate selector */
	showTaxRateSelector?: boolean;
	/** Show include tax toggle */
	showIncludeTaxToggle?: boolean;
	/** Additional CSS class for form */
	formClass?: string;
	/** Additional CSS class for results */
	resultClass?: string;
}
