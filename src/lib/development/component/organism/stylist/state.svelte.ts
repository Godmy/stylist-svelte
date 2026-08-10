import { categories } from '$stylist/development/const/record/stylist-categories';
import type { RecipeStylist } from '$stylist/development/interface/recipe/stylist';
import type { TOKEN_FUNCTIONAL_TAXONOMY } from '$stylist/architecture/const/array/functional-taxonomy';
import { untrack } from 'svelte';
export function createStylistState(props: RecipeStylist) {
	const initialCategory = $derived(props.initialCategory ?? 'architecture');
	const className = $derived(props.class ?? '');
	const onSelectionChange = $derived(props.onSelectionChange);

	let isOpen = $state(false);
	let selectedCategoryId = $state<(typeof TOKEN_FUNCTIONAL_TAXONOMY)[number]>(untrack(() => initialCategory));
	let selections = $state<Record<(typeof TOKEN_FUNCTIONAL_TAXONOMY)[number], string>>({
		architecture: 'size',
		information: 'color',
		interaction: 'tooltips'
	});

	const panelId = $derived(`stylist-panel-${Math.random().toString(36).slice(2, 9)}`);

	const activeCategory = $derived(
		categories.find((category) => category.id === selectedCategoryId) ?? categories[0]
	);

	const activeOption = $derived(
		activeCategory.options.find((option) => option.id === selections[selectedCategoryId]) ??
			activeCategory.options[0]
	);

	function toggleOpen() {
		isOpen = !isOpen;
	}

	function closePanel() {
		isOpen = false;
	}

	function handleCategorySelect(categoryId: (typeof TOKEN_FUNCTIONAL_TAXONOMY)[number]) {
		selectedCategoryId = categoryId;
	}

	function handleOptionSelect(optionId: string) {
		selections = {
			...selections,
			[selectedCategoryId]: optionId
		};
	}

	function handleWindowClick(event: MouseEvent, rootElement: HTMLElement | null) {
		if (!isOpen || !rootElement) {
			return;
		}
		const path = event.composedPath();
		if (!path.includes(rootElement)) {
			closePanel();
		}
	}

	function handleWindowKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			closePanel();
		}
	}

	return {
		get initialCategory() {
			return initialCategory;
		},
		get className() {
			return className;
		},
		get isOpen() {
			return isOpen;
		},
		get selectedCategoryId() {
			return selectedCategoryId;
		},
		get selections() {
			return selections;
		},
		get panelId() {
			return panelId;
		},
		get activeCategory() {
			return activeCategory;
		},
		get activeOption() {
			return activeOption;
		},
		set isOpen(value: boolean) {
			isOpen = value;
		},
		set selectedCategoryId(value: (typeof TOKEN_FUNCTIONAL_TAXONOMY)[number]) {
			selectedCategoryId = value;
		},
		set selections(value: Record<(typeof TOKEN_FUNCTIONAL_TAXONOMY)[number], string>) {
			selections = value;
		},
		toggleOpen,
		closePanel,
		handleCategorySelect,
		handleOptionSelect,
		handleWindowClick,
		handleWindowKeydown,
		get onSelectionChange() {
			return onSelectionChange;
		}
	};
}
