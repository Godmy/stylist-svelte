import type { SVGAttributes } from 'svelte/elements';
import type { RecipeChartName as ChartNameProps } from '$stylist/chart/interface/recipe/chart-name';
import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';

function resolveClassName(className: unknown): string | undefined {
	return typeof className === 'string' ? className : undefined;
}

export function createChartNameState(props: ChartNameProps & SVGAttributes<SVGTextElement>) {
	const classes = $derived(mergeClassNames('c-chart-name', resolveClassName(props.class)));

	return {
		get classes() {
			return classes;
		}
	};
}

export default createChartNameState;
