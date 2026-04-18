import type { TokenTextStateProps } from '$stylist/control/type/alias/token-text-state-props';

export function createTokenTextState(props: TokenTextStateProps) {
	const definition = $derived(props.definition);
	const placeholder = $derived(props.placeholder ?? definition.placeholder ?? 'Enter value');
	const onChange = $derived(props.onChange);
	let internalValue = $state(props.value ?? '');

	$effect(() => {
		internalValue = props.value ?? '';
	});

	return {
		get definition() {
			return definition;
		},
		get value() {
			return internalValue;
		},
		get placeholder() {
			return placeholder;
		},
		get onChange() {
			return onChange;
		},
		handleInput(event: Event) {
			internalValue = (event.target as HTMLInputElement).value;
			onChange?.(internalValue);
		}
	};
}

export default createTokenTextState;
