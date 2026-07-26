import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import type { RecipeSpinner } from '$stylist/information/interface/recipe/spinner';

export function createSpinnerState(props: RecipeSpinner) {
	const size = $derived(props.size ?? 'md');
	const label = $derived(props.label ?? 'Loading');
	const classes = $derived(
		mergeClassNames(
			'information-spinner',
			`information-spinner--${size}`,
			props.class == null ? '' : String(props.class)
		)
	);

	return {
		get classes() {
			return classes;
		},
		get label() {
			return label;
		}
	};
}
