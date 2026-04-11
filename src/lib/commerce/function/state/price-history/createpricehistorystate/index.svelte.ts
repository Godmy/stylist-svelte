import { PriceHistoryStyleManager } from '$stylist/commerce/class/style-manager/price-history';
import type { PriceHistoryProps } from '../pricehistoryprops';

export function createPriceHistoryState(props: PriceHistoryProps) {
	const chartHeight = 200;
	const chartWidth = 400;

	const data = $derived(props.data ?? []);
	const minPrice = $derived(data.length > 0 ? Math.min(...data.map((d) => d.price)) : 0);
	const maxPrice = $derived(data.length > 0 ? Math.max(...data.map((d) => d.price)) : 100);
	const priceRange = $derived(maxPrice - minPrice || 1);

	const containerClass = $derived(PriceHistoryStyleManager.getContainerClass(props.class ?? ''));
	const titleClass = $derived(PriceHistoryStyleManager.getTitleClass());
	const chartContainerClass = $derived(PriceHistoryStyleManager.getChartContainerClass());
	const noDataClass = $derived(PriceHistoryStyleManager.getNoDataClass());
	const infoClass = $derived(PriceHistoryStyleManager.getInfoClass());
	const infoTextClass = $derived(PriceHistoryStyleManager.getInfoTextClass());

	return {
		chartHeight,
		chartWidth,
		get data() { return data; },
		get minPrice() { return minPrice; },
		get maxPrice() { return maxPrice; },
		get priceRange() { return priceRange; },
		get containerClass() { return containerClass; },
		get titleClass() { return titleClass; },
		get chartContainerClass() { return chartContainerClass; },
		get noDataClass() { return noDataClass; },
		get infoClass() { return infoClass; },
		get infoTextClass() { return infoTextClass; }
	};
}

export default createPriceHistoryState;
