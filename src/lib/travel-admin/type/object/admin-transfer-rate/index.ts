/** One row of the location x transport pricing matrix (see 002-Claude, section 3.10). */
export type AdminTransferRate = {
	id: number;
	fromPointId: number;
	toPointId: number;
	vehicleType: string;
	minPeople: number;
	maxPeople: number;
	priceCents: number;
};
