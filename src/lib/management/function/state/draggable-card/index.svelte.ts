import type { DraggableCardStateProps } from '$stylist/management/type/alias/draggable-card-state-props';

export function createDraggableCardState(props: DraggableCardStateProps) {
	const data = $derived(props.data);
	const hostClass = $derived(props.class ?? '');
	const contentClass = $derived(props.contentClass ?? '');
	const headerClass = $derived(props.headerClass ?? '');
	const bodyClass = $derived(props.bodyClass ?? '');
	const footerClass = $derived(props.footerClass ?? '');
	const disabled = $derived(props.disabled ?? false);
	const draggable = $derived(props.draggable ?? true);
	const showHandle = $derived(props.showHandle ?? true);
	const showMenu = $derived(props.showMenu ?? true);
	const variant = $derived(props.variant ?? 'default');

	let isDragging = $state(false);

	function handleDragStart(e: DragEvent): void {
		if (disabled || !draggable) return;
		isDragging = true;
		e.dataTransfer?.setData('text/plain', String(data.id ?? ''));
		props.onDragStart?.(data);
	}

	function handleDragEnd(): void {
		isDragging = false;
		props.onDragEnd?.(data);
	}

	function handleClick(): void {
		if (!disabled) {
			props.onCardClick?.(data);
		}
	}

	function handleContextMenu(e: MouseEvent): void {
		e.preventDefault();
		if (!disabled) {
			props.onContextMenu?.(data, e);
		}
	}

	const restProps = $derived.by(() => {
		const {
			class: _class,
			data: _data,
			contentClass: _contentClass,
			headerClass: _headerClass,
			bodyClass: _bodyClass,
			footerClass: _footerClass,
			onDragStart: _onDragStart,
			onDragEnd: _onDragEnd,
			onCardClick: _onCardClick,
			onContextMenu: _onContextMenu,
			disabled: _disabled,
			draggable: _draggable,
			showHandle: _showHandle,
			showMenu: _showMenu,
			variant: _variant,
			...rest
		} = props;
		return rest;
	});

	const rootClass = $derived(
		['draggable-card__root', isDragging ? 'draggable-card__root--dragging' : '', hostClass]
			.filter(Boolean)
			.join(' ')
	);
	const handleClass = 'draggable-card__handle';
	const gripIconClass = 'draggable-card__grip-icon';
	const titleClass = 'draggable-card__title';
	const descriptionClass = 'draggable-card__description';
	const tagsContainerClass = 'draggable-card__tags-container';
	const tagClass = 'draggable-card__tag';
	const metadataClass = 'draggable-card__metadata';
	const dateClass = 'draggable-card__date';
	const assigneeClass = 'draggable-card__assignee';

	return {
		get data() {
			return data;
		},
		get rootClass() {
			return rootClass;
		},
		get handleClass() {
			return handleClass;
		},
		get gripIconClass() {
			return gripIconClass;
		},
		get titleClass() {
			return titleClass;
		},
		get descriptionClass() {
			return descriptionClass;
		},
		get tagsContainerClass() {
			return tagsContainerClass;
		},
		get tagClass() {
			return tagClass;
		},
		get metadataClass() {
			return metadataClass;
		},
		get dateClass() {
			return dateClass;
		},
		get assigneeClass() {
			return assigneeClass;
		},
		get hostClass() {
			return hostClass;
		},
		get contentClass() {
			return contentClass;
		},
		get headerClass() {
			return headerClass;
		},
		get bodyClass() {
			return bodyClass;
		},
		get footerClass() {
			return footerClass;
		},
		get disabled() {
			return disabled;
		},
		get draggable() {
			return draggable;
		},
		get showHandle() {
			return showHandle;
		},
		get showMenu() {
			return showMenu;
		},
		get variant() {
			return variant;
		},
		get isDragging() {
			return isDragging;
		},
		get restProps() {
			return restProps;
		},
		handleDragStart,
		handleDragEnd,
		handleClick,
		handleContextMenu
	};
}

export default createDraggableCardState;
