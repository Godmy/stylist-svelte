import type { BookingDraft } from '$stylist/booking/type/object/booking-draft';
import type { Excursion } from '$stylist/travel-commerce/type/object/excursion';
import { calculateBookingTotalCents } from '$stylist/travel-commerce/function/script/calculate-booking-total';
import { countBookingGuests } from '$stylist/travel-commerce/function/count/booking-guest';

/**
 * A product card's price line: the real total for the visitor's current
 * guests ("740 $ за 3 чел.") when both the tour's pricing and a booking draft
 * are known, otherwise the static `priceFrom` label.
 */
export function formatExcursionCardPrice(excursion: Excursion, booking?: BookingDraft): string | undefined {
	if (!excursion.pricing || !booking) return excursion.priceFrom;
	const guests = countBookingGuests(booking);
	if (guests === 0) return excursion.priceFrom;
	const totalCents = calculateBookingTotalCents(excursion.pricing, booking);
	return `${Math.round(totalCents / 100).toLocaleString('ru-RU')} $ за ${guests} чел.`;
}
