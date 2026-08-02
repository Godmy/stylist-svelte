import type { RecipeWbdRationaleDigest } from '$stylist/wbd/interface/recipe/rationale-digest';

export function createWbdRationaleDigestState(props: RecipeWbdRationaleDigest) {
	const className = $derived(props.class ?? '');
	const items = $derived([...props.items].sort((a, b) => b.roundNumber - a.roundNumber));

	return {
		get items() {
			return items;
		},
		get className() {
			return className;
		}
	};
}

export default createWbdRationaleDigestState;
