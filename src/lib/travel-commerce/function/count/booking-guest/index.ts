import type { BookingDraft } from '$stylist/booking/type/object/booking-draft';

/** Everyone in the draft, under-3s included — the "за N чел." count shown next to a total. */
export function countBookingGuests(
	guests: Pick<BookingDraft, 'adults' | 'children' | 'seniors' | 'childrenTeen' | 'childrenUnder3'>
): number {
	return (
		guests.adults +
		(guests.seniors ?? 0) +
		guests.children +
		(guests.childrenTeen ?? 0) +
		(guests.childrenUnder3 ?? 0)
	);
}
