import { DraggableCardStyleManager } from '$stylist/management/class/style-manager/draggable-card';
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

	const rootClass = $derived(
		DraggableCardStyleManager.getRootClass(
			`${isDragging ? DraggableCardStyleManager.getDraggingClass() : 'opacity-[var(--opacity-100)]'} ${
				variant === 'compact' ? DraggableCardStyleManager.getCompactClass() : DraggableCardStyleManager.getDefaultClass()
			} ${hostClass}`
		)
	);
	const handleClass = $derived(DraggableCardStyleManager.getHandleClass());
	const gripIconClass = $derived(DraggableCardStyleManager.getGripIconClass());
	const titleClass = $derived(DraggableCardStyleManager.getTitleClass());
	const descriptionClass = $derived(DraggableCardStyleManager.getDescriptionClass());
	const tagsContainerClass = $derived(DraggableCardStyleManager.getTagsContainerClass());
	const tagClass = $derived(DraggableCardStyleManager.getTagClass());
	const metadataClass = $derived(DraggableCardStyleManager.getMetadataClass());
	const dateClass = $derived(DraggableCardStyleManager.getDateClass());
	const assigneeClass = $derived(DraggableCardStyleManager.getAssigneeClass());

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

	return {
		get data() { return data; },
		get hostClass() { return hostClass; },
		get contentClass() { return contentClass; },
		get headerClass() { return headerClass; },
		get bodyClass() { return bodyClass; },
		get footerClass() { return footerClass; },
		get disabled() { return disabled; },
		get draggable() { return draggable; },
		get showHandle() { return showHandle; },
		get showMenu() { return showMenu; },
		get variant() { return variant; },
		get isDragging() { return isDragging; },
		get rootClass() { return rootClass; },
		get handleClass() { return handleClass; },
		get gripIconClass() { return gripIconClass; },
		get titleClass() { return titleClass; },
		get descriptionClass() { return descriptionClass; },
		get tagsContainerClass() { return tagsContainerClass; },
		get tagClass() { return tagClass; },
		get metadataClass() { return metadataClass; },
		get dateClass() { return dateClass; },
		get assigneeClass() { return assigneeClass; },
		get restProps() { return restProps; },
		handleDragStart,
		handleDragEnd,
		handleClick,
		handleContextMenu
	};
}

export default createDraggableCardState;
