import { ClassNamesManager } from '$stylist/layout/class/object-manager/class-names';
import type { HTMLAttributes } from 'svelte/elements';
import type { RecipeLoading } from '$stylist/animation/interface/recipe/loading';

export function createLoadingState(props: RecipeLoading & HTMLAttributes<HTMLDivElement>) {
	const loading = $derived(props.loading ?? true);
	const label = $derived(props.label ?? 'Loading');
	const size = $derived(props.size ?? 'md');
	const classes = $derived(
		ClassNamesManager.merge(
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
