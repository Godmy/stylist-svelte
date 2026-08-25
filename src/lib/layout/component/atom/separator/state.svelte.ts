import { TOKEN_ORIENTATION } from '$stylist/layout/const/array/orientation';
import type { RecipeSeparator } from '$stylist/layout/interface/recipe/separator';

export function createSeparatorState(props: RecipeSeparator) {
	const orientation = $derived(props.orientation ?? TOKEN_ORIENTATION[0]);
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
