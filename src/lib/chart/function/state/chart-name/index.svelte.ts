import type { ChartNameRecipe as ChartNameProps } from '$stylist/chart/interface/recipe/chart-name';
import { ChartStyleManager } from '$stylist/chart/class/style-manager/chart';

function resolveClassName(className: unknown): string | undefined {
	return typeof className === 'string' ? className : undefined;
}

export function createChartNameState(props: ChartNameProps) {
	const classes = $derived(ChartStyleManager.getChartNameClasses(resolveClassName(props.class)));

	return {
		get classes() { return classes; }
	};
}

export default createChartNameState;
