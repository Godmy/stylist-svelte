import type { TokenControlComposerProps } from '$stylist/token/type/struct/token-control-composer-props';
import type { TokenRadioControlDefinition } from '$stylist/token/type/struct/radio-control-definition';
import type { TokenRangeControlDefinition } from '$stylist/token/type/struct/range-control-definition';
import type { TokenSelectControlDefinition } from '$stylist/token/type/struct/select-control-definition';
import type { TokenTextControlDefinition } from '$stylist/token/type/struct/text-control-definition';

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
			return typeof props.value === 'string'
				? props.value
				: String(props.value ?? props.definition.defaultValue ?? '');
		}
		return undefined;
	});

	const radioDefinition = $derived.by(() =>
		props.definition.controlKind === 'radio'
			? (props.definition satisfies TokenRadioControlDefinition)
			: undefined
	);
	const selectDefinition = $derived.by(() =>
		props.definition.controlKind === 'select'
			? (props.definition satisfies TokenSelectControlDefinition)
			: undefined
	);
	const rangeDefinition = $derived.by(() =>
		props.definition.controlKind === 'range'
			? (props.definition satisfies TokenRangeControlDefinition)
			: undefined
	);
	const textDefinition = $derived.by(() =>
		props.definition.controlKind === 'text'
			? (props.definition satisfies TokenTextControlDefinition)
			: undefined
	);

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
		get radioDefinition() {
			return radioDefinition;
		},
		get selectDefinition() {
			return selectDefinition;
		},
		get rangeDefinition() {
			return rangeDefinition;
		},
		get textDefinition() {
			return textDefinition;
		},
		definition: props.definition,
		onChange: props.onChange
	};
}

export default createTokenControlComposerState;
