import type { BookingDraft } from '$stylist/booking/type/object/booking-draft';
import type { Excursion } from '$stylist/travel-commerce/type/object/excursion';
import { calculateBookingTotalCents } from '$stylist/travel-commerce/function/script/calculate-booking-total';
import { countBookingGuests } from '$stylist/travel-commerce/function/count/booking-guest';

/**
 * A product card's total for the visitor's current guests, in whole USD —
 * `undefined` when the tour's pricing or the guests are unknown (the card then
 * falls back to its static `priceFrom` label).
 */
export function calculateExcursionCardTotal(
	excursion: Excursion,
	booking?: BookingDraft
): { usd: number; guests: number } | undefined {
	if (!excursion.pricing || !booking) return undefined;
	const guests = countBookingGuests(booking);
	if (guests === 0) return undefined;
	return { usd: Math.round(calculateBookingTotalCents(excursion.pricing, booking) / 100), guests };
}
