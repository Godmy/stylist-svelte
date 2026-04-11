import { PriceMatchStyleManager } from '$stylist/commerce/class/style-manager/price-match';
import type { PriceMatchProps } from '../pricematchprops';

export function createPriceMatchState(props: PriceMatchProps) {
	const competitorPrices = $derived(props.competitorPrices ?? []);
	const bestPrice = $derived(
		competitorPrices.length > 0
			? Math.min(...competitorPrices.map((p) => p.price))
			: null
	);
	const isLowerAvailable = $derived(bestPrice !== null && bestPrice < (props.targetPrice ?? 0));

	const containerClass = $derived(
		PriceMatchStyleManager.getContainerClass(
			isLowerAvailable
				? PriceMatchStyleManager.getLowerAvailableClass()
				: PriceMatchStyleManager.getBestPriceClass(),
			props.class ?? ''
		)
	);
	const titleClass = $derived(PriceMatchStyleManager.getTitleClass());
	const priceInfoClass = $derived(PriceMatchStyleManager.getPriceInfoClass());
	const yourPriceClass = $derived(PriceMatchStyleManager.getYourPriceClass());
	const lowerPriceClass = $derived(PriceMatchStyleManager.getLowerPriceClass());
	const bestPriceClass = $derived(PriceMatchStyleManager.getBestPriceTextClass());
	const boldClass = $derived(PriceMatchStyleManager.getBoldClass());
	const competitorsContainerClass = $derived(PriceMatchStyleManager.getCompetitorsContainerClass());
	const competitorRowClass = $derived(PriceMatchStyleManager.getCompetitorRowClass());
	const buttonClass = $derived(PriceMatchStyleManager.getButtonClass());

	return {
		get competitorPrices() { return competitorPrices; },
		get bestPrice() { return bestPrice; },
		get isLowerAvailable() { return isLowerAvailable; },
		get containerClass() { return containerClass; },
		get titleClass() { return titleClass; },
		get priceInfoClass() { return priceInfoClass; },
		get yourPriceClass() { return yourPriceClass; },
		get lowerPriceClass() { return lowerPriceClass; },
		get bestPriceClass() { return bestPriceClass; },
		get boldClass() { return boldClass; },
		get competitorsContainerClass() { return competitorsContainerClass; },
		get competitorRowClass() { return competitorRowClass; },
		get buttonClass() { return buttonClass; }
	};
}

export default createPriceMatchState;
