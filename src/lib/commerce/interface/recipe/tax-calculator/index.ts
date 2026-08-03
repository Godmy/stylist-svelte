import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotTaxRate } from '$stylist/commerce/interface/slot/tax-rate';
import type { SlotLocation } from '$stylist/commerce/interface/slot/location';
import type { BehaviorTaxCalculatorEvents } from '$stylist/commerce/interface/behavior/tax-calculator-events';

export interface RecipeTaxCalculator
	extends ComputeIntersectAll<[SlotTheme]>,
		BehaviorTaxCalculatorEvents {
	locations: SlotLocation[];

	taxRates?: SlotTaxRate[];

	defaultLocation?: string;

	defaultTaxRates?: string[];

	defaultAmount?: number;

	defaultIncludeTax?: boolean;

	currency?: string;

	locale?: string;

	showLocationSelector?: boolean;

	showTaxRateSelector?: boolean;

	showIncludeTaxToggle?: boolean;

	formClass?: string;

	resultClass?: string;
}
