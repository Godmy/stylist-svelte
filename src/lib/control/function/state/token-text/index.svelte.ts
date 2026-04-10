import type { TokenTextControlDefinition } from '$stylist/control/type/struct/text-control-definition';

export type TokenTextStateProps = {
	definition: TokenTextControlDefinition;
	value?: string;
	placeholder?: string;
	onChange?: (value: string) => void;
};

export function createTokenTextState(props: TokenTextStateProps) {
	const definition = $derived(props.definition);
	const value = $derived(props.value ?? '');
	const placeholder = $derived(props.placeholder ?? definition.placeholder ?? 'Enter value');
	const onChange = $derived(props.onChange);

	return {
		get definition() {
			return definition;
		},
		get value() {
			return value;
		},
		get placeholder() {
			return placeholder;
		},
		get onChange() {
			return onChange;
		}
	};
}

export default createTokenTextState;
