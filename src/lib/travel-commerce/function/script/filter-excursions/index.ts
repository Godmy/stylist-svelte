import type { Excursion } from '$stylist/travel-commerce/type/object/excursion';

/** Matches an excursion tagged with ANY selected category (checklist-style filter — checking more boxes broadens results, doesn't narrow to their intersection). */
export function filterExcursions(excursions: Excursion[], selectedCategories: string[]): Excursion[] {
	if (selectedCategories.length === 0) return excursions;
	return excursions.filter((excursion) =>
		selectedCategories.some((category) => excursion.categories.includes(category))
	);
}
