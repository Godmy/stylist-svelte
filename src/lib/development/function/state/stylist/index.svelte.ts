import { categories } from '$stylist/development/const/record/stylist-categories';
import type { StylistProps } from '$stylist/development/type/struct/stylist-props';
import type { StylistCategoryId } from '$stylist/development/type/struct/stylist-category-id';
import type { StylistSelection } from '$stylist/development/type/struct/stylist-selection';
import { untrack } from 'svelte';
export function createStylistState(props: StylistProps) {
  const initialCategory = $derived(props.initialCategory ?? 'architecture');
  const className = $derived(props.class ?? '');
  const onSelectionChange = $derived(props.onSelectionChange);

  let isOpen = $state(false);
  let selectedCategoryId = $state<StylistCategoryId>(untrack(() => initialCategory));
  let selections = $state<Record<StylistCategoryId, string>>({
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

  function handleCategorySelect(categoryId: StylistCategoryId) {
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
    get initialCategory() { return initialCategory; },
    get className() { return className; },
    get isOpen() { return isOpen; },
    get selectedCategoryId() { return selectedCategoryId; },
    get selections() { return selections; },
    get panelId() { return panelId; },
    get activeCategory() { return activeCategory; },
    get activeOption() { return activeOption; },
    set isOpen(value: boolean) { isOpen = value; },
    set selectedCategoryId(value: StylistCategoryId) { selectedCategoryId = value; },
    set selections(value: Record<StylistCategoryId, string>) { selections = value; },
    toggleOpen,
    closePanel,
    handleCategorySelect,
    handleOptionSelect,
    handleWindowClick,
    handleWindowKeydown,
    get onSelectionChange() { return onSelectionChange; }
  };
}

export default createStylistState;
