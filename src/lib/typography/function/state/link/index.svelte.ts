import { createLinkState as createBaseLinkState } from '$stylist/information/function/state/link';
import { StyleManagerLink } from '$stylist/typography/class/style-manager/link';
import type { ThemeLinkRecipe } from '$stylist/typography/interface/recipe/link';

export function createLinkState(props: ThemeLinkRecipe) {
	const baseState = createBaseLinkState(props);
	const classes = $derived(StyleManagerLink.root(baseState.classes));
	return {
		get classes() {
			return classes;
		},
		get href() {
			return baseState.href;
		},
		get target() {
			return baseState.target;
		},
		get text() {
			return baseState.text;
		}
	};
}

export default createLinkState;
