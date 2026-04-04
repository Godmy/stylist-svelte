import { ObjectManagerTableControls } from '$stylist/control/class/object-manager/table-controls';
import { TableExtendedStyleManager } from '$stylist/control/class/style-manager/table-extended';
import type { TableWithGroupingProps } from '$stylist/control/interface/component/table-extended/other';

export class TableWithGroupingState {
	groups: $state.Snapshot<ReturnType<typeof ObjectManagerTableControls.groupRows>>;
	rootClass: string;

	constructor(props: TableWithGroupingProps) {
		this.groups = $derived(
			ObjectManagerTableControls.groupRows(props.data ?? [], props.groupBy ?? 'group')
		);
		this.rootClass = $derived(TableExtendedStyleManager.root('c-table-with-grouping', props.class ?? ''));
	}
}

export default TableWithGroupingState;
