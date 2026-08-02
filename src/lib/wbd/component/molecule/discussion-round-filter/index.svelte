<script lang="ts">
	import createWbdDiscussionRoundFilterState from '$stylist/wbd/function/state/discussion-round-filter/index.svelte';
	import type { RecipeWbdDiscussionRoundFilter } from '$stylist/wbd/interface/recipe/discussion-round-filter';

	let props: RecipeWbdDiscussionRoundFilter = $props();
	const state = createWbdDiscussionRoundFilterState(props);
</script>

<div class="wbd-round-filter {state.className}">
	{#each state.rounds as round}
		<button
			type="button"
			class:wbd-round-filter__button--active={round === state.selectedRound}
			onclick={() => state.selectRound(round)}
		>
			R{round}
		</button>
	{/each}
</div>

<style>
	.wbd-round-filter {
		display: flex;
		flex-wrap: wrap;
		gap: 0.375rem;
	}
	.wbd-round-filter button {
		width: 2.5rem;
		height: 2rem;
		border: 1px solid var(--color-border-primary, #cbd5e1);
		border-radius: 0.375rem;
		background: var(--color-background-primary, #fff);
		font-size: 0.75rem;
		font-weight: 700;
		color: var(--color-text-secondary, #475569);
		cursor: pointer;
	}
	.wbd-round-filter__button--active {
		border-color: var(--color-primary-500, #3b82f6) !important;
		background: var(--color-primary-50, #eff6ff) !important;
		color: var(--color-primary-700, #1d4ed8) !important;
	}
</style>
