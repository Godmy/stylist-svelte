import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import type { GraphToolbarItem } from '$stylist/canvas/type/struct/graph/graph-toolbar-item';
import type { GraphToolbarProps } from '$stylist/canvas/type/struct/graph/graph-toolbar-props';

export function createGraphToolbarState(props: GraphToolbarProps) {
	const items = $derived(props.items ?? []);
	const size = $derived(props.size ?? 'md');
	const orientation = $derived(props.orientation ?? 'horizontal');
	const compact = $derived(props.compact ?? false);
	const showTooltips = $derived(props.showTooltips ?? true);
	const classes = $derived(
		mergeClassNames(
			'graph-toolbar',
			orientation === 'vertical' ? 'graph-toolbar--vertical' : 'graph-toolbar--horizontal',
			compact && 'graph-toolbar--compact',
			props.class ?? ''
		)
	);
	const restProps = $derived.by(() => {
		const {
			class: _class,
			id: _id,
			items: _items,
			size: _size,
			orientation: _orientation,
			compact: _compact,
			showTooltips: _showTooltips,
			onItemClick: _onItemClick,
			onValueChange: _onValueChange,
			children: _children,
			...rest
		} = props;
		return rest;
	});

	function handleItemClick(item: GraphToolbarItem): void {
		item.onclick?.();
		props.onItemClick?.(item.id);
	}

	function handleValueChange(item: GraphToolbarItem, value: unknown): void {
		props.onValueChange?.(item.id, value);
	}

	return {
		get items() { return items; },
		get size() { return size; },
		get orientation() { return orientation; },
		get compact() { return compact; },
		get showTooltips() { return showTooltips; },
		get classes() { return classes; },
		get restProps() { return restProps; },
		handleItemClick,
		handleValueChange
	};
}

export default createGraphToolbarState;
