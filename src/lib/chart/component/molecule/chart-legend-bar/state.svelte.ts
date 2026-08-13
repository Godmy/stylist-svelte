import { ChartLegendBarManager } from '$stylist/chart/class/manager/chart-legend-bar';
import { ClassNamesManager } from '$stylist/layout/class/object-manager/class-names';
import type { RecipeChartLegendBar } from '$stylist/chart/interface/recipe/chart-legend-bar';

export function createChartLegendBarState(props: RecipeChartLegendBar) {
	const className = $derived(ClassNamesManager.merge('chart-legend-bar', props.class));
	const labelText = $derived(props.text ?? '');
	const labelTextWidth = $derived(ChartLegendBarManager.measureTextWidth(labelText));
	const valueLabel = $derived(props.valueLabel ?? String(props.value));

	return {
		get className() {
			return className;
		},
		get labelText() {
			return labelText;
		},
		get labelTextWidth() {
			return labelTextWidth;
		},
		get valueLabel() {
			return valueLabel;
		}
	};
}

export default createChartLegendBarState;
