import type { RecipeSeparator } from '$stylist/layout/interface/recipe/separator';

export function createSeparatorState(props: RecipeSeparator) {
	const orientation = $derived(props.orientation ?? 'horizontal');
	const decorative = $derived(props.decorative ?? false);

	return {
		get orientation() {
			return orientation;
		},
		get decorative() {
			return decorative;
		}
	};
}

export default createSeparatorState;
