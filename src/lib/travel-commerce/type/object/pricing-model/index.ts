/** Everything needed to compute a tour's price for a given set of guests (see `calculateBookingTotalCents`). Cents are integer US cents, same convention as the rest of the site. */
export type PricingModel = {
	priceUnit: 'per_person' | 'per_tour';
	/** Adult per-person rate (`per_person`) or the total price at the smallest listed group size (`per_tour`). */
	basePriceCents: number;
	/** Child (~5-12) rate — `per_person` tours only. Falls back to the adult rate when absent. */
	childPriceCents?: number;
	/** `per_tour` tours only — total price by headcount, smallest group first. */
	groupPricing?: { participants: number; priceCents: number }[];
	/** Percent off the adult per-person rate for each senior (пенсионер), e.g. `10` for 10%. */
	seniorDiscountPercent: number;
};
