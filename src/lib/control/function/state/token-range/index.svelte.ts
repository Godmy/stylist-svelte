import type { TokenRangeControlProps } from '$stylist/control/type/struct/token-range-control-props';

export function createTokenRangeState(props: TokenRangeControlProps) {
	const initialValue =
		typeof props.value === 'number'
			? props.value
			: typeof props.definition.defaultValue === 'number'
				? props.definition.defaultValue
				: props.definition.min;

	let internalValue = $state<number>(initialValue);

	$effect(() => {
		if (typeof props.value === 'number' && props.value !== internalValue) {
			internalValue = props.value;
		}
	});

	function handleInput(event: Event) {
		const next = Number((event.currentTarget as HTMLInputElement).value);
		internalValue = Number.isNaN(next) ? props.definition.min : next;
		props.onChange?.(internalValue);
	}

	return {
		get internalValue() {
			return internalValue;
		},
		handleInput,
		definition: props.definition,
		onChange: props.onChange
	};
}

export default createTokenRangeState;
