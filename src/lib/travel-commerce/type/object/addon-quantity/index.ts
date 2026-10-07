/**
 * How much of one addon the visitor takes in the calculator. `per_person`
 * addons count people by guest category (e.g. zipline for 2 of 3 adults);
 * `per_booking` addons count units (e.g. 2 single rooms). Counts above the
 * party size are capped when priced.
 */
export type AddonQuantity = {
	/** Adults (incl. seniors and 13–18s, who pay the adult rate). */
	adults?: number;
	/** Children 5–12. */
	children?: number;
	/** Children under 5. */
	childrenUnder5?: number;
	/** Rooms / units for `per_booking` addons. */
	units?: number;
};
