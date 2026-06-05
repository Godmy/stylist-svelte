import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import type { SlotDragAndDrop as DragAndDropProps } from '$stylist/control/interface/slot/drag-and-drop';

export function createDragAndDropState(props: DragAndDropProps) {
	const draggable = $derived(props.draggable ?? false);
	const dropzone = $derived(props.dropzone ?? false);
	const disabled = $derived(props.disabled ?? false);
	const variant = $derived(props.variant ?? 'default');
	const showDragHandle = $derived(props.showDragHandle ?? false);

	const state = $state({
		isDragging: false,
		isOverDropZone: false
	});

	const classes = $derived(
		mergeClassNames(
			'c-drag-and-drop',
			draggable && !disabled && 'c-drag-and-drop--draggable',
			showDragHandle && draggable && !disabled && 'c-drag-and-drop--handle',
			dropzone && !disabled && 'c-drag-and-drop--dropzone',
			state.isOverDropZone && 'c-drag-and-drop--drop-active',
			state.isDragging && 'c-drag-and-drop--dragging',
			disabled && 'c-drag-and-drop--disabled',
			variant !== 'default' && `c-drag-and-drop--${variant}`,
			props.class
		)
	);

	function startDragging() {
		if (!disabled && draggable) state.isDragging = true;
	}

	function stopDragging() {
		state.isDragging = false;
	}

	function enterDropZone() {
		if (!disabled && dropzone) state.isOverDropZone = true;
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
