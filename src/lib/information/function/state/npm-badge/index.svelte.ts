import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import { DEFAULT_BADGE_LABEL } from '$stylist/information/const/record/badge-label';
import type { RecipeNpmBadge } from '$stylist/information/interface/recipe/npm-badge';

export function createNpmBadgeState(props: RecipeNpmBadge) {
	const type = $derived(props.type ?? 'version');
	const label = $derived(
		props.label ?? DEFAULT_BADGE_LABEL[type as keyof typeof DEFAULT_BADGE_LABEL]
	);
	const classes = $derived(
		mergeClassNames(
			'npm-badge',
			`npm-badge--${type}`,
			typeof props.class === 'string' ? props.class : undefined
		)
	);
	const linkClasses = $derived('npm-badge-link');

	return {
		get type() {
			return type;
		},
		get label() {
			return label;
		},
		get classes() {
			return classes;
		},
		get linkClasses() {
			return linkClasses;
		}
	};
}

export default createNpmBadgeState;
