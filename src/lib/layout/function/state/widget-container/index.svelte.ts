import { WidgetContainerStyleManager } from '$stylist/layout/class/style-manager/widget-container';
import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import type { WidgetContainerProps } from '$stylist/layout/type/alias/widget-container-props';

export function createWidgetContainerState(props: WidgetContainerProps) {
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
	const rootClass = $derived(
		WidgetContainerStyleManager.getRootClass(isMaximized, mergeClassNames(props.class))
	);
	const headerClass = $derived(
		WidgetContainerStyleManager.getHeaderClass(props.headerClass ?? '')
	);
	const titleGroupClass = $derived(WidgetContainerStyleManager.getTitleGroupClass());
	const titleClass = $derived(WidgetContainerStyleManager.getTitleClass(size));
	const subtitleClass = $derived(WidgetContainerStyleManager.getSubtitleClass());
	const handleClass = $derived(WidgetContainerStyleManager.getHandleClass(draggable));
	const actionsClass = $derived(WidgetContainerStyleManager.getActionsClass());
	const iconButtonClass = $derived(WidgetContainerStyleManager.getIconButtonClass());
	const bodyClass = $derived(
		WidgetContainerStyleManager.getBodyClass(props.bodyClass ?? '')
	);
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
		get isCollapsed() {
			return isCollapsed;
		},
		get isMaximized() {
			return isMaximized;
		},
		get rootClass() {
			return rootClass;
		},
		get headerClass() {
			return headerClass;
		},
		get titleGroupClass() {
			return titleGroupClass;
		},
		get titleClass() {
			return titleClass;
		},
		get subtitleClass() {
			return subtitleClass;
		},
		get handleClass() {
			return handleClass;
		},
		get actionsClass() {
			return actionsClass;
		},
		get iconButtonClass() {
			return iconButtonClass;
		},
		get bodyClass() {
			return bodyClass;
		},
		get restProps() {
			return restProps;
		},
		toggleCollapse,
		toggleMaximize
	};
}

export default createWidgetContainerState;
