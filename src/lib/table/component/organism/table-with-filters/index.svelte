<script lang="ts">
	import createTableWithFiltersState from '$stylist/table/function/state/table-with-filters/index.svelte';
	import type { SlotTableWithFilters as TableWithFiltersProps } from '$stylist/table/interface/slot/table-with-filters';

	let {
		data = [],
		columns = [],
		class: className = '',
		...restProps
	}: TableWithFiltersProps = $props();
	const state = createTableWithFiltersState({ data, columns, class: className });
</script>

<div class={state.rootClass} {...restProps}>
	<div class="c-table-filters__wrap">
		<table class="c-table-filters__table">
			<thead class="c-table-filters__head">
				<tr>
					{#each columns as c}
						<th class="c-table-filters__th">
							{c}
							<input
								class="c-table-filters__filter-input"
								value={state.filters[c] ?? ''}
								oninput={(e) => state.updateFilter(c, (e.target as HTMLInputElement).value)}
							/>
						</th>
					{/each}
				</tr>
			</thead>
			<tbody>
				{#each state.filtered as row, i}
					<tr class="c-table-filters__row" data-striped={i % 2 === 1 || undefined}>
						{#each columns as c}
							<td class="c-table-filters__td">{(row as Record<string, unknown>)[c]}</td>
						{/each}
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>

<style>
	.c-table-filters__wrap {
		overflow: hidden;
		border: 1px solid var(--color-border-primary);
		border-radius: 0.5rem;
	}
	.c-table-filters__table {
		min-width: 100%;
		border-collapse: collapse;
	}
	.c-table-filters__head {
		background: var(--color-background-secondary);
	}
	.c-table-filters__th {
		padding: 0.5rem 0.75rem;
		text-align: left;
		font-size: 0.75rem;
		text-transform: uppercase;
		font-weight: 500;
	}
	.c-table-filters__filter-input {
		margin-top: 0.25rem;
		width: 100%;
		border: 1px solid var(--color-border-primary);
		border-radius: 0.25rem;
		padding: 0.25rem 0.5rem;
		font-size: 0.75rem;
	}
	.c-table-filters__row[data-striped] {
		background: var(--color-background-secondary);
	}
	.c-table-filters__td {
		border-top: 1px solid var(--color-border-primary);
		padding: 0.5rem 0.75rem;
		font-size: 0.875rem;
	}
</style>
