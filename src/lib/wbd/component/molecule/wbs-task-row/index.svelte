<script lang="ts">
	import createWbsTaskRowState from '$stylist/wbd/function/state/wbs-task-row/index.svelte';
	import type { RecipeWbsTaskRow } from '$stylist/wbd/interface/recipe/wbs-task-row';
	import PertResultChip from '$stylist/wbd/component/atom/pert-result-chip/index.svelte';

	let props: RecipeWbsTaskRow = $props();
	const state = createWbsTaskRowState(props);
</script>

<div
	class="wbd-wbs-task-row {state.className}"
	style={state.indentStyle}
	onclick={state.selectTask}
	role="button"
	tabindex="0"
	onkeydown={(e) => {
		if (e.key === 'Enter' || e.key === ' ') state.selectTask();
	}}
>
	{#if state.hasChildren}
		<button
			type="button"
			class="wbd-wbs-task-row__toggle"
			onclick={(e) => {
				e.stopPropagation();
				state.toggleExpanded();
			}}
			aria-label={state.expanded ? 'Collapse' : 'Expand'}
		>
			{state.expanded ? '▾' : '▸'}
		</button>
	{/if}
	<span class="wbd-wbs-task-row__label">{state.task.label}</span>
	{#if state.rollup}
		<PertResultChip result={state.rollup} />
	{/if}
</div>

<style>
	.wbd-wbs-task-row {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.5rem 0.75rem;
		border-radius: 0.375rem;
		cursor: pointer;
	}
	.wbd-wbs-task-row:hover {
		background: var(--color-background-secondary, #f1f5f9);
	}
	.wbd-wbs-task-row__toggle {
		background: none;
		border: none;
		padding: 0;
		width: 1rem;
		font-size: 0.75rem;
		color: var(--color-text-tertiary, #64748b);
		cursor: pointer;
	}
	.wbd-wbs-task-row__label {
		flex: 1 1 0%;
		font-size: 0.875rem;
		color: var(--color-text-primary, #0f172a);
	}
</style>
