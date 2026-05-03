import { DraggableStyleManager } from '$stylist/interaction/class/style-manager/draggable';
import { ObjectManagerGesture } from '$stylist/interaction/class/object-manager/gesture';
import type { SlotDraggable as DragProps } from '$stylist/interaction/interface/slot/draggable';

export const createDraggableState = (props: DragProps) => {
	let isDragging = $state(false);
	let isOverDropZone = $state(false);
	let dragPreviewElement = $state<HTMLElement | null>(null);

	const normalizedProps = $derived(ObjectManagerGesture.normalizeDragContract(props));

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
			showHandle,
			dragCursor,
			...rest
		} = props;
		return rest;
	});

	function copyComputedStyles(source: HTMLElement, target: HTMLElement) {
		const sourceStyle = window.getComputedStyle(source);
		for (const propertyName of sourceStyle) {
			target.style.setProperty(
				propertyName,
				sourceStyle.getPropertyValue(propertyName),
				sourceStyle.getPropertyPriority(propertyName)
			);
		}

		const sourceChildren = Array.from(source.children);
		const targetChildren = Array.from(target.children);

		for (let index = 0; index < sourceChildren.length; index += 1) {
			const sourceChild = sourceChildren[index];
			const targetChild = targetChildren[index];
			if (sourceChild instanceof HTMLElement && targetChild instanceof HTMLElement) {
				copyComputedStyles(sourceChild, targetChild);
			}
		}
	}

	function removeDragPreviewElement() {
		if (!dragPreviewElement) return;
		dragPreviewElement.remove();
		dragPreviewElement = null;
	}

	function handleDragStart(event: DragEvent) {
		if (normalizedProps.disabled || !normalizedProps.draggable) return;

		isDragging = true;

		const sourceElement =
			event.currentTarget instanceof HTMLElement ? event.currentTarget : null;

		if (sourceElement && event.dataTransfer) {
			const previewCandidate = Array.from(sourceElement.children).find(
				(child) =>
					child instanceof HTMLElement && !child.classList.contains('drag-handle-icon')
			);
			const previewSource =
				previewCandidate instanceof HTMLElement ? previewCandidate : sourceElement;

			dragPreviewElement = previewSource.cloneNode(true) as HTMLElement;
			copyComputedStyles(previewSource, dragPreviewElement);

			dragPreviewElement.style.position = 'fixed';
			dragPreviewElement.style.top = '0';
			dragPreviewElement.style.left = '0';
			dragPreviewElement.style.pointerEvents = 'none';
			dragPreviewElement.style.margin = '0';
			dragPreviewElement.style.width = `${previewSource.offsetWidth}px`;
			dragPreviewElement.style.height = `${previewSource.offsetHeight}px`;
			dragPreviewElement.style.opacity = '1';
			dragPreviewElement.style.transform = 'translate(-200vw, -200vh)';
			dragPreviewElement.style.boxShadow = '0 18px 48px rgba(15, 23, 42, 0.18)';
			dragPreviewElement.style.zIndex = '2147483647';

			document.body.appendChild(dragPreviewElement);

			const rect = previewSource.getBoundingClientRect();
			const offsetX = event.clientX - rect.left;
			const offsetY = event.clientY - rect.top;
			event.dataTransfer.setDragImage(dragPreviewElement, offsetX, offsetY);
		}

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
		removeDragPreviewElement();
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
				(event as DragEvent & { dragData?: unknown }).dragData = JSON.parse(data);
			}
		}

		props.onDrop?.(event);
	}

	function getDraggableAttr() {
		if (normalizedProps.disabled || !normalizedProps.draggable) return undefined;
		return true;
	}

	return {
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
		get showHandle() {
			return props.showHandle;
		},
		get classes() {
			return classes;
		},
		get restProps() {
			return restProps;
		},
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
