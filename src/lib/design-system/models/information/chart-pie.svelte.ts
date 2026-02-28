import type { PieChartProps } from '$stylist/design-system/contracts';
import { DataDisplayStyleManager } from '$stylist/design-system/styles/information/data-display';

export function createPieChartState(props: PieChartProps) {
	const containerClasses = $derived(DataDisplayStyleManager.getPieChartContainerClasses(props.class));
	const svgClasses = $derived(DataDisplayStyleManager.getPieChartSvgClasses());

	return {
		get containerClasses() {
			return containerClasses;
		},
		get svgClasses() {
			return svgClasses;
		}
	};
}

export default createPieChartState;



