import type { RecipeInlineCode } from '$stylist/typography/interface/recipe/inline-code';

export function createInlineCodeState(getProps: () => RecipeInlineCode) {
	const props = $derived(getProps());
	const classes = $derived(
		['c-typography-inline-code', typeof props.class === 'string' ? props.class : undefined]
			.filter(Boolean)
			.join(' ')
	);

	return {
		get classes() {
			return classes;
		}
	};
}

export default createInlineCodeState;
