import { ClassNamesManager } from '$stylist/layout/class/object-manager/class-names';
import type { RecipeChartBackground } from '$stylist/chart/interface/recipe/chart-background';

function resolveClassName(className: unknown): string | undefined {
	return typeof className === 'string' ? className : undefined;
}

export function createChartBackgroundState(props: RecipeChartBackground) {
	const classes = $derived(ClassNamesManager.merge('c-chart-background', resolveClassName(props.class)));

	return {
		get classes() {
			return classes;
		}
	};
}

export default createChartBackgroundState;
