/**
 * Start and return of a tour for the calculator: the start row is «Выезд»
 * (excursions) or «Заезд» (tours); dates follow from the chosen start date
 * and `durationDays`, times come from the tour.
 */
export type TripInfo = {
	startLabel: string;
	departTime: string | null;
	returnTime: string | null;
	durationDays: number;
};
