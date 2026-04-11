import type { TokenRadioControlProps } from '$stylist/control/type/struct/token-radio-control-props';
import type { TokenValue } from '$stylist/control/type/struct/token-value';

export function createTokenRadioState(props: TokenRadioControlProps) {
	let internalValue = $state<TokenValue>(
		props.value ?? props.definition.defaultValue ?? props.definition.options[0]?.value ?? ''
	);

	$effect(() => {
		if (props.value !== undefined && props.value !== internalValue) {
			internalValue = props.value;
		}
	});

	function selectOption(next: TokenValue) {
		internalValue = next;
		props.onChange?.(next);
	}

	return {
		get internalValue() {
			return internalValue;
		},
		selectOption,
		definition: props.definition,
		onChange: props.onChange
	};
}

export default createTokenRadioState;
