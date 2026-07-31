<script lang="ts">
	import createFacilitatorControlPanelState from '$stylist/wbd/function/state/facilitator-control-panel/index.svelte';
	import type { RecipeFacilitatorControlPanel } from '$stylist/wbd/interface/recipe/facilitator-control-panel';
	import RoundStatusBadge from '$stylist/wbd/component/atom/round-status-badge/index.svelte';

	let props: RecipeFacilitatorControlPanel = $props();
	const state = createFacilitatorControlPanelState(props);
</script>

<div class="wbd-facilitator-panel {state.className}">
	<div class="wbd-facilitator-panel__status">
		<RoundStatusBadge status={state.round.status} />
		<span class="wbd-facilitator-panel__progress">
			{state.totalCount - state.pendingCount}/{state.totalCount} submitted
		</span>
	</div>
	<div class="wbd-facilitator-panel__actions">
		<button type="button" onclick={state.openRound}>Open round</button>
		<button type="button" onclick={state.closeRound}>Close round</button>
		<button type="button" onclick={state.revealResults} disabled={!state.allSubmitted}>
			Reveal results
		</button>
		<button type="button" onclick={state.advanceRound}>Next round</button>
		<button type="button" onclick={state.finalize}>Finalize</button>
	</div>
</div>

<style>
	.wbd-facilitator-panel {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		padding: 1rem;
		border: 1px solid var(--color-border-primary, #e2e8f0);
		border-radius: 0.5rem;
		background: var(--color-background-secondary, #f8fafc);
	}
	.wbd-facilitator-panel__status {
		display: flex;
		align-items: center;
		gap: 0.75rem;
	}
	.wbd-facilitator-panel__progress {
		font-size: 0.75rem;
		color: var(--color-text-tertiary, #64748b);
	}
	.wbd-facilitator-panel__actions {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}
	.wbd-facilitator-panel__actions button {
		padding: 0.375rem 0.75rem;
		border: 1px solid var(--color-border-primary, #cbd5e1);
		border-radius: 0.375rem;
		background: var(--color-background-primary, #fff);
		font-size: 0.8125rem;
		font-weight: 500;
		color: var(--color-text-primary, #0f172a);
		cursor: pointer;
	}
	.wbd-facilitator-panel__actions button:hover:not(:disabled) {
		background: var(--color-background-secondary, #f1f5f9);
	}
	.wbd-facilitator-panel__actions button:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}
</style>
