import type { MultiSelectProps } from '$stylist/control/interface/component/multi-select/other';
import type { MultiSelectOption } from '$stylist/control/interface/component/multi-select/other';
import { MultiSelectStyleManager } from '$stylist';

const ChevronDown = 'chevron-down';
const X = 'x';

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

	let isOpen = $state(false);
	let selectedValues = $state<string[]>(value);
	let searchQuery = $state('');
	const containerRef = { current: null as HTMLDivElement | null };
	const dropdownRef = { current: null as HTMLDivElement | null };

	$effect(() => {
		if (JSON.stringify(selectedValues) !== JSON.stringify(value)) {
			selectedValues = [...value];
		}
	});

	$effect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				isOpen &&
				containerRef.current &&
				dropdownRef.current &&
				!containerRef.current.contains(event.target as Node) &&
				!dropdownRef.current.contains(event.target as Node)
			) {
				isOpen = false;
			}
		};
		document.addEventListener('click', handleClickOutside);
		return () => document.removeEventListener('click', handleClickOutside);
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
		props.onInput?.(nextValue);
	}

	function selectOption(optionValue: string): void {
		if (disabled || options.find((o) => o.value === optionValue)?.disabled) return;
		if (!selectedValues.includes(optionValue)) {
			if (maxSelections <= 0 || selectedValues.length < maxSelections) {
				selectedValues = [...selectedValues, optionValue];
				emitChange([...selectedValues]);
			}
		}
		if (searchable) {
			searchQuery = '';
		}
	}

	function removeOption(optionValue: string): void {
		if (disabled) return;
		selectedValues = selectedValues.filter((v) => v !== optionValue);
		emitChange([...selectedValues]);
	}

	function clearSelections(): void {
		if (disabled) return;
		selectedValues = [];
		emitChange([]);
	}

	function toggleDropdown(): void {
		if (!disabled) {
			isOpen = !isOpen;
		}
	}

	const containerClasses = $derived(MultiSelectStyleManager.getContainerClasses(className));
	const selectDisplayClasses = $derived(MultiSelectStyleManager.getSelectDisplayClasses(disabled, isOpen));
	const placeholderClasses = $derived(MultiSelectStyleManager.getPlaceholderClasses(placeholderClass));
	const selectedValueContainerClasses = $derived(MultiSelectStyleManager.getSelectedValueContainerClasses(selectedClass));
	const removeButtonClasses = $derived(MultiSelectStyleManager.getRemoveButtonClasses());
	const clearButtonClasses = $derived(MultiSelectStyleManager.getClearButtonClasses(disabled, selectedValues.length > 0));
	const chevronClasses = $derived(MultiSelectStyleManager.getChevronClasses(isOpen));
	const dropdownClasses = $derived(MultiSelectStyleManager.getDropdownClasses(dropdownClass));
	const searchContainerClasses = $derived(MultiSelectStyleManager.getSearchContainerClasses());
	const searchInputClasses = $derived(MultiSelectStyleManager.getSearchInputClasses(searchInputClass));
	const noOptionsMessageClasses = $derived(MultiSelectStyleManager.getNoOptionsMessageClasses());

	function getOptionClasses(option: MultiSelectOption): string {
		return MultiSelectStyleManager.getOptionClasses(optionClass, selectedValues.includes(option.value), !!option.disabled);
	}

	return {
		get options() { return options; },
		get value() { return value; },
		get placeholder() { return placeholder; },
		get disabled() { return disabled; },
		get searchable() { return searchable; },
		get maxSelections() { return maxSelections; },
		get isOpen() { return isOpen; },
		get selectedValues() { return selectedValues; },
		get searchQuery() { return searchQuery; },
		set searchQuery(v: string) { searchQuery = v; },
		get containerRef() { return containerRef.current; },
		set containerRef(v: HTMLDivElement | null) { containerRef.current = v; },
		get dropdownRef() { return dropdownRef.current; },
		set dropdownRef(v: HTMLDivElement | null) { dropdownRef.current = v; },
		get containerClasses() { return containerClasses; },
		get selectDisplayClasses() { return selectDisplayClasses; },
		get placeholderClasses() { return placeholderClasses; },
		get selectedValueContainerClasses() { return selectedValueContainerClasses; },
		get removeButtonClasses() { return removeButtonClasses; },
		get clearButtonClasses() { return clearButtonClasses; },
		get chevronClasses() { return chevronClasses; },
		get dropdownClasses() { return dropdownClasses; },
		get searchContainerClasses() { return searchContainerClasses; },
		get searchInputClasses() { return searchInputClasses; },
		get noOptionsMessageClasses() { return noOptionsMessageClasses; },
		ChevronDown,
		X,
		getFilteredOptions,
		selectOption,
		removeOption,
		clearSelections,
		toggleDropdown,
		getOptionClasses
	};
}

export default createMultiSelectState;
