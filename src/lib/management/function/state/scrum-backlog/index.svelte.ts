import { ScrumBacklogStyleManager } from '$stylist/management/class/style-manager/scrum-backlog';
import type { BacklogData } from '$stylist/management/interface/struct/backlog-data';
import type { BacklogItem } from '$stylist/management/interface/struct/backlog-item';
import {
  filterBacklogItems,
  createBacklogItem,
  formatBacklogItemDate
} from '$stylist/management/function/script/scrum-backlog';

export interface ScrumBacklogStateProps {
  data: BacklogData;
  showFilters?: boolean;
  onItemAdd?: (item: BacklogItem) => void;
  onItemUpdate?: (item: BacklogItem) => void;
  onItemDelete?: (id: string) => void;
}

export function createScrumBacklogState(props: ScrumBacklogStateProps) {
  // Props with defaults
  const data = $derived(props.data);
  const showFilters = $derived(props.showFilters ?? true);
  const onItemAdd = $derived(props.onItemAdd);
  const onItemUpdate = $derived(props.onItemUpdate);
  const onItemDelete = $derived(props.onItemDelete);

  // State for filters
  let statusFilter = $state<string>('all');
  let priorityFilter = $state<string>('all');
  let searchQuery = $state<string>('');

  // State for new item form
  let showAddForm = $state<boolean>(false);
  let newItemTitle = $state<string>('');
  let newItemDescription = $state<string>('');
  let newItemAssignee = $state<string>('');
  let newItemPriority = $state<'low' | 'medium' | 'high'>('medium');
  let newItemEstimatedHours = $state<number>(0);
  let newItemEstimatedHoursStr = $state<string>('0');

  // Computed
  const filteredItems = $derived(
    filterBacklogItems(data.items, statusFilter, priorityFilter, searchQuery)
  );

  // Methods
  function handleAddNewItem(): void {
    if (!newItemTitle.trim()) return;

    const newItem = createBacklogItem(
      newItemTitle,
      newItemDescription,
      newItemAssignee,
      newItemPriority,
      newItemEstimatedHours
    );

    if (onItemAdd) onItemAdd(newItem);

    // Reset form
    newItemTitle = '';
    newItemDescription = '';
    newItemAssignee = '';
    newItemPriority = 'medium';
    newItemEstimatedHours = 0;
    newItemEstimatedHoursStr = '0';
    showAddForm = false;
  }

  function handleHoursInput(value: string): void {
    newItemEstimatedHoursStr = value;
    newItemEstimatedHours = parseInt(value || '0', 10);
  }

  function formatDate(date: Date): string {
    return formatBacklogItemDate(date);
  }

  // CSS classes
  const containerClass = $derived(ScrumBacklogStyleManager.getContainerClass());
  const headerClass = $derived(ScrumBacklogStyleManager.getHeaderClass());
  const headerTitleClass = $derived(ScrumBacklogStyleManager.getHeaderTitleClass());
  const headerButtonContainerClass = $derived(ScrumBacklogStyleManager.getHeaderButtonContainerClass());
  const addButtonClass = $derived(ScrumBacklogStyleManager.getAddButtonClass());
  const addFormContainerClass = $derived(ScrumBacklogStyleManager.getAddFormContainerClass());
  const formGridClass = $derived(ScrumBacklogStyleManager.getFormGridClass());
  const formColSpanClass = $derived(ScrumBacklogStyleManager.getFormColSpanClass());
  const formLabelClass = $derived(ScrumBacklogStyleManager.getFormLabelClass());
  const formInputClass = $derived(ScrumBacklogStyleManager.getFormInputClass());
  const formTextareaClass = $derived(ScrumBacklogStyleManager.getFormTextareaClass());
  const formSelectClass = $derived(ScrumBacklogStyleManager.getFormSelectClass());
  const formButtonsContainerClass = $derived(ScrumBacklogStyleManager.getFormButtonsContainerClass());
  const filtersContainerClass = $derived(ScrumBacklogStyleManager.getFiltersContainerClass());
  const filtersGridClass = $derived(ScrumBacklogStyleManager.getFiltersGridClass());
  const filterLabelClass = $derived(ScrumBacklogStyleManager.getFilterLabelClass());
  const itemsContainerClass = $derived(ScrumBacklogStyleManager.getItemsContainerClass());
  const emptyStateContainerClass = $derived(ScrumBacklogStyleManager.getEmptyStateContainerClass());
  const emptyStateTextClass = $derived(ScrumBacklogStyleManager.getEmptyStateTextClass());
  const itemsGridClass = $derived(ScrumBacklogStyleManager.getItemsGridClass());
  const itemCardClass = $derived(ScrumBacklogStyleManager.getItemCardClass());
  const itemHeaderClass = $derived(ScrumBacklogStyleManager.getItemHeaderClass());
  const itemTitleClass = $derived(ScrumBacklogStyleManager.getItemTitleClass());
  const itemDescriptionClass = $derived(ScrumBacklogStyleManager.getItemDescriptionClass());
  const itemBadgesContainerClass = $derived(ScrumBacklogStyleManager.getItemBadgesContainerClass());
  const itemBadgeClass = $derived(ScrumBacklogStyleManager.getItemBadgeClass());
  const itemActionsContainerClass = $derived(ScrumBacklogStyleManager.getItemActionsContainerClass());
  const itemActionButtonClass = $derived(ScrumBacklogStyleManager.getItemActionButtonClass());
  const iconClass = $derived(ScrumBacklogStyleManager.getIconClass());

  return {
    get data() {
      return data;
    },
    get showFilters() {
      return showFilters;
    },
    get statusFilter() {
      return statusFilter;
    },
    set statusFilter(value: string) {
      statusFilter = value;
    },
    get priorityFilter() {
      return priorityFilter;
    },
    set priorityFilter(value: string) {
      priorityFilter = value;
    },
    get searchQuery() {
      return searchQuery;
    },
    set searchQuery(value: string) {
      searchQuery = value;
    },
    get showAddForm() {
      return showAddForm;
    },
    set showAddForm(value: boolean) {
      showAddForm = value;
    },
    get newItemTitle() {
      return newItemTitle;
    },
    set newItemTitle(value: string) {
      newItemTitle = value;
    },
    get newItemDescription() {
      return newItemDescription;
    },
    set newItemDescription(value: string) {
      newItemDescription = value;
    },
    get newItemAssignee() {
      return newItemAssignee;
    },
    set newItemAssignee(value: string) {
      newItemAssignee = value;
    },
    get newItemPriority() {
      return newItemPriority;
    },
    set newItemPriority(value: 'low' | 'medium' | 'high') {
      newItemPriority = value;
    },
    get newItemEstimatedHours() {
      return newItemEstimatedHours;
    },
    set newItemEstimatedHours(value: number) {
      newItemEstimatedHours = value;
    },
    get newItemEstimatedHoursStr() {
      return newItemEstimatedHoursStr;
    },
    set newItemEstimatedHoursStr(value: string) {
      newItemEstimatedHoursStr = value;
    },
    get filteredItems() {
      return filteredItems;
    },
    get containerClass() {
      return containerClass;
    },
    get headerClass() {
      return headerClass;
    },
    get headerTitleClass() {
      return headerTitleClass;
    },
    get headerButtonContainerClass() {
      return headerButtonContainerClass;
    },
    get addButtonClass() {
      return addButtonClass;
    },
    get addFormContainerClass() {
      return addFormContainerClass;
    },
    get formGridClass() {
      return formGridClass;
    },
    get formColSpanClass() {
      return formColSpanClass;
    },
    get formLabelClass() {
      return formLabelClass;
    },
    get formInputClass() {
      return formInputClass;
    },
    get formTextareaClass() {
      return formTextareaClass;
    },
    get formSelectClass() {
      return formSelectClass;
    },
    get formButtonsContainerClass() {
      return formButtonsContainerClass;
    },
    get filtersContainerClass() {
      return filtersContainerClass;
    },
    get filtersGridClass() {
      return filtersGridClass;
    },
    get filterLabelClass() {
      return filterLabelClass;
    },
    get itemsContainerClass() {
      return itemsContainerClass;
    },
    get emptyStateContainerClass() {
      return emptyStateContainerClass;
    },
    get emptyStateTextClass() {
      return emptyStateTextClass;
    },
    get itemsGridClass() {
      return itemsGridClass;
    },
    get itemCardClass() {
      return itemCardClass;
    },
    get itemHeaderClass() {
      return itemHeaderClass;
    },
    get itemTitleClass() {
      return itemTitleClass;
    },
    get itemDescriptionClass() {
      return itemDescriptionClass;
    },
    get itemBadgesContainerClass() {
      return itemBadgesContainerClass;
    },
    get itemBadgeClass() {
      return itemBadgeClass;
    },
    get itemActionsContainerClass() {
      return itemActionsContainerClass;
    },
    get itemActionButtonClass() {
      return itemActionButtonClass;
    },
    get iconClass() {
      return iconClass;
    },
    handleAddNewItem,
    handleHoursInput,
    formatDate
  };
}

export default createScrumBacklogState;
