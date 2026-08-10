import type { RecipeSelector } from '$stylist/control/interface/recipe/selector';

export function createSelectorState(props: RecipeSelector) {
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

	const containerClass = $derived(['c-selector', className].filter(Boolean).join(' '));
	const labelClass = 'c-selector__label';
	const fieldWrapperClass = 'c-selector__field';
	const selectButtonClass = $derived(
		[
			'c-selector__trigger',
			hasError ? 'c-selector__trigger--error' : '',
			disabled ? 'c-selector__trigger--disabled' : ''
		]
			.filter(Boolean)
			.join(' ')
	);
	const chevronClass = 'c-selector__chevron';
	const errorClass = 'c-selector__error';
	const valueClass = $derived(selectedOption ? 'c-selector__value' : 'c-selector__placeholder');

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
