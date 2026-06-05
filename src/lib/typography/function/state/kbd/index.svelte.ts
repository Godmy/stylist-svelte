import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import type { ThemeKbdRecipe } from '$stylist/typography/interface/recipe/kbd';

export function createKbdState(props: ThemeKbdRecipe) {
	const classes = $derived(
		mergeClassNames('c-typography-kbd', typeof props.class === 'string' ? props.class : undefined)
	);

	return {
		get classes() {
			return classes;
		}
	};
}

export default createKbdState;
