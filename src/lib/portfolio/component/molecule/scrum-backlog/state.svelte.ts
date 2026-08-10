import type { RecipeScrumBacklog } from '$stylist/portfolio/interface/recipe/scrum-backlog';
import type { SlotBacklogItem as BacklogItem } from '$stylist/portfolio/interface/slot/backlog-item';

import { createBacklogItem } from '$stylist/portfolio/function/script/create-backlog-item';
import { filterBacklogItems } from '$stylist/portfolio/function/script/scrum-backlog';
import { formatBacklogItemDate } from '$stylist/portfolio/function/script/format-backlog-item-date';

export function createScrumBacklogState(props: RecipeScrumBacklog) {
	// Props with defaults
	const data = $derived(props.data);
	const showFilters = $derived(props.showFilters ?? true);
	const onItemAdd = $derived(props.onItemAdd);
	const onItemUpdate = $derived(props.onItemUpdate);
	const onItemDelete = $derived(props.onItemDelete);

	// SlotState for filters
	let statusFilter = $state<string>('all');
	let priorityFilter = $state<string>('all');
	let searchQuery = $state<string>('');

	// SlotState for new item form
	let showAddForm = $state<boolean>(false);
	let editingItemId = $state<string | null>(null);
	let newItemTitle = $state<string>('');
	let newItemDescription = $state<string>('');
	let newItemAssignee = $state<string>('');
	let newItemPriority = $state<'low' | 'medium' | 'high'>('medium');
	let newItemEstimatedHours = $state<number>(0);
	let newItemEstimatedHoursStr = $state<string>('0');
	let newItemStatus = $state<'todo' | 'in-progress' | 'done'>('todo');

	// Computed
	const filteredItems = $derived(
		filterBacklogItems(data.items, statusFilter, priorityFilter, searchQuery)
	);

	// Methods
	function resetForm(): void {
		editingItemId = null;
		newItemTitle = '';
		newItemDescription = '';
		newItemAssignee = '';
		newItemPriority = 'medium';
		newItemEstimatedHours = 0;
		newItemEstimatedHoursStr = '0';
		newItemStatus = 'todo';
		showAddForm = false;
	}

	function startItemEdit(item: BacklogItem): void {
		editingItemId = item.id;
		newItemTitle = item.title;
		newItemDescription = item.description ?? '';
		newItemAssignee = item.assignee ?? '';
		newItemPriority = item.priority;
		newItemEstimatedHours = item.estimatedHours ?? 0;
		newItemEstimatedHoursStr = String(item.estimatedHours ?? 0);
		newItemStatus = item.status;
		showAddForm = true;
	}

	function cancelForm(): void {
		resetForm();
	}

	function handleSubmitItem(): void {
		if (!newItemTitle.trim()) return;

		if (editingItemId) {
			const currentItem = data.items.find((item) => item.id === editingItemId);

			if (currentItem && onItemUpdate) {
				onItemUpdate({
					...currentItem,
					title: newItemTitle,
					description: newItemDescription,
					assignee: newItemAssignee || undefined,
					priority: newItemPriority,
					estimatedHours: newItemEstimatedHours || undefined,
					status: newItemStatus,
					updatedAt: new Date()
				});
			}
		} else {
			const newItem = createBacklogItem(
				newItemTitle,
				newItemDescription,
				newItemAssignee,
				newItemPriority,
				newItemEstimatedHours
			);

			newItem.status = newItemStatus;

			if (onItemAdd) onItemAdd(newItem);
		}

		resetForm();
	}

	function handleHoursInput(value: string): void {
		newItemEstimatedHoursStr = value;
		newItemEstimatedHours = parseInt(value || '0', 10);
	}

	function formatDate(date: Date): string {
		return formatBacklogItemDate(date);
	}

	// CSS classes
	const containerClass = 'scrum-backlog';
	const headerClass = 'scrum-backlog__header';
	const headerTitleClass = 'scrum-backlog__header-title';
	const addButtonClass = 'scrum-backlog__add-button';
	const iconClass = 'scrum-backlog__icon';
	const addFormContainerClass = 'scrum-backlog__add-form-container';
	const formGridClass = 'scrum-backlog__form-grid';
	const formColSpanClass = 'scrum-backlog__form-col-span';
	const formInputClass = 'scrum-backlog__form-input';
	const formTextareaClass = 'scrum-backlog__form-textarea';
	const formLabelClass = 'scrum-backlog__form-label';
	const formSelectClass = 'scrum-backlog__form-select';
	const formButtonsContainerClass = 'scrum-backlog__form-buttons-container';
	const filtersContainerClass = 'scrum-backlog__filters-container';
	const filtersGridClass = 'scrum-backlog__filters-grid';
	const filterLabelClass = 'scrum-backlog__filter-label';
	const itemsContainerClass = 'scrum-backlog__items-container';
	const emptyStateContainerClass = 'scrum-backlog__empty-state-container';
	const emptyStateTextClass = 'scrum-backlog__empty-state-text';
	const itemsGridClass = 'scrum-backlog__items-grid';
	const itemCardClass = 'scrum-backlog__item-card';
	const itemHeaderClass = 'scrum-backlog__item-header';
	const itemTitleClass = 'scrum-backlog__item-title';
	const itemBadgeClass = 'scrum-backlog__item-badge';
	const itemDescriptionClass = 'scrum-backlog__item-description';
	const itemBadgesContainerClass = 'scrum-backlog__item-badges-container';
	const itemActionsContainerClass = 'scrum-backlog__item-actions-container';
	const itemActionButtonClass = 'scrum-backlog__item-action-button';

	return {
		get containerClass() {
			return containerClass;
		},
		get headerClass() {
			return headerClass;
		},
		get headerTitleClass() {
			return headerTitleClass;
		},
		get addButtonClass() {
			return addButtonClass;
		},
		get iconClass() {
			return iconClass;
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
		get formInputClass() {
			return formInputClass;
		},
		get formTextareaClass() {
			return formTextareaClass;
		},
		get formLabelClass() {
			return formLabelClass;
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
		get itemBadgeClass() {
			return itemBadgeClass;
		},
		get itemDescriptionClass() {
			return itemDescriptionClass;
		},
		get itemBadgesContainerClass() {
			return itemBadgesContainerClass;
		},
		get itemActionsContainerClass() {
			return itemActionsContainerClass;
		},
		get itemActionButtonClass() {
			return itemActionButtonClass;
		},
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
		get editingItemId() {
			return editingItemId;
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
		get newItemStatus() {
			return newItemStatus;
		},
		set newItemStatus(value: 'todo' | 'in-progress' | 'done') {
			newItemStatus = value;
		},
		get filteredItems() {
			return filteredItems;
		},
		handleSubmitItem,
		handleHoursInput,
		startItemEdit,
		cancelForm,
		formatDate
	};
}
