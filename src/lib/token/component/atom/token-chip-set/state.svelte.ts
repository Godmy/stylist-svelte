import type { RecipeTokenChipSet } from '$stylist/token/interface/recipe/token-chip-set';

export function createTokenChipSetState(props: RecipeTokenChipSet) {
	const displayTokens = $derived(
		props.dedupe ? Array.from(new Set(props.tokens)) : [...props.tokens]
	);
	const title = $derived(props.title);
	const className = $derived(props.class ?? '');

	return {
		get displayTokens() {
			return displayTokens;
		},
		get title() {
			return title;
		},
		get className() {
			return className;
		},
		tokens: props.tokens,
		value: props.value,
		dedupe: props.dedupe ?? true,
		onSelect: props.onSelect
	};
}

export default createTokenChipSetState;
