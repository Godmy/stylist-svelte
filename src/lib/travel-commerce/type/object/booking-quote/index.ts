import type { AddonQuantity } from '$stylist/travel-commerce/type/object/addon-quantity';

/** A tour price broken down into what the calculator shows line by line. US cents. */
export type BookingQuote = {
	/** The tour itself for the given guests. */
	baseCents: number;
	/**
	 * Hotel pickup surcharge for the chosen place: `amountCents: null` when the
	 * place is outside the tour's tariff («по согласованию»); `null` when the
	 * tour has no pickup tariff at all.
	 */
	pickup: { place: string; amountCents: number | null } | null;
	/** Addons taken (fixed-price ones, count > 0), with the counts actually charged. */
	addons: { id: string; label: string; quantity: AddonQuantity; amountCents: number }[];
	totalCents: number;
};
