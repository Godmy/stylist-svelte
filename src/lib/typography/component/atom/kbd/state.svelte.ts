import type { RecipeKbd } from '$stylist/typography/interface/recipe/kbd';

export function createKbdState(props: RecipeKbd) {
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
