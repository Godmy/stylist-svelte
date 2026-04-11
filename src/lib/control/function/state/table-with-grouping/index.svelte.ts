import { ObjectManagerTableControls } from '$stylist/control/class/object-manager/table-controls';
import { TableExtendedStyleManager } from '$stylist/control/class/style-manager/table-extended';
import type { TableWithGroupingProps } from '$stylist/control/interface/component/table-extended/other';

export function createTableWithGroupingState(props: TableWithGroupingProps) {
	const groups = $derived(
		ObjectManagerTableControls.groupRows(props.data ?? [], props.groupBy ?? 'group')
	);
	const rootClass = $derived(TableExtendedStyleManager.root('c-table-with-grouping', props.class ?? ''));

	return {
		get groups() {
			return groups;
		},
		get rootClass() {
			return rootClass;
		},
		get restProps() {
			const { data, groupBy, class: _class, ...rest } = props as Record<string, unknown>;
			return rest as Record<string, unknown>;
		}
	};
}

export default createTableWithGroupingState;
