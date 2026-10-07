import type { BookingDraft } from '$stylist/booking/type/object/booking-draft';
import type { PricingModel } from '$stylist/travel-commerce/type/object/pricing-model';
import type { BookingQuote } from '$stylist/travel-commerce/type/object/booking-quote';
import type { AddonQuantity } from '$stylist/travel-commerce/type/object/addon-quantity';
import { calculateBookingBaseCents } from '$stylist/travel-commerce/function/script/calculate-booking-base';

/**
 * Tour price line by line: the tour for the guests, the hotel pickup
 * surcharge for `pickup`, and the addons taken in `addons` (by id; people per
 * guest category or units — capped at the party size; unknown ids and
 * «по согласованию» addons are ignored). The one rule shared by the tour
 * calculator, the header price, product cards and the checkout.
 */
export function calculateBookingQuote(
	pricing: PricingModel,
	draft: Pick<BookingDraft, 'adults' | 'children' | 'seniors' | 'childrenTeen' | 'childrenUnder3'> & {
		pickup?: string;
	},
	addons: Readonly<Record<string, AddonQuantity>> = {}
): BookingQuote {
	/** Most units (rooms…) of one addon a single order can take. */
	const MAX_ADDON_UNITS = 10;
	const baseCents = calculateBookingBaseCents(pricing, draft);

	let pickup: BookingQuote['pickup'] = null;
	if (pricing.pickupSurcharges && draft.pickup) {
		const tariff = pricing.pickupSurcharges.find((entry) => entry.place === draft.pickup);
		pickup = { place: draft.pickup, amountCents: tariff ? tariff.amountCents : null };
	}

	const party = {
		adults: draft.adults + (draft.seniors ?? 0) + (draft.childrenTeen ?? 0),
		children: draft.children,
		childrenUnder5: draft.childrenUnder3 ?? 0
	};
	const take = (wanted: number | undefined, max: number) =>
		Math.max(0, Math.min(Math.floor(wanted ?? 0), max));

	const lines: BookingQuote['addons'] = [];
	for (const addon of pricing.addons ?? []) {
		const wanted = addons[addon.id];
		if (!addon.amount || !wanted) continue;
		let quantity: AddonQuantity;
		let amountCents: number;
		if (addon.amount.unit === 'per_booking') {
			const units = take(wanted.units, MAX_ADDON_UNITS);
			quantity = { units };
			amountCents = units * addon.amount.amountCents;
		} else {
			quantity = {
				adults: take(wanted.adults, party.adults),
				children: take(wanted.children, party.children),
				childrenUnder5: take(wanted.childrenUnder5, party.childrenUnder5)
			};
			amountCents =
				quantity.adults! * addon.amount.adultCents +
				quantity.children! * addon.amount.childCents +
				quantity.childrenUnder5! * addon.amount.childUnder5Cents;
		}
		const count = (quantity.units ?? 0) + (quantity.adults ?? 0) + (quantity.children ?? 0) + (quantity.childrenUnder5 ?? 0);
		if (count > 0) lines.push({ id: addon.id, label: addon.label, quantity, amountCents });
	}

	const totalCents =
		baseCents + (pickup?.amountCents ?? 0) + lines.reduce((sum, addon) => sum + addon.amountCents, 0);
	return { baseCents, pickup, addons: lines, totalCents };
}
