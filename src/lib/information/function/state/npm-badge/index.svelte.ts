import { NpmBadgeStyleManager } from '$stylist/information/class/style-manager/npm-badge';
import { DEFAULT_BADGE_LABEL } from '$stylist/information/const/record/badge-label';
import type { NpmBadgeRecipe } from '$stylist/information/interface/recipe/npm-badge';

export function createNpmBadgeState(props: NpmBadgeRecipe) {
	const type = $derived(props.type ?? 'version');
	const label = $derived(
		props.label ?? DEFAULT_BADGE_LABEL[type as keyof typeof DEFAULT_BADGE_LABEL]
	);
	const classes = $derived(
		NpmBadgeStyleManager.getNpmBadgeClasses(
			type,
			typeof props.class === 'string' ? props.class : undefined
		)
	);
	const linkClasses = $derived(NpmBadgeStyleManager.getNpmBadgeLinkClasses());

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
