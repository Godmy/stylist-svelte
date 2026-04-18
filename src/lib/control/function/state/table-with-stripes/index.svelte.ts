import type { SlotTableWithStripes as TableWithStripesProps } from '$stylist/control/interface/slot/table-with-stripes';
import { TableExtendedStyleManager } from '$stylist/control/class/style-manager/table-extended';

export function createTableWithStripesState(props: TableWithStripesProps) {
	const className = $derived(props.class ?? '');
	const data = $derived(props.data ?? []);
	const columns = $derived(props.columns ?? []);

	const containerClass = $derived(TableExtendedStyleManager.root('c-table-with-stripes', className));

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
			return index % 2 ? 'bg-[var(--color-background-secondary)]' : 'bg-[var(--color-background-primary)]';
		}
	};
}

export default createTableWithStripesState;
