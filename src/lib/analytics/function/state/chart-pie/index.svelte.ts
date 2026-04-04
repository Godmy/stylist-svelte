import type { PieChartProps } from '$stylist/analytics/interface/recipe/pie-chart';
import { ObjectManagerChart } from '$stylist/analytics/class/object-manager/chart';
import { DataDisplayStyleManager } from '$stylist/typography/class/style-manager/data-display';

export function createPieChartState(props: PieChartProps & { width?: number; height?: number }) {
	const width = $derived(props.width ?? 200);
	const height = $derived(props.height ?? 200);
	const restProps = $derived(ObjectManagerChart.getPieChartRestProps(props));
	const segments = $derived(ObjectManagerChart.getPieChartSegments(props.data ?? [], width, height));
	const containerClasses = $derived(
		DataDisplayStyleManager.getPieChartContainerClasses(
			typeof props.class === 'string' ? props.class : undefined
		)
	);
	const svgClasses = $derived(DataDisplayStyleManager.getPieChartSvgClasses());

	return {
		get width() {
			return width;
		},
		get height() {
			return height;
		},
		get restProps() {
			return restProps;
		},
		get segments() {
			return segments;
		},
		get containerClasses() {
			return containerClasses;
		},
		get svgClasses() {
			return svgClasses;
		}
	};
}

export default createPieChartState;






