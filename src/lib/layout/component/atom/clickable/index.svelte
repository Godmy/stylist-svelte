<script lang="ts">
	import type { RecipeClickable } from '$stylist/layout/interface/recipe/clickable';
	import createClickableState from './state.svelte';

	let props: RecipeClickable = $props();
	const state = createClickableState(props);
</script>

<div
	class={state.classes}
	style="cursor: {state.cursor};"
	data-variant={state.variant}
	data-hover-effect={state.hoverEffect || undefined}
	{...state.restProps}
	onclick={state.handleClick}
	ondblclick={state.handleDblClick}
	oncontextmenu={state.handleContextMenu}
	onmousedown={state.handleMouseDown}
	onmouseup={state.handleMouseUp}
	onmouseenter={state.handleMouseEnter}
	onmouseleave={state.handleMouseLeave}
>
	{#if props.children}{@render props.children()}{/if}
</div>

<style>
	.c-clickable {
		transition: all var(--duration-120, 120ms) var(--easing-smooth, ease-in-out);
		cursor: pointer;
	}

	.c-clickable--press:active {
		transform: scale(0.95);
	}

	.c-clickable--hover:hover {
		opacity: 0.8;
	}

	.c-clickable--disabled {
		opacity: 0.5;
		cursor: not-allowed;
		pointer-events: none;
	}

	.c-clickable[data-hover-effect][data-variant='neutral']:hover {
		background: var(--color-neutral-100);
		opacity: 1;
	}

	.c-clickable[data-hover-effect][data-variant='primary']:hover {
		background: var(--color-primary-50);
		opacity: 1;
	}

	.c-clickable[data-hover-effect][data-variant='secondary']:hover {
		background: var(--color-secondary-50);
		opacity: 1;
	}

	.c-clickable[data-hover-effect][data-variant='tertiary']:hover {
		background: var(--color-background-tertiary);
		opacity: 1;
	}

	.c-clickable[data-hover-effect][data-variant='success']:hover {
		background: var(--color-success-50);
		opacity: 1;
	}

	.c-clickable[data-hover-effect][data-variant='info']:hover {
		background: var(--color-info-50);
		opacity: 1;
	}

	.c-clickable[data-hover-effect][data-variant='warning']:hover {
		background: var(--color-warning-50);
		opacity: 1;
	}

	.c-clickable[data-hover-effect][data-variant='danger']:hover,
	.c-clickable[data-hover-effect][data-variant='error']:hover {
		background: var(--color-danger-50);
		opacity: 1;
	}
</style>
