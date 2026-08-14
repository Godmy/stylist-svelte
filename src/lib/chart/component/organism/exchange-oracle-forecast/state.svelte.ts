import { ClassNamesManager } from '$stylist/layout/class/object-manager/class-names';
import { ExchangeOracleForecastManager } from '$stylist/chart/class/manager/exchange-oracle-forecast';
import type { RecipeExchangeOracleForecast } from '$stylist/chart/interface/recipe/exchange-oracle-forecast';

export default function createExchangeOracleForecastState(props: RecipeExchangeOracleForecast) {
	const className = $derived(ClassNamesManager.merge('exchange-oracle-forecast', props.class));
	const layout = $derived.by(() =>
		ExchangeOracleForecastManager.createLayout(props.history, props.forecast, {
			width: props.width,
			height: props.height,
			currency: props.currency,
			timeLabelStep: props.timeLabelStep
		})
	);

	return {
		get className() {
			return className;
		},
		get layout() {
			return layout;
		}
	};
}
