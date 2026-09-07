import type { SlotIssueMessage as IssueMessage } from '$stylist/portfolio/interface/slot/issue-message';

export function createIssuesTableState(input: {
	getItems: () => IssueMessage[];
	onMoveToBacklog?: (items: IssueMessage[]) => void;
}) {
	let selectedIds = $state<string[]>([]);
	let showNewOnly = $state(true);
	const items = $derived(input.getItems());

	const filteredItems = $derived.by(() => {
		if (!showNewOnly) {
			return items;
		}

		return items.filter((item) => (item.status ?? 'new') === 'new');
	});

	const selectedItems = $derived.by(() =>
		items.filter((item) => selectedIds.includes(getIssueKey(item)))
	);

	function getIssueKey(item: IssueMessage): string {
		return item.message_key ?? `${item.id}::${item.text}`;
	}

	function toggleSelection(item: IssueMessage): void {
		const issueKey = getIssueKey(item);

		selectedIds = selectedIds.includes(issueKey)
			? selectedIds.filter((value) => value !== issueKey)
			: [...selectedIds, issueKey];
	}

	function toggleAllVisible(): void {
		const visibleIds = filteredItems.map((item) => getIssueKey(item));
		const everyVisibleSelected =
			visibleIds.length > 0 && visibleIds.every((id) => selectedIds.includes(id));

		selectedIds = everyVisibleSelected
			? selectedIds.filter((id) => !visibleIds.includes(id))
			: Array.from(new Set([...selectedIds, ...visibleIds]));
	}

	function clearSelection(): void {
		selectedIds = [];
	}

	function moveSelectedToBacklog(): void {
		if (!selectedItems.length) {
			return;
		}

		input.onMoveToBacklog?.(selectedItems);
		selectedIds = [];
	}

	const containerClass = 'issues-table';
	const toolbarClass = 'issues-table__toolbar';
	const toolbarMetaClass = 'issues-table__toolbar-meta';
	const actionsClass = 'issues-table__actions';
	const tableWrapClass = 'issues-table__table-wrap';
	const tableClass = 'issues-table__table';
	const headRowClass = 'issues-table__head-row';
	const headCellClass = 'issues-table__head-cell';
	const checkboxClass = 'issues-table__checkbox';
	const bodyCellClass = 'issues-table__body-cell';
	const mutedTextClass = 'issues-table__muted-text';
	const messageTextClass = 'issues-table__message-text';

	return {
		get containerClass() {
			return containerClass;
		},
		get toolbarClass() {
			return toolbarClass;
		},
		get toolbarMetaClass() {
			return toolbarMetaClass;
		},
		get actionsClass() {
			return actionsClass;
		},
		get tableWrapClass() {
			return tableWrapClass;
		},
		get tableClass() {
			return tableClass;
		},
		get headRowClass() {
			return headRowClass;
		},
		get headCellClass() {
			return headCellClass;
		},
		get checkboxClass() {
			return checkboxClass;
		},
		get bodyCellClass() {
			return bodyCellClass;
		},
		get mutedTextClass() {
			return mutedTextClass;
		},
		get messageTextClass() {
			return messageTextClass;
		},
		get showNewOnly() {
			return showNewOnly;
		},
		set showNewOnly(value: boolean) {
			showNewOnly = value;
		},
		get selectedIds() {
			return selectedIds;
		},
		get filteredItems() {
			return filteredItems;
		},
		get selectedItems() {
			return selectedItems;
		},
		getIssueKey,
		getBodyRowClass(selected: boolean) {
			return ['issues-table__body-row', selected ? `issues-table__body-row--selected` : '']
				.filter(Boolean)
				.join(' ');
		},
		toggleSelection,
		toggleAllVisible,
		clearSelection,
		moveSelectedToBacklog
	};
}
