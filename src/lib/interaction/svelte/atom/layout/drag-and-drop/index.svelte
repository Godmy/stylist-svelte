<script lang="ts">
	import type { SlotDragAndDrop as DragAndDropProps } from '$stylist/control/interface/slot/drag-and-drop';
	import { createDragAndDropState } from '$stylist/control/function/state/drag-and-drop';

	let props: DragAndDropProps = $props();
	const state = createDragAndDropState(props);

	const restProps = $derived(
		(() => {
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
				variant,
				showDragHandle,
				dragCursor,
				...rest
			} = props;
			return rest;
		})()
	);

	function handleDragStart(event: DragEvent) {
		if (state.disabled || !state.draggable) return;

		state.startDragging();

		if (props.dragData) {
			event.dataTransfer?.setData('application/json', JSON.stringify(props.dragData));
		}
		if (event.dataTransfer) {
			event.dataTransfer.effectAllowed = 'move';
		}

		props.onDragStart?.(event);
	}

	function handleDrag(event: DragEvent) {
		if (state.disabled) return;
		props.onDrag?.(event);
	}

	function handleDragEnd(event: DragEvent) {
		state.stopDragging();
		props.onDragEnd?.(event);
	}

	function handleDragEnter(event: DragEvent) {
		if (state.disabled || !state.dropzone) return;
		event.preventDefault();
		state.enterDropZone();
		props.onDragEnter?.(event);
	}

	function handleDragLeave(event: DragEvent) {
		if (state.disabled || !state.dropzone) return;
		state.leaveDropZone();
		props.onDragLeave?.(event);
	}

	function handleDragOver(event: DragEvent) {
		if (state.disabled || !state.dropzone) return;
		event.preventDefault();
		if (event.dataTransfer) {
			event.dataTransfer.dropEffect = 'move';
		}
		props.onDragOver?.(event);
	}

	function handleDrop(event: DragEvent) {
		if (state.disabled || !state.dropzone) return;
		event.preventDefault();
		state.leaveDropZone();

		const data = event.dataTransfer?.getData('application/json');
		if (data) {
			(event as any).dragData = JSON.parse(data);
		}

		props.onDrop?.(event);
	}

	function getDraggableAttr() {
		if (state.disabled) return undefined;
		return state.draggable ? true : undefined;
	}
</script>

<div
	class={state.classes}
	{...restProps}
	draggable={getDraggableAttr()}
	ondragstart={handleDragStart}
	ondrag={handleDrag}
	ondragend={handleDragEnd}
	ondragenter={handleDragEnter}
	ondragleave={handleDragLeave}
	ondragover={handleDragOver}
	ondrop={handleDrop}
>
	{#if state.showDragHandle && state.draggable && !state.disabled}
		<div class="drag-handle-icon absolute top-2 right-2 opacity-50">
			<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
				<circle cx="4" cy="4" r="1.5" />
				<circle cx="4" cy="8" r="1.5" />
				<circle cx="4" cy="12" r="1.5" />
				<circle cx="8" cy="4" r="1.5" />
				<circle cx="8" cy="8" r="1.5" />
				<circle cx="8" cy="12" r="1.5" />
			</svg>
		</div>
	{/if}
	{#if props.children}
		{@render props.children?.()}
	{/if}
</div>
