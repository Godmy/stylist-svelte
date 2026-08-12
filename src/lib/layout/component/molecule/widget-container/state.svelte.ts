import type { RecipeWidgetContainer } from '$stylist/layout/interface/recipe/widget-container';

export function createWidgetContainerState(props: RecipeWidgetContainer) {
	let isCollapsed = $state(props.initiallyCollapsed ?? false);
	let isMaximized = $state(false);

	const title = $derived(props.title);
	const subtitle = $derived(props.subtitle);
	const content = $derived(props.content);
	const actions = $derived(props.actions);
	const collapsible = $derived(props.collapsible ?? true);
	const draggable = $derived(props.draggable ?? true);
	const maximizable = $derived(props.maximizable ?? true);
	const size = $derived(props.size ?? 'md');

	const restProps = $derived.by(() => {
		const {
			title: _title,
			subtitle: _subtitle,
			content: _content,
			actions: _actions,
			collapsible: _collapsible,
			initiallyCollapsed: _initiallyCollapsed,
			resizable: _resizable,
			draggable: _draggable,
			maximizable: _maximizable,
			size: _size,
			class: _class,
			headerClass: _headerClass,
			bodyClass: _bodyClass,
			...rest
		} = props;
		return rest;
	});

	function toggleCollapse(): void {
		isCollapsed = !isCollapsed;
	}

	function toggleMaximize(): void {
		isMaximized = !isMaximized;
	}

	return {
		get title() {
			return title;
		},
		get subtitle() {
			return subtitle;
		},
		get content() {
			return content;
		},
		get actions() {
			return actions;
		},
		get collapsible() {
			return collapsible;
		},
		get draggable() {
			return draggable;
		},
		get maximizable() {
			return maximizable;
		},
		get size() {
			return size;
		},
		get isCollapsed() {
			return isCollapsed;
		},
		get isMaximized() {
			return isMaximized;
		},
		get restProps() {
			return restProps;
		},
		toggleCollapse,
		toggleMaximize
	};
}

export default createWidgetContainerState;
