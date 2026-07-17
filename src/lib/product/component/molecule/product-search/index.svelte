<script lang="ts">
	import type { RecipeProductSearch } from '$stylist/product/interface/recipe/product-search';
	import createProductSearchState from '$stylist/product/function/state/product-search/index.svelte';

	let props: RecipeProductSearch = $props();
	const state = createProductSearchState(props);
</script>

<div class={state.rootClasses}>
	<div class="product-search__field">
		<input
			type="text"
			bind:value={state.query}
			oninput={(e) => state.handleInput((e.target as HTMLInputElement).value)}
			onkeydown={(e) => e.key === 'Enter' && state.handleSearch()}
			placeholder={props.placeholder ?? 'Search products...'}
			class="product-search__input"
		/>
		<button type="button" onclick={state.handleSearch} class="product-search__button">
			Search
		</button>
	</div>

	{#if state.showSuggestions}
		<div class="product-search__suggestions">
			{#each props.suggestions ?? [] as suggestion}
				<button
					type="button"
					onclick={() => state.selectSuggestion(suggestion)}
					class="product-search__suggestion"
				>
					{suggestion}
				</button>
			{/each}
		</div>
	{/if}
</div>

<style>
	.product-search__field {
		display: flex;
	}
	.product-search__input {
		flex: 1 1 0%;
		border: 1px solid var(--color-border-primary);
		border-radius: 0.5rem 0 0 0.5rem;
		padding: 0.75rem;
	}
	.product-search__input:focus {
		outline: 2px solid transparent;
		outline-offset: 2px;
	}
	.product-search__button {
		border-radius: 0 0.5rem 0.5rem 0;
		background-color: var(--color-primary-600);
		padding: 0.75rem 1.5rem;
		color: var(--color-text-inverse);
	}
	.product-search__suggestions {
		position: absolute;
		z-index: var(--z-index-docked);
		margin-top: 0.25rem;
		max-height: 15rem;
		width: 100%;
		overflow-y: auto;
		border-radius: 0.5rem;
		border: 1px solid var(--color-border-primary);
		background-color: var(--color-background-primary);
		box-shadow:
			0 10px 15px -3px rgb(0 0 0 / 0.1),
			0 4px 6px -4px rgb(0 0 0 / 0.1);
	}
	.product-search__suggestion {
		display: block;
		width: 100%;
		border-bottom: 1px solid var(--color-border-primary);
		padding: 0.75rem;
		text-align: left;
	}
	.product-search__suggestion:hover {
		background-color: var(--color-background-secondary);
	}
	.product-search__suggestion:last-child {
		border-bottom: 0;
	}
</style>
