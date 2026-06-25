import { ObjectManagerTableControls } from '$stylist/table/class/object-manager/table-controls';
import type { SlotTableWithGrouping as TableWithGroupingProps } from '$stylist/table/interface/slot/table-with-grouping';

export function createTableWithGroupingState(props: TableWithGroupingProps) {
	const groups = $derived(
		ObjectManagerTableControls.groupRows(props.data ?? [], props.groupBy ?? 'group')
	);
	const rootClass = $derived(['c-table-grouping', props.class].filter(Boolean).join(' '));

	return {
		get groups() {
			return groups;
		},
		get rootClass() {
			return rootClass;
		},
		get restProps() {
			const { data, groupBy, class: _class, ...rest } = props as unknown as Record<string, unknown>;
			return rest as Record<string, unknown>;
		}
	};
}

export default createTableWithGroupingState;
