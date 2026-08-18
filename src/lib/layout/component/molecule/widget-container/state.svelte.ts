import type { RecipeWidgetContainer } from '$stylist/layout/interface/recipe/widget-container';

export function createWidgetContainerState(props: RecipeWidgetContainer) {
	let isCollapsed = $state(props.initiallyCollapsed ?? false);
	let isMaximized = $state(false);
	let isDragging = $state(false);
	let dragOffset = $state({ x: 0, y: 0 });
	let dragOrigin = { pointerX: 0, pointerY: 0, offsetX: 0, offsetY: 0 };

	const title = $derived(props.title);
	const subtitle = $derived(props.subtitle);
	const content = $derived(props.content);
	const actions = $derived(props.actions);
	const collapsible = $derived(props.collapsible ?? true);
	const draggable = $derived(props.draggable ?? true);
	const maximizable = $derived(props.maximizable ?? true);
	const resizable = $derived(props.resizable ?? false);
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
		if (isMaximized) dragOffset = { x: 0, y: 0 };
	}

	function handleDragPointerDown(event: PointerEvent): void {
		if (!draggable || isMaximized) return;
		isDragging = true;
		dragOrigin = {
			pointerX: event.clientX,
			pointerY: event.clientY,
			offsetX: dragOffset.x,
			offsetY: dragOffset.y
		};
		(event.currentTarget as HTMLElement).setPointerCapture(event.pointerId);
	}

	function handleDragPointerMove(event: PointerEvent): void {
		if (!isDragging) return;
		dragOffset = {
			x: dragOrigin.offsetX + (event.clientX - dragOrigin.pointerX),
			y: dragOrigin.offsetY + (event.clientY - dragOrigin.pointerY)
		};
	}

	function handleDragPointerUp(event: PointerEvent): void {
		if (!isDragging) return;
		isDragging = false;
		(event.currentTarget as HTMLElement).releasePointerCapture(event.pointerId);
	}

	function handleDragKeyDown(event: KeyboardEvent): void {
		if (!draggable || isMaximized) return;
		const step = event.shiftKey ? 24 : 8;
		const moves: Record<string, [number, number]> = {
			ArrowUp: [0, -step],
			ArrowDown: [0, step],
			ArrowLeft: [-step, 0],
			ArrowRight: [step, 0]
		};
		const move = moves[event.key];
		if (!move) return;
		event.preventDefault();
		dragOffset = { x: dragOffset.x + move[0], y: dragOffset.y + move[1] };
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
		get resizable() {
			return resizable;
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
		get isDragging() {
			return isDragging;
		},
		get dragOffset() {
			return dragOffset;
		},
		get restProps() {
			return restProps;
		},
		toggleCollapse,
		toggleMaximize,
		handleDragPointerDown,
		handleDragPointerMove,
		handleDragPointerUp,
		handleDragKeyDown
	};
}

export default createWidgetContainerState;
