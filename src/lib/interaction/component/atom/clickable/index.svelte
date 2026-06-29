<script lang="ts">
	import type { RecipeClickable } from '$stylist/interaction/interface/recipe/clickable';
	import createClickableState from '$stylist/interaction/function/state/clickable/index.svelte';

	let props: RecipeClickable = $props();
	const state = createClickableState(props);
</script>

<div
	class={state.classes}
	style="cursor: {state.cursor};"
	{...state.restProps}
	onclick={state.handleClick}
	ondblclick={state.handleDblClick}
	oncontextmenu={state.handleContextMenu}
>
	{#if props.children}
		{#if props.children}{#if props.children}{@render props.children()}{/if}{/if}
	{/if}
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

	.c-clickable--primary {
		background: var(--color-primary-500);
		color: white;
	}

	.c-clickable--primary:hover {
		background: var(--color-primary-600);
	}

	.c-clickable--secondary {
		background: var(--color-secondary-500, var(--color-neutral-500));
		color: white;
	}

	.c-clickable--ghost {
		background: transparent;
	}

	.c-clickable--ghost:hover {
		background: var(--color-background-secondary);
	}

	.c-clickable--link {
		color: var(--color-primary-500);
		text-decoration: underline;
	}

	.c-clickable--link:hover {
		color: var(--color-primary-600);
	}
</style>
