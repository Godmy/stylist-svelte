import type { TokenSelectControlProps } from '$stylist/control/type/struct/token-select-control-props';
import type { TokenValue } from '$stylist/control/type/struct/token-value';

export function createTokenSelectState(props: TokenSelectControlProps) {
	const valueToIndex = (candidate: TokenValue) =>
		Math.max(
			0,
			props.definition.options.findIndex((option) => option.value === candidate)
		);

	let internalIndex = $state<number>(
		valueToIndex(props.value ?? props.definition.defaultValue ?? props.definition.options[0]?.value ?? '')
	);

	$effect(() => {
		if (props.value !== undefined) {
			const nextIndex = valueToIndex(props.value);
			if (nextIndex !== internalIndex) {
				internalIndex = nextIndex;
			}
		}
	});

	function handleChange(event: Event) {
		const nextIndex = Number((event.currentTarget as HTMLSelectElement).value);
		internalIndex = Number.isNaN(nextIndex) ? 0 : nextIndex;
		props.onChange?.(props.definition.options[internalIndex]?.value ?? props.definition.options[0]?.value ?? '');
	}

	return {
		get internalIndex() {
			return internalIndex;
		},
		handleChange,
		valueToIndex,
		definition: props.definition,
		onChange: props.onChange
	};
}

export default createTokenSelectState;
