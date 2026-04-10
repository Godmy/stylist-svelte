import type { ExpandableTableRowProps } from '$stylist/control/type/struct/expandable-table-row-props';

export function createExpandableTableRowState(props: ExpandableTableRowProps) {
	let expanded = $state(props.isExpanded ?? false);

	$effect(() => {
		expanded = props.isExpanded ?? false;
	});

	function toggleExpanded() {
		expanded = !expanded;
		props.onToggle?.(expanded);
	}

	return {
		get expanded() {
			return expanded;
		},
		toggleExpanded
	};
}

export default createExpandableTableRowState;
