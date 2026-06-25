import type { TokenChipSetProps } from '$stylist/token/type/struct/token-chip-set-props';

export function createTokenChipSetState(props: TokenChipSetProps) {
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
