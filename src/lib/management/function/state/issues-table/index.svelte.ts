import { IssuesTableStyleManager } from '$stylist/management/class/style-manager/issues-table';
import type { SlotIssueMessage as IssueMessage } from '$stylist/management/interface/slot/issue-message';

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

	return {
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
		get containerClass() {
			return IssuesTableStyleManager.getContainerClass();
		},
		get toolbarClass() {
			return IssuesTableStyleManager.getToolbarClass();
		},
		get toolbarMetaClass() {
			return IssuesTableStyleManager.getToolbarMetaClass();
		},
		get actionsClass() {
			return IssuesTableStyleManager.getActionsClass();
		},
		get tableWrapClass() {
			return IssuesTableStyleManager.getTableWrapClass();
		},
		get tableClass() {
			return IssuesTableStyleManager.getTableClass();
		},
		get headRowClass() {
			return IssuesTableStyleManager.getHeadRowClass();
		},
		get headCellClass() {
			return IssuesTableStyleManager.getHeadCellClass();
		},
		get bodyCellClass() {
			return IssuesTableStyleManager.getBodyCellClass();
		},
		get mutedTextClass() {
			return IssuesTableStyleManager.getMutedTextClass();
		},
		get messageTextClass() {
			return IssuesTableStyleManager.getMessageTextClass();
		},
		get checkboxClass() {
			return IssuesTableStyleManager.getCheckboxClass();
		},
		getIssueKey,
		getBodyRowClass(selected: boolean) {
			return IssuesTableStyleManager.getBodyRowClass(selected);
		},
		toggleSelection,
		toggleAllVisible,
		clearSelection,
		moveSelectedToBacklog
	};
}
