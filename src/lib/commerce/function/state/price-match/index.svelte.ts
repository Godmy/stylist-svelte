import type { HTMLAttributes } from 'svelte/elements';
import type { RecipePriceMatch } from '$stylist/commerce/interface/recipe/price-match';

export function createPriceMatchState(props: RecipePriceMatch & HTMLAttributes<HTMLDivElement>) {
	const competitorPrices = $derived(props.competitorPrices ?? []);
	const bestPrice = $derived(
		competitorPrices.length > 0 ? Math.min(...competitorPrices.map((p) => p.price)) : null
	);
	const isLowerAvailable = $derived(bestPrice !== null && bestPrice < (props.targetPrice ?? 0));
	const containerClass = $derived(
		[
			'price-match',
			isLowerAvailable ? 'price-match__lower-available' : 'price-match__best-price',
			props.class
		]
			.filter(Boolean)
			.join(' ')
	);

	return {
		get containerClass() {
			return containerClass;
		},
		get titleClass() {
			return 'price-match__title';
		},
		get priceInfoClass() {
			return 'price-match__price-info';
		},
		get yourPriceClass() {
			return 'price-match__your-price';
		},
		get boldClass() {
			return 'price-match__bold';
		},
		get lowerPriceClass() {
			return 'price-match__lower-price';
		},
		get bestPriceClass() {
			return 'price-match__best-price-text';
		},
		get competitorsContainerClass() {
			return 'price-match__competitors-container';
		},
		get competitorRowClass() {
			return 'price-match__competitor-row';
		},
		get buttonClass() {
			return 'price-match__button';
		},
		get competitorPrices() {
			return competitorPrices;
		},
		get bestPrice() {
			return bestPrice;
		},
		get isLowerAvailable() {
			return isLowerAvailable;
		}
	};
}
