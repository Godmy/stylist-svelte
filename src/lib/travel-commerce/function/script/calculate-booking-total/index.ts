import type { BookingDraft } from '$stylist/booking/type/object/booking-draft';
import type { PricingModel } from '$stylist/travel-commerce/type/object/pricing-model';

/**
 * Total tour price in US cents for the given guests — the one rule shared by
 * the tour page's price picker and the landing's product cards.
 */
export function calculateBookingTotalCents(
	pricing: PricingModel,
	guests: Pick<BookingDraft, 'adults' | 'children' | 'seniors' | 'childrenTeen'>
): number {
	const adults = guests.adults;
	const seniors = guests.seniors ?? 0;
	const children = guests.children;
	const childrenTeen = guests.childrenTeen ?? 0;
	const discount = pricing.seniorDiscountPercent / 100;

	if (pricing.priceUnit === 'per_person') {
		const adultRate = pricing.basePriceCents;
		const childRate = pricing.childPriceCents ?? adultRate;
		const seniorRate = Math.round(adultRate * (1 - discount));
		// Teens (13-18) charged at the adult rate, under-3s (childrenUnder3) ride free — no
		// separate rate exists for either in the tour pricing data.
		return adults * adultRate + seniors * seniorRate + children * childRate + childrenTeen * adultRate;
	}

	// per_tour: total is looked up by headcount from `groupPricing`, then
	// each senior's per-person share of that total is discounted.
	const headcount = Math.max(1, adults + seniors + children + childrenTeen);
	const table =
		pricing.groupPricing && pricing.groupPricing.length > 0
			? [...pricing.groupPricing].sort((a, b) => a.participants - b.participants)
			: [{ participants: headcount, priceCents: pricing.basePriceCents }];
	const row =
		table.find((r) => r.participants === headcount) ??
		(headcount < table[0].participants ? table[0] : table[table.length - 1]);
	const perPersonShare = row.priceCents / row.participants;
	return Math.round(row.priceCents - seniors * perPersonShare * discount);
}
