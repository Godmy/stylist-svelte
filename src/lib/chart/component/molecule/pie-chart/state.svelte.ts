import { ObjectManagerPieChart } from '$stylist/chart/class/object-manager/pie-chart';
import type { RecipePieChart } from '$stylist/chart/interface/recipe/pie-chart';
import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';

export function createPieChartState(props: RecipePieChart) {
	const data = $derived((props as any).data ?? []);
	const width = $derived((props as any).width ?? 200);
	const height = $derived((props as any).height ?? 200);
	const colors = $derived((props as any).colors);
	const classNameStr = $derived(props.class == null ? undefined : String(props.class));
	const resolvedColors = $derived(ObjectManagerPieChart.resolveColors(colors));
	const total = $derived(ObjectManagerPieChart.resolveTotal(data));
	const segments = $derived(ObjectManagerPieChart.resolveSegments(data, total, resolvedColors));
	const containerClasses = $derived(mergeClassNames('c-pie-chart', classNameStr));
	const legendClasses = $derived('c-pie-chart__legend');
	const legendItemClasses = $derived('c-pie-chart__legend-item');
	const legendSwatchClasses = $derived('c-pie-chart__legend-swatch');
	const legendTextClasses = $derived('c-pie-chart__legend-text');
	const restProps = $derived.by(() => {
		const {
			class: _class,
			data: _data,
			width: _width,
			height: _height,
			colors: _colors,
			...rest
		} = props;
		return rest;
	});

	return {
		get data() {
			return data;
		},
		get width() {
			return width;
		},
		get height() {
			return height;
		},
		get colors() {
			return colors;
		},
		get resolvedColors() {
			return resolvedColors;
		},
		get total() {
			return total;
		},
		get segments() {
			return segments;
		},
		get containerClasses() {
			return containerClasses;
		},
		get legendClasses() {
			return legendClasses;
		},
		get legendItemClasses() {
			return legendItemClasses;
		},
		get legendSwatchClasses() {
			return legendSwatchClasses;
		},
		get legendTextClasses() {
			return legendTextClasses;
		},
		get restProps() {
			return restProps;
		}
	};
}

export default createPieChartState;
