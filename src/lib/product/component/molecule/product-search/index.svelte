<script lang="ts">
	import type { RecipeProductSearch } from '$stylist/product/interface/recipe/product-search';
	import createProductSearchState from '$stylist/product/function/state/product-search/index.svelte';

	let props: RecipeProductSearch = $props();
	const state = createProductSearchState(props);
</script>

<div class="product-search" {...props}>
	<div class="_c1">
		<input
			type="text"
			bind:value={state.query}
			oninput={(e) => state.handleInput((e.target as HTMLInputElement).value)}
			onkeydown={(e) => e.key === 'Enter' && state.handleSearch()}
			placeholder={props.placeholder ?? 'Search products...'}
			class="ps-input-left _c2 _c1"
		/>
		<button type="button" onclick={state.handleSearch} class="ps-btn-right _c3">Search</button>
	</div>

	{#if state.showSuggestions}
		<div class="_c4 z-[var(--z-index-docked)]">
			{#each props.suggestions ?? [] as suggestion}
				<button type="button" onclick={() => state.selectSuggestion(suggestion)} class="_c5 _c2">
					{suggestion}
				</button>
			{/each}
		</div>
	{/if}
</div>

<style>
	._c1 {
		display: flex;
	}
	._c2 {
		flex: 1 1 0%;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		padding: 0.75rem;
	}
	._c3 {
		background-color: var(--color-primary-600);
		padding-left: 1.5rem;
		padding-right: 1.5rem;
		padding-top: 0.75rem;
		padding-bottom: 0.75rem;
		color: var(--color-text-inverse);
	}
	._c4 {
		position: absolute;
		margin-top: 0.25rem;
		max-height: 15rem;
		width: 100%;
		overflow-y: auto;
		border-radius: 0.5rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-primary);
		box-shadow:
			0 10px 15px -3px rgb(0 0 0 / 0.1),
			0 4px 6px -4px rgb(0 0 0 / 0.1);
	}
	._c5 {
		display: block;
		width: 100%;
		border-bottom-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		padding: 0.75rem;
		text-align: left;
	}

	._c1:focus {
		outline: 2px solid transparent;
		outline-offset: 2px;
	}
	._c2:hover {
		background-color: var(--color-background-secondary);
	}

	.ps-input-left {
		border-radius: 0.5rem 0 0 0.5rem;
	}
	.ps-btn-right {
		border-radius: 0 0.5rem 0.5rem 0;
	}
	._c5:last-child {
		border-bottom: 0;
	}
</style>
