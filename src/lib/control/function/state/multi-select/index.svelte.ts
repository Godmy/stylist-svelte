import type { MultiSelectProps } from '$stylist/control/interface/component/multi-select/other';
import type { MultiSelectOption } from '$stylist/control/interface/component/multi-select/other';

export function createMultiSelectState(props: MultiSelectProps) {
	const options = $derived(props.options ?? []);
	const value = $derived(props.value ?? []);
	const placeholder = $derived(props.placeholder ?? 'Select options...');
	const disabled = $derived(props.disabled ?? false);
	const searchable = $derived(props.searchable ?? true);
	const maxSelections = $derived(props.maxSelections ?? 0);
	const className = $derived(props.class ?? '');
	const dropdownClass = $derived(props.dropdownClass ?? '');
	const selectedClass = $derived(props.selectedClass ?? '');
	const optionClass = $derived(props.optionClass ?? '');
	const placeholderClass = $derived(props.placeholderClass ?? '');
	const searchInputClass = $derived(props.searchInputClass ?? '');

	const isOpen = $state(false);
	const selectedValues = $state<string[]>(value);
	const searchQuery = $state('');
	const containerRef = { current: null as HTMLDivElement | null };
	const dropdownRef = { current: null as HTMLDivElement | null };

	$effect(() => {
		if (JSON.stringify(selectedValues) !== JSON.stringify(value)) {
			selectedValues = [...value];
		}
	});

	function getFilteredOptions(): MultiSelectOption[] {
		if (!searchQuery) return options;
		return options.filter(
			(option) =>
				option.label.toLowerCase().includes(searchQuery.toLowerCase()) &&
				!selectedValues.includes(option.value)
		);
	}

	function emitChange(nextValue: string[]): void {
		props.onChange?.(nextValue);
	}

	function selectOption(option: MultiSelectOption): void {
		if (option.disabled) return;
		if (selectedValues.includes(option.value)) {
			selectedValues = selectedValues.filter((v) => v !== option.value);
		} else {
			if (maxSelections > 0 && selectedValues.length >= maxSelections) return;
			selectedValues = [...selectedValues, option.value];
		}
		emitChange(selectedValues);
	}

	function removeOption(optionValue: string): void {
		selectedValues = selectedValues.filter((v) => v !== optionValue);
		emitChange(selectedValues);
	}

	function clearSelections(): void {
		selectedValues = [];
		emitChange([]);
	}

	function toggleDropdown(): void {
		if (disabled) return;
		isOpen = !isOpen;
	}

	return {
		get options() { return options; },
		get placeholder() { return placeholder; },
		get disabled() { return disabled; },
		get searchable() { return searchable; },
		get maxSelections() { return maxSelections; },
		get className() { return className; },
		get dropdownClass() { return dropdownClass; },
		get selectedClass() { return selectedClass; },
		get optionClass() { return optionClass; },
		get placeholderClass() { return placeholderClass; },
		get searchInputClass() { return searchInputClass; },
		get isOpen() { return isOpen; },
		get selectedValues() { return selectedValues; },
		get searchQuery() { return searchQuery; },
		set searchQuery(v: string) { searchQuery = v; },
		get containerRef() { return containerRef.current; },
		set containerRef(v: HTMLDivElement | null) { containerRef.current = v; },
		get dropdownRef() { return dropdownRef.current; },
		set dropdownRef(v: HTMLDivElement | null) { dropdownRef.current = v; },
		getFilteredOptions,
		selectOption,
		removeOption,
		clearSelections,
		toggleDropdown,
		onInput: props.onInput
	};
}

export default createMultiSelectState;
