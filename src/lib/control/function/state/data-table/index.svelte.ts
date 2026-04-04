import { ObjectManagerTableControls } from '$stylist/control/class/object-manager/table-controls';
import { DataTableStyleManager } from '$stylist/control/class/style-manager/table-controls';
import type { DataTableRecipe } from '$stylist/control/interface/component/table-controls/other';

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

	let sortedData = $derived(
		ObjectManagerTableControls.sortData(props.data, sortKey, sortDirection)
	);
	let rootClass = $derived(DataTableStyleManager.root(props.class ?? ''));
	let containerStyle = $derived(
		props.maxHeight !== 'none' ? `max-height:${props.maxHeight}` : ''
	);

	return {
		get sortKey() {
			return sortKey;
		},
		get sortDirection() {
			return sortDirection;
		},
		get sortedData() { return sortedData; },
		get rootClass() { return rootClass; },
		get containerStyle() { return containerStyle; },
		sort,
		getCellValue(row: Row, column: DataTableRecipe<Row>['columns'][number]) {
			return ObjectManagerTableControls.getCellValue(row, column);
		}
	};
}

export default createDataTableState;
