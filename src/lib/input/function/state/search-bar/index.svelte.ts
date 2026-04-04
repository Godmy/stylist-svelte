import { cn } from '$stylist/layout/function/script/merge-class-names';
import { debounce } from '$stylist/interaction/function/script/debounce';

export interface SearchBarStateProps {
	placeholder?: string;
	value?: string;
	disabled?: boolean;
	debounceMs?: number;
	class?: string;
	onValueInput?: (value: string) => void;
	onValueChange?: (value: string) => void;
	onSearch?: (value: string) => void;
	onClear?: () => void;
}

export const createSearchBarState = (props: SearchBarStateProps) => {
	// State
	let searchTerm = $state(props.value ?? '');

	// Update local state when value prop changes
	$effect(() => {
		if (props.value !== undefined && searchTerm !== props.value) {
			searchTerm = props.value;
		}
	});

	// Debounced search
	const debouncedSearch = debounce((query: string) => {
		props.onSearch?.(query);
	}, props.debounceMs ?? 300);

	function handleInput(event: Event) {
		const target = event.target as HTMLInputElement;
		searchTerm = target.value;

		props.onValueInput?.(searchTerm);
		props.onValueChange?.(searchTerm);

		debouncedSearch(searchTerm);
	}

	function handleClear() {
		searchTerm = '';

		props.onValueInput?.('');
		props.onValueChange?.('');

		props.onClear?.();
		props.onSearch?.('');
	}

	function triggerSearch() {
		props.onSearch?.(searchTerm);
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Enter') {
			triggerSearch();
		}
		if (event.key === 'Escape' && searchTerm) {
			handleClear();
		}
	}

	// Computed classes
	const containerClasses = $derived.by(() =>
		cn(
			'flex items-center gap-3 px-4 py-2 bg-[var(--color-background-primary)]',
			'border border-[var(--color-border-primary)] rounded-lg',
			'focus-within:ring-2 focus-within:ring-[var(--color-primary-500)] focus-within:border-transparent',
			props.disabled ? 'opacity-[var(--opacity-50)] cursor-not-allowed' : '',
			props.class
		)
	);

	const iconContainerClasses = $derived.by(() =>
		'flex items-center justify-center text-[var(--color-text-secondary)]'
	);

	const inputClasses = $derived.by(() =>
		cn(
			'flex-1 bg-transparent border-none focus:outline-none focus:ring-0',
			'text-[var(--color-text-primary)] placeholder-[var(--color-text-tertiary)]',
			props.disabled ? 'cursor-not-allowed' : ''
		)
	);

	const controlsContainerClasses = $derived.by(() =>
		'flex items-center gap-1'
	);

	const clearButtonClasses = $derived.by(() =>
		'p-2 rounded-md hover:bg-[var(--color-background-hover)]'
	);

	const searchButtonClasses = $derived.by(() =>
		'ml-1'
	);

	const iconClasses = $derived.by(() => 'h-5 w-5');

	const smallIconClasses = $derived.by(() => 'h-4 w-4');

	return {
		// State getters
		get searchTerm() {
			return searchTerm;
		},
		get hasValue() {
			return searchTerm && searchTerm.length > 0;
		},

		// Actions
		setSearchTerm(value: string) {
			searchTerm = value;
		},

		// Handlers
		handleInput,
		handleClear,
		triggerSearch,
		handleKeydown,

		// Classes
		containerClasses,
		iconContainerClasses,
		inputClasses,
		controlsContainerClasses,
		clearButtonClasses,
		searchButtonClasses,
		iconClasses,
		smallIconClasses
	};
};

export default createSearchBarState;
