import type { BookingDraft } from '$stylist/booking/type/object/booking-draft';
import type { Excursion } from '$stylist/travel-commerce/type/object/excursion';
import { calculateExcursionCardTotal } from '$stylist/travel-commerce/function/script/calculate-excursion-card-total';

/**
 * A product card's price line: the real total for the visitor's current
 * guests ("740 $ за 3 чел.") when both the tour's pricing and a booking draft
 * are known, otherwise the static `priceFrom` label.
 */
export function formatExcursionCardPrice(excursion: Excursion, booking?: BookingDraft): string | undefined {
	const total = calculateExcursionCardTotal(excursion, booking);
	if (!total) return excursion.priceFrom;
	return `${total.usd.toLocaleString('ru-RU')} $ за ${total.guests} чел.`;
}
