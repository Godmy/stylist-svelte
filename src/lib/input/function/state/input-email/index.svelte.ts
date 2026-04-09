import type { IInputEmailProps } from '$stylist/input/interface/component/input/other';

export const createInputEmailState = (props: IInputEmailProps) => {
	return {
		get variant() {
			return props.variant;
		},
		get size() {
			return props.size;
		},
		get disabled() {
			return props.disabled;
		},
		get error() {
			return props.error;
		},
		get block() {
			return props.block;
		},
		get className() {
			return props.class;
		},
		get label() {
			return props.label;
		},
		get id() {
			return props.id;
		},
		get showRequiredIndicator() {
			return props.showRequiredIndicator;
		},
		get errors() {
			return props.errors;
		},
		get showErrors() {
			return props.showErrors;
		},
		get helperText() {
			return props.helperText;
		},
		get showHelperWhenError() {
			return props.showHelperWhenError;
		},
		get placeholder() {
			return props.placeholder;
		},
		get autocomplete() {
			return props.autocomplete;
		},
		get name() {
			return props.name;
		},
		get required() {
			return props.required;
		},
		get readonly() {
			return props.readonly;
		},
		get autofocus() {
			return props.autofocus;
		},
		get pattern() {
			return props.pattern;
		},
		get minlength() {
			return props.minlength;
		},
		get maxlength() {
			return props.maxlength;
		}
	};
};

export default createInputEmailState;
