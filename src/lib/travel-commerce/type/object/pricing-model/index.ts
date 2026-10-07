import type { TourAddon } from '$stylist/travel-commerce/type/object/tour-addon';

/** Everything needed to compute a tour's price for a given set of guests (see `calculateBookingQuote`). Cents are integer US cents, same convention as the rest of the site. */
export type PricingModel = {
	priceUnit: 'per_person' | 'per_tour';
	/** Adult per-person rate (`per_person`) or the total price at the smallest listed group size (`per_tour`). */
	basePriceCents: number;
	/** Child (5–12) rate — `per_person` tours only. Falls back to the adult rate when absent. */
	childPriceCents?: number;
	/** `per_tour` tours only — total price by headcount, smallest group first. */
	groupPricing?: { participants: number; priceCents: number }[];
	/** `per_tour` tours only — taken off the group total for every child 5–12 («детям от 5 до 11.9 лет скидка 20 долларов» = `2000`). */
	childDiscountCents?: number;
	/** Percent off the adult per-person rate for each senior (пенсионер), e.g. `10` for 10%. */
	seniorDiscountPercent: number;
	/**
	 * Hotel pickup tariff: every place the tour picks up from, with the
	 * surcharge for the whole car (0 = free). A place missing from the list is
	 * «по согласованию» (not priced). Absent → the tour has no pickup tariff
	 * (e.g. an airport meeting) and pickup never changes the price.
	 */
	pickupSurcharges?: { place: string; amountCents: number }[];
	/** Optional extras; the ones with an `amount` can be added to the total. */
	addons?: TourAddon[];
};
