import type { ChartBackgroundProps as ChartBackgroundRecipe } from '$stylist/chart/interface/recipe/chart-background-props';
import { ChartStyleManager } from '$stylist/chart/class/style-manager/chart';

function resolveClassName(className: unknown): string | undefined {
	return typeof className === 'string' ? className : undefined;
}

export function createChartBackgroundState(props: ChartBackgroundRecipe) {
	const classes = $derived(ChartStyleManager.getChartBackgroundClasses(resolveClassName(props.class)));

	return {
		get classes() { return classes; }
	};
}

export default createChartBackgroundState;
