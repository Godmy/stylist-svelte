import { createAbbrState as createBaseAbbrState } from '$stylist/information/function/state/abbr';
import { AbbrStyleManager } from '$stylist/typography/class/style-manager/abbr';
import type { AbbrProps } from '$stylist/navigation/interface/component/link/other';

export function createAbbrState(props: AbbrProps) {
	const baseState = createBaseAbbrState(props);
	const classes = $derived(AbbrStyleManager.getAbbrClasses(baseState.classes));
	return {
		get classes() {
			return classes;
		},
		get title() {
			return baseState.title;
		}
	};
}

export default createAbbrState;
