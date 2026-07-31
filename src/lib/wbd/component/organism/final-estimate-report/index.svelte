<script lang="ts">
	import createFinalEstimateReportState from '$stylist/wbd/function/state/final-estimate-report/index.svelte';
	import type { RecipeFinalEstimateReport } from '$stylist/wbd/interface/recipe/final-estimate-report';
	import PertResultChip from '$stylist/wbd/component/atom/pert-result-chip/index.svelte';

	let props: RecipeFinalEstimateReport = $props();
	const state = createFinalEstimateReportState(props);
</script>

<div class="wbd-final-report {state.className}">
	<table class="wbd-final-report__table">
		<thead>
			<tr>
				<th>Task</th>
				<th>Estimate</th>
			</tr>
		</thead>
		<tbody>
			{#each state.rows as row (row.task.id)}
				<tr>
					<td>{row.task.label}</td>
					<td>
						{#if row.result}
							<PertResultChip result={row.result} />
						{/if}
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
	<div class="wbd-final-report__total">
		<span>Total</span>
		<PertResultChip
			result={{ expected: state.total.expected, stdDev: state.total.stdDev, optimistic: 0, pessimistic: 0 }}
		/>
	</div>
</div>

<style>
	.wbd-final-report {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	.wbd-final-report__table {
		width: 100%;
		border-collapse: collapse;
		font-size: 0.875rem;
	}
	.wbd-final-report__table th {
		text-align: left;
		padding: 0.5rem 0.75rem;
		border-bottom: 2px solid var(--color-border-primary, #e2e8f0);
		font-weight: 600;
		color: var(--color-text-secondary, #475569);
	}
	.wbd-final-report__table td {
		padding: 0.5rem 0.75rem;
		border-bottom: 1px solid var(--color-border-primary, #e2e8f0);
		color: var(--color-text-primary, #0f172a);
	}
	.wbd-final-report__total {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		padding-top: 0.75rem;
		border-top: 2px solid var(--color-border-primary, #e2e8f0);
		font-weight: 600;
	}
</style>
