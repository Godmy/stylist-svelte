import type { PieChartProps } from '$stylist/information/interface/chart';
import { DataDisplayStyleManager } from '$stylist/information/class/style-manager/data-display';

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







