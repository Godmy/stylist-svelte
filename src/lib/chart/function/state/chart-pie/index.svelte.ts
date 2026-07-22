import { ObjectManagerChart } from '$stylist/chart/class/object-manager/chart';
import type { PieChartProps } from '$stylist/chart/interface/recipe/pie-chart-props';
import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';

export function createPieChartState(props: PieChartProps & { width?: number; height?: number }) {
	const width = $derived(props.width ?? 200);
	const height = $derived(props.height ?? 200);
	const restProps = $derived(ObjectManagerChart.getPieChartRestProps(props));
	const segments = $derived(
		ObjectManagerChart.getPieChartSegments(props.data ?? [], width, height)
	);
	const containerClasses = $derived(
		mergeClassNames('c-chart-pie', typeof props.class === 'string' ? props.class : undefined)
	);
	const svgClasses = $derived('c-chart-pie__svg');

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
