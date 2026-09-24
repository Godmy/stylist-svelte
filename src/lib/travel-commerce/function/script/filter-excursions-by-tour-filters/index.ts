import type { Excursion } from '$stylist/travel-commerce/type/object/excursion';
import type { TourFilters } from '$stylist/booking/type/object/tour-filters';
import { filterExcursions } from '$stylist/travel-commerce/function/script/filter-excursions';

/**
 * Applies every criterion in `BookingFilterPanel`'s `TourFilters` at once:
 * categories (any-match, via `filterExcursions`), tour type, the two
 * flags, and physical load (all exact-match, all optional/skip-if-unset).
 */
export function filterExcursionsByTourFilters(
	excursions: Excursion[],
	filters: TourFilters
): Excursion[] {
	let result = filterExcursions(excursions, filters.categories);

	if (filters.tourType) {
		result = result.filter((excursion) => excursion.tourType === filters.tourType);
	}

	if (filters.recommendedForKids) {
		result = result.filter((excursion) => excursion.recommendedForKids === true);
	}

	if (filters.noEarlyDeparture) {
		result = result.filter((excursion) => excursion.noEarlyDeparture === true);
	}

	if (filters.physicalLoad) {
		result = result.filter((excursion) => excursion.physicalLoad === filters.physicalLoad);
	}

	return result;
}
