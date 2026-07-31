<script lang="ts">
	import createRoundCollectionPanelState from '$stylist/wbd/function/state/round-collection-panel/index.svelte';
	import type { RecipeRoundCollectionPanel } from '$stylist/wbd/interface/recipe/round-collection-panel';
	import EstimateInputRow from '$stylist/wbd/component/molecule/estimate-input-row/index.svelte';

	let props: RecipeRoundCollectionPanel = $props();
	const state = createRoundCollectionPanelState(props);
</script>

<section class="wbd-round-collection-panel {state.className}">
	<div class="wbd-round-collection-panel__header">
		<span>Your estimates</span>
		<span class="wbd-round-collection-panel__progress">
			{state.submittedCount}/{state.totalCount}
		</span>
	</div>
	<div class="wbd-round-collection-panel__list">
		{#each state.tasks as task (task.id)}
			<EstimateInputRow
				{task}
				value={state.values[task.id]}
				submitted={state.values[task.id] !== undefined}
				onSubmit={(estimate) => state.submitEstimate(task.id, estimate)}
			/>
		{/each}
	</div>
</section>

<style>
	.wbd-round-collection-panel {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
	.wbd-round-collection-panel__header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 0.875rem;
		font-weight: 600;
		color: var(--color-text-primary, #0f172a);
	}
	.wbd-round-collection-panel__progress {
		font-size: 0.75rem;
		font-weight: 400;
		color: var(--color-text-tertiary, #64748b);
	}
	.wbd-round-collection-panel__list {
		display: flex;
		flex-direction: column;
	}
</style>
