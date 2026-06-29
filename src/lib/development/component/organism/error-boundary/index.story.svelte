<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import RecipeErrorBoundary from './index.svelte';
</script>

<Story
	component={RecipeErrorBoundary}
	title="Error Boundary"
	description="Development-domain wrapper for previewing fallback behavior around dynamic component rendering."
>
	{#snippet children()}
		<RecipeErrorBoundary component={null}>
			{#snippet children()}
				<div class="_c1">
					Boundary active. Inject a runtime error in this area to test fallback UI.
				</div>
			{/snippet}
		</RecipeErrorBoundary>
	{/snippet}
</Story>

<style>
	._c1 {
		border-radius: 0.5rem;
		border-width: 1px;
		border-style: dashed;
		border-color: #d1d5db;
		padding: 1rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: #374151;
	}
</style>
