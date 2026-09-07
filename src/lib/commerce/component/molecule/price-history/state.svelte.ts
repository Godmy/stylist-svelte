import type { HTMLAttributes } from 'svelte/elements';
import type { RecipePriceHistory } from '$stylist/commerce/interface/recipe/price-history';

export function createPriceHistoryState(
	props: RecipePriceHistory & HTMLAttributes<HTMLDivElement>
) {
	const chartHeight = 200;
	const chartWidth = 400;

	const data = $derived(props.data ?? []);
	const minPrice = $derived(data.length > 0 ? Math.min(...data.map((d) => d.price)) : 0);
	const maxPrice = $derived(data.length > 0 ? Math.max(...data.map((d) => d.price)) : 100);
	const priceRange = $derived(maxPrice - minPrice || 1);
	const containerClass = $derived(['price-history', props.class].filter(Boolean).join(' '));

	return {
		chartHeight,
		chartWidth,
		get containerClass() {
			return containerClass;
		},
		get titleClass() {
			return 'price-history__title';
		},
		get chartContainerClass() {
			return 'price-history__chart-container';
		},
		get noDataClass() {
			return 'price-history__no-data';
		},
		get infoClass() {
			return 'price-history__info';
		},
		get infoTextClass() {
			return 'price-history__info-text';
		},
		get data() {
			return data;
		},
		get minPrice() {
			return minPrice;
		},
		get maxPrice() {
			return maxPrice;
		},
		get priceRange() {
			return priceRange;
		}
	};
}
