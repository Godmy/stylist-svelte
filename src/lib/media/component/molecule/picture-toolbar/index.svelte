<script lang="ts">
	import type { RecipePictureToolbar } from '$stylist/media/interface/recipe/picture-toolbar';
	import { createPictureToolbarState } from '$stylist/media/function/state/picture-toolbar/index.svelte';

	let props: RecipePictureToolbar = $props();
	const state = createPictureToolbarState(props);
</script>

<div class={state.rootClass}>
	{#each state.tools as tool}
		<button
			class={state.getButtonClasses(state.activeTool === tool.id)}
			onclick={() => state.selectTool(tool.id)}
			title={tool.label}
		>
			{#if tool.icon}
				<img src={tool.icon} alt={tool.label} class={state.iconClasses} />
			{:else}
				{tool.label.charAt(0).toUpperCase()}
			{/if}
		</button>
	{/each}
</div>

<style>
	.picture-toolbar {
		display: flex;
		gap: 0.5rem;
		padding: 0.5rem;
		background-color: var(--color-background-secondary);
		border-radius: 0.375rem;
	}
	.picture-toolbar__icon {
		width: 1rem;
		height: 1rem;
	}
	.picture-toolbar__button {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0.5rem;
		border-radius: 0.375rem;
		border: 1px solid var(--color-border-primary);
		background-color: var(--color-background-primary);
		color: var(--color-text-primary);
		cursor: pointer;
		transition: background-color var(--duration-150, 150ms) var(--easing-smooth, ease-in-out);
	}
	.picture-toolbar__button:hover {
		background-color: var(--color-background-secondary);
	}
	.picture-toolbar__button--active {
		background-color: var(--color-primary-500);
		border-color: var(--color-primary-500);
		color: var(--color-text-inverse);
	}
</style>
