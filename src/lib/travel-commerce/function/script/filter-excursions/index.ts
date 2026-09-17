import type { Excursion } from '$stylist/travel-commerce/type/object/excursion';

export function filterExcursions(excursions: Excursion[], selectedCategories: string[]): Excursion[] {
	if (selectedCategories.length === 0) return excursions;
	return excursions.filter((excursion) =>
		selectedCategories.every((category) => excursion.categories.includes(category))
	);
}
