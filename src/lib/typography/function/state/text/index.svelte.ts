import type { TextRecipe } from '$stylist/typography/interface/recipe/text';
import createTextPresenterState from '$stylist/typography/function/state/text-presenter/index.svelte';

export function createTextState(props: TextRecipe) {
	return createTextPresenterState(props, 'c-typography-text');
}

export default createTextState;
