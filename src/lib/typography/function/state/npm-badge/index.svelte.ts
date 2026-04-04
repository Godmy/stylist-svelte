import type { NpmBadgeRecipe as NpmBadgeProps } from '$stylist/typography/interface/recipe/npm-badge';
import { DataDisplayStyleManager } from '$stylist/typography/class/style-manager/data-display';
import { DEFAULT_BADGE_LABEL } from '$stylist/information/const/struct/badge-label';

export function createNpmBadgeState(props: NpmBadgeProps) {
	const type = $derived(props.type);
	const label = $derived(props.label ?? DEFAULT_BADGE_LABEL[type as keyof typeof DEFAULT_BADGE_LABEL]);
	const classes = $derived(
		DataDisplayStyleManager.getNpmBadgeClasses(
			type,
			typeof props.class === "string" ? props.class : undefined
		)
	);
	const linkClasses = $derived(DataDisplayStyleManager.getNpmBadgeLinkClasses());

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







