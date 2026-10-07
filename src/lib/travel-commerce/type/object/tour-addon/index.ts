export type TourAddon = {
	id: string;
	label: string;
	description: string;
	/** Display price, e.g. «+$30 взр. / +$15 реб.» or «согласовать с гидом». */
	price: string;
	selected?: boolean;
	/**
	 * Machine-readable price, when the addon has a fixed one: the visitor can
	 * tick it in the tour calculator and it is added to the total.
	 * `per_person`: adults, seniors and 13–18s pay `adultCents`, 5–12s
	 * `childCents`, under-5s `childUnder5Cents`. `per_booking`: once per order
	 * (e.g. a single room). Absent → «по согласованию», never in totals.
	 */
	amount?:
		| { unit: 'per_person'; adultCents: number; childCents: number; childUnder5Cents: number }
		| { unit: 'per_booking'; amountCents: number };
};
