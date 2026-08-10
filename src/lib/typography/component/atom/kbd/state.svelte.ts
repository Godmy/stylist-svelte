import type { RecipeThemeKbd } from '$stylist/typography/interface/recipe/kbd';

export function createKbdState(props: RecipeThemeKbd) {
	const classes = $derived(
		['c-typography-kbd', typeof props.class === 'string' ? props.class : undefined]
			.filter(Boolean)
			.join(' ')
	);

	return {
		get classes() {
			return classes;
		}
	};
}

export default createKbdState;
