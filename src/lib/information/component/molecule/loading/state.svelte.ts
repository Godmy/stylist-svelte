import type { HTMLAttributes } from 'svelte/elements';
import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import type { RecipeLoading } from '$stylist/information/interface/recipe/loading';

export function createLoadingState(props: RecipeLoading & HTMLAttributes<HTMLDivElement>) {
	const loading = $derived(props.loading ?? true);
	const label = $derived(props.label ?? 'Loading');
	const size = $derived(props.size ?? 'md');
	const classes = $derived(
		mergeClassNames(
			'information-loading',
			props.centered ?? true ? 'information-loading--centered' : '',
			props.class == null ? '' : String(props.class)
		)
	);

	return {
		get loading() {
			return loading;
		},
		get label() {
			return label;
		},
		get size() {
			return size;
		},
		get classes() {
			return classes;
		}
	};
}
