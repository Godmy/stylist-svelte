import type { RecipeChartBackground } from '$stylist/chart/interface/recipe/chart-background';
import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';

function resolveClassName(className: unknown): string | undefined {
	return typeof className === 'string' ? className : undefined;
}

export function createChartBackgroundState(props: RecipeChartBackground) {
	const classes = $derived(mergeClassNames('c-chart-background', resolveClassName(props.class)));

	return {
		get classes() {
			return classes;
		}
	};
}

export default createChartBackgroundState;
