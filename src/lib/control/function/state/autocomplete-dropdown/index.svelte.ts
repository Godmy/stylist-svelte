import { AutocompleteDropdownStyleManager } from '$stylist/control/class/style-manager/autocomplete-dropdown';
import type {
	AutocompleteDropdownOption,
	AutocompleteDropdownProps
} from '$stylist/control/interface/component/autocomplete-dropdown/other';

export function createAutocompleteDropdownState(props: AutocompleteDropdownProps) {
	let isOpen = $state(false);
	let localValue = $state(props.value ?? '');

	$effect(() => {
		localValue = props.value ?? '';
	});

	const selectedOption = $derived(
		props.options.find((option) => option.value === localValue) ?? null
	);

	const handleSelect = (option: AutocompleteDropdownOption) => {
		localValue = option.value;
		props.onValueInput?.(option.value);
		props.onValueChange?.(option.value);
		props.onChange?.(option.value);
		isOpen = false;
	};

	const toggle = () => {
		isOpen = !isOpen;
	};

	const handleKeyDown = (event: KeyboardEvent) => {
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			toggle();
		}
	};

	const handleOptionKeyDown = (
		event: KeyboardEvent,
		option: AutocompleteDropdownOption
	) => {
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			handleSelect(option);
		}
	};

	let rootClass = $derived(AutocompleteDropdownStyleManager.root(props.class ?? ''));
	let triggerClass = $derived(AutocompleteDropdownStyleManager.trigger());
	let chevronClass = $derived(AutocompleteDropdownStyleManager.chevron(isOpen));
	let listboxClass = $derived(AutocompleteDropdownStyleManager.listbox());
	let optionClass = $derived(AutocompleteDropdownStyleManager.option());

	return {
		get isOpen() {
			return isOpen;
		},
		get localValue() {
			return localValue;
		},
		get selectedOption() {
			return selectedOption;
		},
		get rootClass() { return rootClass; },
		get triggerClass() { return triggerClass; },
		get chevronClass() { return chevronClass; },
		get listboxClass() { return listboxClass; },
		get optionClass() { return optionClass; },
		toggle,
		handleSelect,
		handleKeyDown,
		handleOptionKeyDown
	};
}

export default createAutocompleteDropdownState;
