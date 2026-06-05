import createTextPresenterState from '$stylist/typography/function/state/text-presenter/index.svelte';
import type { HeadingRecipe } from '$stylist/typography/interface/recipe/heading';
import type { TextRecipe } from '$stylist/typography/interface/recipe/text';

export function createHeadingState(props: HeadingRecipe) {
	const presenterState = createTextPresenterState(props as TextRecipe, 'c-typography-heading', [
		'level'
	]);
	const level = $derived(props.level ?? 2);
	const tag = $derived(`h${level}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6');
	return {
		get children() {
			return presenterState.children;
		},
		get text() {
			return presenterState.text;
		},
		get tag() {
			return tag;
		},
		get classes() {
			return presenterState.classes;
		},
		get attrs() {
			return presenterState.attrs;
		},
		get style() {
			return presenterState.style;
		},
		get restProps() {
			return presenterState.restProps;
		}
	};
}

export default createHeadingState;
