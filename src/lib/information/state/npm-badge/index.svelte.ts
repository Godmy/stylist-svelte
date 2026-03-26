import type { NpmBadgeProps } from '$stylist/information/interface/badge';
import { DataDisplayStyleManager } from '$stylist/information/class/style-manager/data-display';
import { DEFAULT_BADGE_LABEL } from '$stylist/information/const/default/badge-label';

export function createNpmBadgeState(props: NpmBadgeProps) {
	const type = $derived(props.type);
	const label = $derived(props.label ?? DEFAULT_BADGE_LABEL[type as keyof typeof DEFAULT_BADGE_LABEL]);
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







