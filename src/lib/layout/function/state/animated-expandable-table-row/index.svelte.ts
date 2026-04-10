import type { AnimatedExpandableTableRowProps } from '$stylist/layout/type/struct/animated-expandable-table-row';

export type { AnimatedExpandableTableRowProps } from '$stylist/layout/type/struct/animated-expandable-table-row';

export function createAnimatedExpandableTableRowState(props: AnimatedExpandableTableRowProps) {
	let isExpanded = $state(props.expanded ?? false);

	$effect(() => {
		isExpanded = props.expanded ?? false;
	});

	const expandable = $derived(props.expandable !== false);
	const expandIcon = $derived(props.expandIcon);
	const collapseIcon = $derived(props.collapseIcon);
	const colspan = $derived(props.colspan ?? 2);
	const children = $derived(props.children);
	const details = $derived(props.details);
	const className = $derived(props.class ?? '');

	const restProps = $derived.by(() => {
		const {
			expanded: _expanded,
			expandable: _expandable,
			expandIcon: _expandIcon,
			collapseIcon: _collapseIcon,
			colspan: _colspan,
			children: _children,
			details: _details,
			class: _class,
			...rest
		} = props;

		return rest;
	});

	function toggle() {
		if (expandable) {
			isExpanded = !isExpanded;
		}
	}

	return {
		get isExpanded() {
			return isExpanded;
		},
		get expandable() {
			return expandable;
		},
		get expandIcon() {
			return expandIcon;
		},
		get collapseIcon() {
			return collapseIcon;
		},
		get colspan() {
			return colspan;
		},
		get children() {
			return children;
		},
		get details() {
			return details;
		},
		get className() {
			return className;
		},
		get restProps() {
			return restProps;
		},
		toggle
	};
}

export default createAnimatedExpandableTableRowState;
