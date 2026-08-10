import type { RecipeVerticalBarsChart } from '$stylist/chart/interface/recipe/vertical-bars-chart';
import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';

export function createVerticalBarsChartState(props: RecipeVerticalBarsChart) {
	const className = $derived(mergeClassNames('vertical-bars-chart', props.class));
	const title = $derived(props.title);
	const items = $derived(props.items);
	const height = $derived(props.height ?? '8rem');
	const barWidth = $derived(props.barWidth ?? '1.75rem');
	const gap = $derived(props.gap ?? '0.75rem');
	const color = $derived(props.color ?? 'var(--color-primary-500, #3b82f6)');

	return {
		get className() {
			return className;
		},
		get title() {
			return title;
		},
		get items() {
			return items;
		},
		get height() {
			return height;
		},
		get barWidth() {
			return barWidth;
		},
		get gap() {
			return gap;
		},
		get color() {
			return color;
		}
	};
}

export default createVerticalBarsChartState;
