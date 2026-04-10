import type { SelectorProps } from '$stylist/control/type/struct/selector-props';

export function createSelectorState(props: SelectorProps) {
	const id = $derived(props.id);
	const label = $derived(props.label);
	const value = $derived(props.value ?? '');
	const options = $derived(props.options ?? []);
	const errors = $derived(props.errors ?? []);
	const required = $derived(props.required ?? false);
	const disabled = $derived(props.disabled ?? false);
	const placeholder = $derived(props.placeholder);
	const className = $derived(props.class ?? '');
	const open = $derived(props.open ?? false);

	const labelId = $derived(`${id}-label`);
	const triggerId = $derived(`${id}-trigger`);
	const nativeId = $derived(`${id}-native`);

	const hasError = $derived(errors.length > 0);
	const errorId = $derived(`${id}-error`);
	const selectedOption = $derived(options.find((option) => option.value === value));

	const containerClass = $derived(`mb-4 ${className}`);
	const labelClass = 'block text-sm font-medium mb-1 text-[--color-text-primary]';
	const fieldWrapperClass = 'relative';
	const selectButtonClass = $derived(
		`w-full px-3 py-2 text-left bg-[--color-background-surface] border ${hasError ? 'border-[--color-danger-500]' : 'border-[--color-border-primary]'} rounded-md shadow-sm cursor-default focus:outline-none focus:ring-2 focus:ring-[--color-primary-500] focus:border-[--color-primary-500] ${disabled ? 'bg-[--color-background-disabled] cursor-not-allowed' : ''}`
	);
	const chevronClass = 'ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none';
	const errorClass = 'mt-1 text-sm text-[--color-danger-500]';
	const valueClass = $derived(selectedOption ? 'text-[--color-text-primary]' : 'text-[--color-text-secondary]');

	function handleClick() {
		if (props.onToggle && !disabled) {
			props.onToggle();
		}
	}

	return {
		get id() {
			return id;
		},
		get label() {
			return label;
		},
		get value() {
			return value;
		},
		get options() {
			return options;
		},
		get errors() {
			return errors;
		},
		get required() {
			return required;
		},
		get disabled() {
			return disabled;
		},
		get placeholder() {
			return placeholder;
		},
		get className() {
			return className;
		},
		get open() {
			return open;
		},
		get labelId() {
			return labelId;
		},
		get triggerId() {
			return triggerId;
		},
		get nativeId() {
			return nativeId;
		},
		get hasError() {
			return hasError;
		},
		get errorId() {
			return errorId;
		},
		get selectedOption() {
			return selectedOption;
		},
		get containerClass() {
			return containerClass;
		},
		labelClass,
		fieldWrapperClass,
		get selectButtonClass() {
			return selectButtonClass;
		},
		chevronClass,
		errorClass,
		get valueClass() {
			return valueClass;
		},
		handleClick
	};
}

export default createSelectorState;
