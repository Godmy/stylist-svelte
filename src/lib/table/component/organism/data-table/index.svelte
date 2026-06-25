<script lang="ts">
	import BaseIcon from '$stylist/svg/component/atom/icon/index.svelte';
	const ChevronDown = 'chevron-down';
	const ChevronUp = 'chevron-up';

	import createDataTableState from '$stylist/table/function/state/data-table/index.svelte';
	import type { SlotDataTableRecipe as DataTableRecipe } from '$stylist/table/interface/slot/data-table-recipe';

	let {
		data = [],
		columns = [],
		striped = true,
		hoverable = true,
		maxHeight = 'none',
		class: className = '',
		onRowClick,
		...restProps
	}: DataTableRecipe<Record<string, unknown>> = $props();

	const state = createDataTableState({
		data,
		columns,
		striped,
		hoverable,
		maxHeight,
		class: className,
		onRowClick
	});
</script>

<div class={state.rootClass} style={state.containerStyle} {...restProps}>
	<div class="c-data-table__wrap">
		<table class="c-data-table__table">
			<thead class="c-data-table__head">
				<tr>
					{#each columns as column}
						<th class="c-data-table__th">
							<button
								type="button"
								class="c-data-table__sort-btn"
								onclick={() => column.sortable && state.sort(String(column.key))}
							>
								{column.title}
								{#if column.sortable && state.sortKey === String(column.key)}
									{#if state.sortDirection === 'asc'}<BaseIcon
											name={ChevronUp}
											style="width:0.75rem;height:0.75rem;"
										/>{:else}<BaseIcon
											name={ChevronDown}
											style="width:0.75rem;height:0.75rem;"
										/>{/if}
								{/if}
							</button>
						</th>
					{/each}
				</tr>
			</thead>
			<tbody class="c-data-table__body">
				{#each state.sortedData as item, index}
					<tr
						class="c-data-table__row"
						data-striped={(striped && index % 2 === 1) || undefined}
						data-hoverable={hoverable || undefined}
						onclick={() => onRowClick?.(item)}
					>
						{#each columns as column}
							<td class="c-data-table__td">{state.getCellValue(item, column)}</td>
						{/each}
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>

<style>
	.c-data-table {
		overflow: auto;
	}
	.c-data-table__table {
		min-width: 100%;
		border-collapse: collapse;
		border: 1px solid var(--color-border-primary);
		border-radius: 0.375rem;
		overflow: hidden;
	}
	.c-data-table__head {
		background: var(--color-background-secondary);
	}
	.c-data-table__th {
		padding: 0.5rem 0.75rem;
		text-align: left;
		font-size: 0.75rem;
		text-transform: uppercase;
		font-weight: 500;
		color: var(--color-text-secondary);
		white-space: nowrap;
	}
	.c-data-table__sort-btn {
		display: inline-flex;
		align-items: center;
		gap: 0.25rem;
		background: none;
		border: none;
		cursor: pointer;
		font-size: inherit;
		font-weight: inherit;
		color: inherit;
		text-transform: inherit;
		padding: 0;
	}
	.c-data-table__row[data-striped] {
		background: var(--color-background-secondary);
	}
	.c-data-table__row[data-hoverable]:hover {
		background: var(--color-background-secondary);
	}
	.c-data-table__td {
		border-top: 1px solid var(--color-border-primary);
		padding: 0.5rem 0.75rem;
		font-size: 0.875rem;
	}
</style>
