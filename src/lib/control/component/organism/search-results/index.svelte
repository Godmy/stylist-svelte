<script lang="ts">
	import BaseIcon from '$stylist/media/component/atom/icon/index.svelte';
	import createSearchResultsState from '$stylist/control/function/state/search-results/index.svelte';
	import type { SearchResultsProps } from '$stylist/control/type/struct/search-results-props';

	let props: SearchResultsProps = $props();
	const state = createSearchResultsState(props);

	const restProps = $derived.by(() => {
		const {
			class: _class,
			results: _results,
			query: _query,
			loading: _loading,
			onResultClick: _onResultClick,
			showMetadata: _showMetadata,
			maxResults: _maxResults,
			...rest
		} = props;
		return rest;
	});
</script>

<div class={state.rootClass} {...restProps}>
	{#if state.loading}
		<div class="p-8 text-center text-sm text-[var(--color-text-secondary)]">Loading...</div>
	{:else if state.displayedResults.length === 0 && state.query}
		<div class="p-8 text-center text-sm text-[var(--color-text-secondary)]">
			No results for "{state.query}"
		</div>
	{:else}
		<div class="divide-y divide-gray-200 rounded-lg border">
			{#each state.displayedResults as result}
				<button
					type="button"
					class="w-full p-4 text-left hover:bg-[var(--color-background-secondary)]"
					onclick={() => state.onResultClick?.(result)}
				>
					<div class="flex gap-3">
						<BaseIcon
							name={state.icon(result.type)}
							class="h-5 w-5 text-[var(--color-text-secondary)]"
						/>
						<div>
							<div class="font-medium">{result.title}</div>
							{#if result.description}<div class="text-sm text-[var(--color-text-secondary)]">
									{result.description}
								</div>{/if}
							{#if state.showMetadata && result.metadata}
								<div class="mt-1 text-xs text-[var(--color-text-secondary)]">
									{result.metadata.date}
									{result.metadata.author}
									{result.metadata.location}
								</div>
							{/if}
						</div>
					</div>
				</button>
			{/each}
		</div>
	{/if}
</div>
