<script lang="ts">
	import type { ProductSearchRecipe } from '$stylist/commerce/interface/recipe/product-search';
	import createProductSearchState from '$stylist/commerce/function/state/product-search/index.svelte';

	let props: ProductSearchRecipe = $props();
	const state = createProductSearchState(props);
</script>

<div class={state.rootClasses} {...props}>
	<div class="flex">
		<input
			type="text"
			bind:value={state.query}
			oninput={(e) => state.handleInput((e.target as HTMLInputElement).value)}
			onkeydown={(e) => e.key === 'Enter' && state.handleSearch()}
			placeholder={props.placeholder ?? 'Search products...'}
			class="flex-1 rounded-l-lg border border-[var(--color-border-primary)] p-3 focus:outline-none"
		/>
		<button
			type="button"
			onclick={state.handleSearch}
			class="rounded-r-lg bg-[var(--color-primary-600)] px-6 py-3 text-[var(--color-text-inverse)]"
			>Search</button
		>
	</div>

	{#if state.showSuggestions}
		<div
			class="absolute z-[var(--z-index-docked)] mt-1 max-h-60 w-full overflow-y-auto rounded-lg border border-[var(--color-border-primary)] bg-[var(--color-background-primary)] shadow-lg"
		>
			{#each props.suggestions ?? [] as suggestion}
				<button
					type="button"
					onclick={() => state.selectSuggestion(suggestion)}
					class="block w-full border-b border-[var(--color-border-primary)] p-3 text-left last:border-b-0 hover:bg-[var(--color-background-secondary)]"
				>
					{suggestion}
				</button>
			{/each}
		</div>
	{/if}
</div>
