<script lang="ts">
	import type { RecipeBaseCard } from '$stylist/information/interface/recipe/base-card';
	import { createBaseCardState } from '$stylist/information/function/state/base-card/index.svelte';

	let props: RecipeBaseCard = $props();
	const state = createBaseCardState(props);
</script>

<div class={state.containerClasses} {...props}>
	{#if state.hasHeader}
		<div class={state.headerClasses}>
			{#if props.title}
				<h3 class="bc-title">{props.title}</h3>
			{/if}
			{#if props.description}
				<p class="bc-description">{props.description}</p>
			{/if}
		</div>
	{/if}

	<div class={state.bodyClasses}>
		{#if props.children}
			{#if props.children}{@render props.children()}{/if}
		{/if}
	</div>
</div>

<style>
	.base-card {
		border-radius: 0.5rem;
		border: 1px solid var(--color-border-primary);
		background-color: var(--color-background-primary);
	}
	.base-card__header {
		padding: 1rem;
		border-bottom: 1px solid var(--color-border-primary);
	}
	.base-card__body {
		padding: 1rem;
	}
	.bc-title {
		font-size: 1.125rem;
		font-weight: 600;
	}
	.bc-description {
		font-size: 0.875rem;
		color: var(--color-text-secondary);
	}
</style>
