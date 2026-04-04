/**
 * ShippingInfoContract — информация о доставке.
 *
 * LEGO-состав:
 *   ThemeAttributes   (theme) — class, data-variant, data-tone
 */
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface ShippingOptionInfoContract {
	id: string;
	name: string;
	description: string;
	price: number;
	estimatedDays: number;
	available?: boolean;
	disabled?: boolean;
	cutoffTime?: string;
	carrier?: string;
	trackingAvailable?: boolean;
	signatureRequired?: boolean;
	insurance?: boolean;
	carbonNeutral?: boolean;
}

export interface ShippingRegionContract {
	id: string;
	name: string;
	countries: string[];
	additionalFee?: number;
	restrictions?: string[];
}

export interface ShippingInfoContract
	extends RecordArchitectureMerge<[
		ThemeAttributes<HTMLDivElement>
	]> {
	/** List of shipping options */
	shippingOptions: ShippingOptionInfoContract[];
	/** List of shipping regions */
	regions?: ShippingRegionContract[];
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
