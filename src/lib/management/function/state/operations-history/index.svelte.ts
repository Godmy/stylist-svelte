import { OperationsHistoryStyleManager } from '$stylist/management/class/style-manager/operations-history';
import type { SlotOperationsHistory as OperationsHistoryProps } from '$stylist/management/interface/slot/operations-history';
import type { Operation } from '$stylist/management/interface/slot/operation';
import type { BehaviorOperationsHistoryEvents } from '$stylist/management/interface/behavior/operations-history-events';

export function createOperationsHistoryState(props: OperationsHistoryProps & BehaviorOperationsHistoryEvents) {
	const operations = $derived((props.operations ?? []) as unknown as Operation[]);
	const className = $derived(props.class ?? '');

	let searchQuery = $state('');
	let selectedOperation: Operation | null = $state(null);

	const filteredOperations = $derived(
		operations.filter((op: Operation) =>
			!searchQuery ||
			op.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
			op.query.toLowerCase().includes(searchQuery.toLowerCase())
		)
	);

	const baseClasses = $derived(OperationsHistoryStyleManager.getBaseClasses(className));
	const toolbarClasses = $derived(OperationsHistoryStyleManager.getToolbarClasses());
	const searchInputClasses = $derived(OperationsHistoryStyleManager.getSearchInputClasses());
	const resultsContainerClasses = $derived(OperationsHistoryStyleManager.getResultsContainerClasses());

	function handleSelect(op: Operation): void {
		selectedOperation = op;
		props.onSelect?.(op);
	}

	function handleDelete(id: string, e: Event): void {
		e.stopPropagation();
		props.onDelete?.(id);
	}

	function formatDate(date: Date): string {
		return new Date(date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
	}

	function getStatusVariant(status: Operation['status']): 'success' | 'danger' | 'warning' | 'default' {
		const variant = OperationsHistoryStyleManager.getStatusBadgeVariant(status);
		switch (variant) {
			case 'success': return 'success';
			case 'danger': return 'danger';
			case 'warning': return 'warning';
			default: return 'default';
		}
	}

	function getStatusText(status: Operation['status']): string {
		switch (status) {
			case 'success': return 'Success';
			case 'error': return 'Error';
			case 'pending': return 'Pending';
			default: return status;
		}
	}

	return {
		get operations() { return operations; },
		get searchQuery() { return searchQuery; },
		set searchQuery(value: string) { searchQuery = value; },
		get selectedOperation() { return selectedOperation; },
		get filteredOperations() { return filteredOperations; },
		get baseClasses() { return baseClasses; },
		get toolbarClasses() { return toolbarClasses; },
		get searchInputClasses() { return searchInputClasses; },
		get resultsContainerClasses() { return resultsContainerClasses; },
		handleSelect,
		handleDelete,
		formatDate,
		getStatusVariant,
		getStatusText
	};
}

export default createOperationsHistoryState;
