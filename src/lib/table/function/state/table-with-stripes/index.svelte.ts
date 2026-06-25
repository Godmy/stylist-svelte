import type { SlotTableWithStripes as TableWithStripesProps } from '$stylist/table/interface/slot/table-with-stripes';

export function createTableWithStripesState(props: TableWithStripesProps) {
	const className = $derived(props.class ?? '');
	const data = $derived(props.data ?? []);
	const columns = $derived(props.columns ?? []);

	const containerClass = $derived(['c-table-stripes', props.class].filter(Boolean).join(' '));

	return {
		get containerClass() {
			return containerClass;
		},
		get data() {
			return data;
		},
		get columns() {
			return columns;
		},
		getRowClass(index: number): string {
			return index % 2 ? 'c-table-stripes__row c-table-stripes__row--odd' : 'c-table-stripes__row';
		}
	};
}

export default createTableWithStripesState;
