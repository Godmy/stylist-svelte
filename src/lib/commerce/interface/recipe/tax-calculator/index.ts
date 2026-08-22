import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
export interface RecipeTaxCalculator extends ComputeIntersectAll<[SlotTheme]> {
	onCalculate?: (result: {
		amount: number;
		taxAmount: number;
		totalAmount: number;
		taxRates: {
			id: string;
			name: string;
			rate: number;
			description?: string;
			compound?: boolean;
		}[];
		location: {
			id: string;
			name: string;
			countryCode: string;
			stateCode?: string;
			zipCode?: string;
			city?: string;
			taxRates: {
				id: string;
				name: string;
				rate: number;
				description?: string;
				compound?: boolean;
			}[];
		};
	}) => void;

	locations: {
		id: string;
		name: string;
		countryCode: string;
		stateCode?: string;
		zipCode?: string;
		city?: string;
		taxRates: {
			id: string;
			name: string;
			rate: number;
			description?: string;
			compound?: boolean;
		}[];
	}[];

	taxRates?: {
		id: string;
		name: string;
		rate: number;
		description?: string;
		compound?: boolean;
	}[];

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
