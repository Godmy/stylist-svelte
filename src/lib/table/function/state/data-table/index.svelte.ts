import { ObjectManagerTableControls } from '$stylist/table/class/object-manager/table-controls';
import type { SlotDataTableRecipe as DataTableRecipe } from '$stylist/table/interface/slot/data-table-recipe';

type Row = Record<string, unknown>;

export function createDataTableState(props: DataTableRecipe<Row>) {
	let sortKey = $state<string | null>(null);
	let sortDirection = $state<'asc' | 'desc'>('asc');

	const sort = (columnKey: string) => {
		if (sortKey === columnKey) {
			sortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
			return;
		}

		sortKey = columnKey;
		sortDirection = 'asc';
	};

	const sortedData = $derived(
		ObjectManagerTableControls.sortData(props.data, sortKey, sortDirection)
	);
	const rootClass = $derived(['c-data-table', props.class].filter(Boolean).join(' '));
	const containerStyle = $derived(
		props.maxHeight !== 'none' ? `max-height:${props.maxHeight}` : ''
	);

	return {
		get sortKey() {
			return sortKey;
		},
		get sortDirection() {
			return sortDirection;
		},
		get sortedData() {
			return sortedData;
		},
		get rootClass() {
			return rootClass;
		},
		get containerStyle() {
			return containerStyle;
		},
		sort,
		getCellValue(row: Row, column: DataTableRecipe<Row>['columns'][number]) {
			return ObjectManagerTableControls.getCellValue(row, column);
		}
	};
}

export default createDataTableState;
