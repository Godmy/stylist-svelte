import type { RecipeAbbr as AbbrProps } from '$stylist/typography/interface/recipe/abbr';

export function createAbbrState(getProps: () => AbbrProps) {
	const props = $derived(getProps());
	const title = $derived(props.title ?? '');
	const classes = $derived(
		['c-typography-abbr', typeof props.class === 'string' ? props.class : undefined]
			.filter(Boolean)
			.join(' ')
	);

	return {
		get title() {
			return title;
		},
		get classes() {
			return classes;
		}
	};
}

export default createAbbrState;
