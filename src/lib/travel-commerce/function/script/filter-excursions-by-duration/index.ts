import type { Excursion } from '$stylist/travel-commerce/type/object/excursion';

const MAX_DURATION_BUCKET = 3;

/**
 * `selectedDays` are BookingFilterPanel's chip values (1, 2, 3 = "3+").
 * The highest bucket is open-ended — an excursion matches it at `durationDays`
 * equal to or above that value, not just exactly equal.
 */
export function filterExcursionsByDuration(
	excursions: Excursion[],
	selectedDays: number[]
): Excursion[] {
	if (selectedDays.length === 0) return excursions;
	return excursions.filter((excursion) => {
		if (excursion.durationDays == null) return false;
		return selectedDays.some((day) =>
			day >= MAX_DURATION_BUCKET
				? excursion.durationDays! >= MAX_DURATION_BUCKET
				: excursion.durationDays === day
		);
	});
}
