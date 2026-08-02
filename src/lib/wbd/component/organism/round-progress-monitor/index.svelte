<script lang="ts">
	import createWbdRoundProgressMonitorState from '$stylist/wbd/function/state/round-progress-monitor/index.svelte';
	import type { RecipeWbdRoundProgressMonitor } from '$stylist/wbd/interface/recipe/round-progress-monitor';

	let props: RecipeWbdRoundProgressMonitor = $props();
	const state = createWbdRoundProgressMonitorState(props);
</script>

<section class="wbd-round-progress {state.className}">
	<div class="wbd-round-progress__header">
		<span>Round {state.progress.roundNumber}</span>
		<strong>{state.submittedPercent}% submitted</strong>
	</div>
	<div class="wbd-round-progress__bar" aria-hidden="true">
		<span style={`width: ${state.submittedPercent}%;`}></span>
	</div>
	<div class="wbd-round-progress__meta">
		<span>{state.progress.submittedExperts}/{state.progress.totalExperts} experts</span>
		<span>{state.progress.pendingExperts} pending</span>
		{#if state.progress.deadline}
			<span>Deadline {state.progress.deadline}</span>
		{/if}
	</div>
</section>

<style>
	.wbd-round-progress {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
	.wbd-round-progress__header,
	.wbd-round-progress__meta {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		gap: 0.5rem;
	}
	.wbd-round-progress__header span,
	.wbd-round-progress__meta {
		font-size: 0.75rem;
		color: var(--color-text-tertiary, #64748b);
	}
	.wbd-round-progress__header strong {
		font-size: 0.8125rem;
		color: var(--color-text-primary, #0f172a);
	}
	.wbd-round-progress__bar {
		height: 0.5rem;
		overflow: hidden;
		border-radius: 999px;
		background: var(--color-background-secondary, #f1f5f9);
	}
	.wbd-round-progress__bar span {
		display: block;
		height: 100%;
		border-radius: inherit;
		background: var(--color-primary-500, #3b82f6);
	}
</style>
