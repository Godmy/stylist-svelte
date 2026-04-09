import { DraggableStyleManager } from '$stylist/interaction/class/style-manager/draggable';
import { ObjectManagerGesture } from '$stylist/interaction/class/object-manager/gesture';
import type { DragProps } from '$stylist/interaction/interface/proto/draggable-props';

export const createDraggableState = (props: DragProps) => {
	// State
	let isDragging = $state(false);
	let isOverDropZone = $state(false);

	// Нормализация props
	const normalizedProps = $derived(ObjectManagerGesture.normalizeDragContract(props));

	// Вычисляемые классы
	const classes = $derived.by(() =>
		DraggableStyleManager.getClasses({
			draggable: normalizedProps.draggable,
			dropzone: normalizedProps.dropzone,
			isDragging,
			isOverDropZone,
			disabled: normalizedProps.disabled,
			showHandle: props.showHandle,
			class: props.class
		})
	);

	// Извлечение rest props
	const restProps = $derived.by(() => {
		const {
			class: _class,
			draggable,
			dropzone,
			dragData,
			onDragStart,
			onDrag,
			onDragEnd,
			onDragEnter,
			onDragLeave,
			onDragOver,
			onDrop,
			disabled,
			showDragHandle,
			dragCursor,
			...rest
		} = props;
		return rest;
	});

	// Обработчики
	function handleDragStart(event: DragEvent) {
		if (normalizedProps.disabled || !normalizedProps.draggable) return;

		isDragging = true;

		if (props.dragData && event.dataTransfer) {
			event.dataTransfer.setData('application/json', JSON.stringify(props.dragData));
			event.dataTransfer.effectAllowed = 'move';
		}

		props.onDragStart?.(event);
	}

	function handleDrag(event: DragEvent) {
		if (normalizedProps.disabled) return;
		props.onDrag?.(event);
	}

	function handleDragEnd(event: DragEvent) {
		isDragging = false;
		props.onDragEnd?.(event);
	}

	function handleDragEnter(event: DragEvent) {
		if (normalizedProps.disabled || !normalizedProps.dropzone) return;
		event.preventDefault();
		isOverDropZone = true;
		props.onDragEnter?.(event);
	}

	function handleDragLeave(event: DragEvent) {
		if (normalizedProps.disabled || !normalizedProps.dropzone) return;
		isOverDropZone = false;
		props.onDragLeave?.(event);
	}

	function handleDragOver(event: DragEvent) {
		if (normalizedProps.disabled || !normalizedProps.dropzone) return;
		event.preventDefault();
		if (event.dataTransfer) {
			event.dataTransfer.dropEffect = 'move';
		}
		props.onDragOver?.(event);
	}

	function handleDrop(event: DragEvent) {
		if (normalizedProps.disabled || !normalizedProps.dropzone) return;
		event.preventDefault();
		isOverDropZone = false;

		if (event.dataTransfer) {
			const data = event.dataTransfer.getData('application/json');
			if (data) {
				(event as any).dragData = JSON.parse(data);
			}
		}

		props.onDrop?.(event);
	}

	function getDraggableAttr() {
		if (normalizedProps.disabled || !normalizedProps.draggable) return undefined;
		return true;
	}

	return {
		// State getters
		get isDragging() {
			return isDragging;
		},
		get isOverDropZone() {
			return isOverDropZone;
		},
		get draggable() {
			return normalizedProps.draggable;
		},
		get disabled() {
			return normalizedProps.disabled;
		},
		get showDragHandle() {
			return props.showDragHandle;
		},

		// State
		classes,
		restProps,

		// Handlers
		handleDragStart,
		handleDrag,
		handleDragEnd,
		handleDragEnter,
		handleDragLeave,
		handleDragOver,
		handleDrop,
		getDraggableAttr
	};
};

export default createDraggableState;
