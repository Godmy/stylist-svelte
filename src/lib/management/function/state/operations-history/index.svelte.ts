import type { SlotOperationsHistory as OperationsHistoryProps } from '$stylist/management/interface/slot/operations-history';
import type { BehaviorOperationsHistoryEvents } from '$stylist/management/interface/behavior/operations-history-events';

export function createOperationsHistoryState(
	props: OperationsHistoryProps & BehaviorOperationsHistoryEvents
) {
	const operations = $derived((props.operations ?? []) as unknown as ({
id: string;
	name: string;
	query: string;
	timestamp: Date;
	status: 'success' | 'error' | 'pending';
	executionTime?: number;
})[]);
	const className = $derived(props.class ?? '');

	let searchQuery = $state('');
	let selectedOperation: ({
id: string;
	name: string;
	query: string;
	timestamp: Date;
	status: 'success' | 'error' | 'pending';
	executionTime?: number;
}) | null = $state(null);

	const filteredOperations = $derived(
		operations.filter(
			(op: ({
id: string;
	name: string;
	query: string;
	timestamp: Date;
	status: 'success' | 'error' | 'pending';
	executionTime?: number;
})) =>
				!searchQuery ||
				op.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
				op.query.toLowerCase().includes(searchQuery.toLowerCase())
		)
	);

	function handleSelect(op: ({
id: string;
	name: string;
	query: string;
	timestamp: Date;
	status: 'success' | 'error' | 'pending';
	executionTime?: number;
})): void {
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

	function getStatusVariant(
		status: ({
id: string;
	name: string;
	query: string;
	timestamp: Date;
	status: 'success' | 'error' | 'pending';
	executionTime?: number;
})['status']
	): 'success' | 'danger' | 'warning' | 'default' {
		switch (status) {
			case 'success':
				return 'success';
			case 'error':
				return 'danger';
			case 'pending':
				return 'warning';
			default:
				return 'default';
		}
	}

	function getStatusText(status: ({
id: string;
	name: string;
	query: string;
	timestamp: Date;
	status: 'success' | 'error' | 'pending';
	executionTime?: number;
})['status']): string {
		switch (status) {
			case 'success':
				return 'Success';
			case 'error':
				return 'Error';
			case 'pending':
				return 'Pending';
			default:
				return status;
		}
	}

	return {
		get operations() {
			return operations;
		},
		get searchQuery() {
			return searchQuery;
		},
		set searchQuery(value: string) {
			searchQuery = value;
		},
		get selectedOperation() {
			return selectedOperation;
		},
		get filteredOperations() {
			return filteredOperations;
		},
		handleSelect,
		handleDelete,
		formatDate,
		getStatusVariant,
		getStatusText
	};
}

export default createOperationsHistoryState;
