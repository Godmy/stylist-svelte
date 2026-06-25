import { ObjectManagerTableControls } from '$stylist/table/class/object-manager/table-controls';
import type { SlotTableWithFilters as TableWithFiltersProps } from '$stylist/table/interface/slot/table-with-filters';

export function createTableWithFiltersState(props: TableWithFiltersProps) {
	let filters = $state<Record<string, string>>({});

	const updateFilter = (column: string, value: string) => {
		filters = { ...filters, [column]: value };
	};

	const filtered = $derived(
		ObjectManagerTableControls.filterRows(props.data ?? [], props.columns ?? [], filters)
	);
	const rootClass = $derived(['c-table-filters', props.class].filter(Boolean).join(' '));

	return {
		get filters() {
			return filters;
		},
		get filtered() {
			return filtered;
		},
		get rootClass() {
			return rootClass;
		},
		updateFilter
	};
}

export default createTableWithFiltersState;
