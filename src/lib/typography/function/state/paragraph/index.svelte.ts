import type { TextRecipe } from '$stylist/typography/interface/recipe/text';
import createTextPresenterState from '$stylist/typography/function/state/text-presenter/index.svelte';

export function createParagraphState(props: TextRecipe) {
	return createTextPresenterState(props, 'c-typography-paragraph');
}

export default createParagraphState;
