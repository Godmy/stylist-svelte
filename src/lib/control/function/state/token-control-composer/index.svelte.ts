import type { TokenControlComposerProps } from '$stylist/control/type/struct/token-control-composer-props';

export function createTokenControlComposerState(props: TokenControlComposerProps) {
	const controlKind = $derived(props.definition.controlKind);
	const value = $derived(props.value);

	const rangeValue = $derived.by(() => {
		if (controlKind === 'range') {
			return typeof props.value === 'number'
				? props.value
				: Number(props.definition.defaultValue ?? props.definition.min);
		}
		return undefined;
	});

	const textValue = $derived.by(() => {
		if (controlKind !== 'range' && controlKind !== 'radio' && controlKind !== 'select') {
			return typeof props.value === 'string' ? props.value : String(props.value ?? props.definition.defaultValue ?? '');
		}
		return undefined;
	});

	return {
		get controlKind() {
			return controlKind;
		},
		get value() {
			return value;
		},
		get rangeValue() {
			return rangeValue;
		},
		get textValue() {
			return textValue;
		},
		definition: props.definition,
		onChange: props.onChange
	};
}

export default createTokenControlComposerState;
