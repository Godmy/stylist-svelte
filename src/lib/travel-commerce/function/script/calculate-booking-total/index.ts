import type { BookingDraft } from '$stylist/booking/type/object/booking-draft';
import type { PricingModel } from '$stylist/travel-commerce/type/object/pricing-model';
import type { AddonQuantity } from '$stylist/travel-commerce/type/object/addon-quantity';
import { calculateBookingQuote } from '$stylist/travel-commerce/function/script/calculate-booking-quote';

/**
 * Total tour price in US cents: guests + hotel pickup surcharge + chosen
 * addons (`calculateBookingQuote` gives the breakdown). Shared by the tour
 * page, the header price, the landing's product cards and the checkout.
 */
export function calculateBookingTotalCents(
	pricing: PricingModel,
	draft: Pick<BookingDraft, 'adults' | 'children' | 'seniors' | 'childrenTeen' | 'childrenUnder3'> & {
		pickup?: string;
	},
	addons: Readonly<Record<string, AddonQuantity>> = {}
): number {
	return calculateBookingQuote(pricing, draft, addons).totalCents;
}
