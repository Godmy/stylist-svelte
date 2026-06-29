<script lang="ts">
	import type { RecipeDraggable } from '$stylist/interaction/interface/recipe/draggable';
	import createDraggableState from '$stylist/interaction/function/state/draggable/index.svelte';

	let props: RecipeDraggable = $props();
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
	{#if state.showHandle && state.draggable && !state.disabled}
		<div class="drag-handle-icon">
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
		{#if props.children}{#if props.children}{@render props.children()}{/if}{/if}
	{/if}
</div>

<style>
	.c-draggable {
		transition: all var(--duration-200, 200ms) var(--easing-smooth, ease-in-out);
		position: relative;
	}

	.c-draggable--grab {
		cursor: grab;
	}

	.c-draggable--grab:active {
		cursor: grabbing;
	}

	.c-draggable--dragging {
		transform: scale(1.05);
		box-shadow: var(
			--shadow-xl,
			0 20px 25px -5px rgb(0 0 0 / 0.1),
			0 8px 10px -6px rgb(0 0 0 / 0.1)
		);
	}

	.c-draggable--drop-active {
		box-shadow: 0 0 0 2px var(--color-primary-500);
		background: color-mix(in srgb, var(--color-primary-500) 5%, transparent);
	}

	.c-draggable--disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}

	.drag-handle-icon {
		position: absolute;
		top: 0.5rem;
		right: 0.5rem;
		opacity: 0.5;
		pointer-events: none;
	}
</style>
