<script lang="ts">
  import type { ProductSearchRecipe } from '$stylist/commerce/interface/recipe/product-search';
  import { createProductSearchState } from '$stylist/commerce/function/state/product-search';

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
      class="flex-1 p-3 border border-[var(--color-border-primary)] rounded-l-lg focus:outline-none"
    />
    <button type="button" onclick={state.handleSearch} class="bg-[var(--color-primary-600)] text-[var(--color-text-inverse)] px-6 py-3 rounded-r-lg">Search</button>
  </div>

  {#if state.showSuggestions}
    <div class="absolute z-[var(--z-index-docked)] w-full mt-1 bg-[var(--color-background-primary)] border border-[var(--color-border-primary)] rounded-lg shadow-lg max-h-60 overflow-y-auto">
      {#each props.suggestions ?? [] as suggestion}
        <button
          type="button"
          onclick={() => state.selectSuggestion(suggestion)}
          class="block w-full text-left p-3 hover:bg-[var(--color-background-secondary)] border-b border-[var(--color-border-primary)] last:border-b-0"
        >
          {suggestion}
        </button>
      {/each}
    </div>
  {/if}
</div>
