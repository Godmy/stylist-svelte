import type { DragAndDropProps } from '$stylist/interaction/interface/drag-and-drop';
import { clsx } from 'clsx';

export function createDragAndDropState(props: DragAndDropProps) {
	const draggable = $derived(props.draggable ?? false);
	const dropzone = $derived(props.dropzone ?? false);
	const disabled = $derived(props.disabled ?? false);
	const variant = $derived(props.variant ?? 'default');
	const showDragHandle = $derived(props.showDragHandle ?? false);
	const dragCursor = $derived(props.dragCursor ?? 'grab');

	const state = $state({
		isDragging: false,
		isOverDropZone: false
	});

	const classes = $derived(() => {
		const baseClasses: string[] = ['relative'];

		// Drag cursor
		if (draggable && !disabled) {
			if (dragCursor === 'grab') {
				baseClasses.push('cursor-grab');
			} else if (dragCursor === 'grabbing') {
				baseClasses.push('cursor-grabbing');
			} else if (dragCursor === 'move') {
				baseClasses.push('cursor-move');
			}
		}

		// Drag handle
		if (showDragHandle && draggable && !disabled) {
			baseClasses.push('drag-handle');
		}

		// Drop zone
		if (dropzone && !disabled) {
			baseClasses.push('dropzone');
			if (state.isOverDropZone) {
				baseClasses.push('dropzone-over');
			}
		}

		// Dragging state
		if (state.isDragging) {
			baseClasses.push('dragging', 'opacity-50');
		}

		// Disabled
		if (disabled) {
			baseClasses.push('disabled', 'pointer-events-none', 'opacity-50');
		}

		// Variant
		if (variant !== 'default') {
			baseClasses.push(`drag-${variant}`);
		}

		return clsx(...baseClasses, props.class ?? '');
	});

	function startDragging() {
		if (!disabled && draggable) {
			state.isDragging = true;
		}
	}

	function stopDragging() {
		state.isDragging = false;
	}

	function enterDropZone() {
		if (!disabled && dropzone) {
			state.isOverDropZone = true;
		}
	}

	function leaveDropZone() {
		state.isOverDropZone = false;
	}

	return {
		get draggable() {
			return draggable;
		},
		get dropzone() {
			return dropzone;
		},
		get disabled() {
			return disabled;
		},
		get showDragHandle() {
			return showDragHandle;
		},
		get classes() {
			return classes;
		},
		get isDragging() {
			return state.isDragging;
		},
		get isOverDropZone() {
			return state.isOverDropZone;
		},
		startDragging,
		stopDragging,
		enterDropZone,
		leaveDropZone
	};
}

export default createDragAndDropState;
