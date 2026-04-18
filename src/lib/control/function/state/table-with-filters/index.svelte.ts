import { ObjectManagerTableControls } from '$stylist/control/class/object-manager/table-controls';
import { TableExtendedStyleManager } from '$stylist/control/class/style-manager/table-extended';
import type { SlotTableWithFilters as TableWithFiltersProps } from '$stylist/control/interface/slot/table-with-filters';

export function createTableWithFiltersState(props: TableWithFiltersProps) {
	let filters = $state<Record<string, string>>({});

	const updateFilter = (column: string, value: string) => {
		filters = { ...filters, [column]: value };
	};

	let filtered = $derived(
		ObjectManagerTableControls.filterRows(props.data ?? [], props.columns ?? [], filters)
	);
	let rootClass = $derived(TableExtendedStyleManager.root('c-table-with-filters', props.class ?? ''));

	return {
		get filters() {
			return filters;
		},
		get filtered() { return filtered; },
		get rootClass() { return rootClass; },
		updateFilter
	};
}

export default createTableWithFiltersState;
