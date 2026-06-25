<script lang="ts">
	import createTableWithGroupingState from '$stylist/table/function/state/table-with-grouping/index.svelte';
	import type { SlotTableWithGrouping as TableWithGroupingProps } from '$stylist/table/interface/slot/table-with-grouping';

	let props: TableWithGroupingProps = $props();
	const state = createTableWithGroupingState(props);
</script>

<div class={state.rootClass} {...state.restProps}>
	{#each Object.entries(state.groups) as [group, rows]}
		<div class="c-table-grouping__group">
			<div class="c-table-grouping__group-header">
				{group} ({rows.length})
			</div>
			<table class="c-table-grouping__table">
				<tbody>
					{#each rows as r}
						<tr class="c-table-grouping__row">
							{#each Object.entries(r) as [k, v]}
								<td class="c-table-grouping__cell">
									<span class="c-table-grouping__key">{k}:</span>
									{String(v)}
								</td>
							{/each}
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	{/each}
</div>

<style>
	.c-table-grouping {
		display: flex;
		flex-direction: column;
	}

	.c-table-grouping__group {
		margin-bottom: 0.75rem;
		overflow: hidden;
		border-radius: 0.5rem;
		border: 1px solid var(--color-border-primary);
	}

	.c-table-grouping__group-header {
		background-color: var(--color-background-secondary);
		padding: 0.5rem 0.75rem;
		font-size: 0.875rem;
		font-weight: 600;
	}

	.c-table-grouping__table {
		min-width: 100%;
		border-collapse: collapse;
	}

	.c-table-grouping__row {
		border-top: 1px solid var(--color-border-primary);
	}

	.c-table-grouping__cell {
		padding: 0.5rem 0.75rem;
		font-size: 0.875rem;
	}

	.c-table-grouping__key {
		color: var(--color-text-secondary);
	}
</style>
