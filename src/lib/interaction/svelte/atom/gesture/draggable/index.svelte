<script lang="ts">
	import type { DragProps } from '$stylist/interaction/interface/proto/draggable-props';
	import { createDraggableState } from '$stylist/interaction/function/state/draggable';

	let props: DragProps = $props();
	const state = createDraggableState(props);
</script>

<div
	class={state.classes}
	{...state.restProps}
	draggable={state.getDraggableAttr()}
	ondragstart={state.handleDragStart}
	ondrag={state.handleDrag}
	ondragend={state.handleDragEnd}
	ondragenter={state.handleDragEnter}
	ondragleave={state.handleDragLeave}
	ondragover={state.handleDragOver}
	ondrop={state.handleDrop}
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
