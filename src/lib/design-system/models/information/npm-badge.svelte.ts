import type { NpmBadgeProps } from '$stylist/design-system/contracts';
import { DataDisplayStyleManager } from '$stylist/design-system/styles/information/data-display';
import { BADGE_LABELS } from '$stylist/design-system/defaults';

export function createNpmBadgeState(props: NpmBadgeProps) {
	const type = $derived(props.type);
	const label = $derived(props.label ?? BADGE_LABELS[type as keyof typeof BADGE_LABELS]);
	const classes = $derived(DataDisplayStyleManager.getNpmBadgeClasses(type, props.class));
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






