<script lang="ts">
	import type { SlotDataTableAdvanced as DataTableAdvancedProps } from '$stylist/table/interface/slot/data-table-advanced';
	import createDataTableAdvancedState from '$stylist/table/function/state/data-table-advanced/index.svelte';

	let {
		data = [],
		columns = [],
		title = 'Advanced Data Table',
		searchPlaceholder = 'Search...',
		showSearch = true,
		showExport = true,
		pageSizeOptions = [10, 25, 50],
		defaultPageSize = 10,
		class: className = '',
		onExport,
		onRowClick,
		loading = false,
		...restProps
	}: DataTableAdvancedProps<Record<string, unknown>> = $props();

	const state = createDataTableAdvancedState({
		data,
		columns,
		title,
		searchPlaceholder,
		showSearch,
		showExport,
		pageSizeOptions,
		defaultPageSize,
		class: className,
		onExport,
		onRowClick,
		loading
	});
</script>

<div class={state.rootClass} {...restProps}>
	<div class="c-data-table-adv__header">
		<h3 class="c-data-table-adv__title">{title}</h3>
		<div class="c-data-table-adv__controls">
			{#if showSearch}
				<input
					class="c-data-table-adv__search"
					placeholder={searchPlaceholder}
					value={state.searchTerm}
					oninput={(event) => state.setSearchTerm((event.target as HTMLInputElement).value)}
				/>
			{/if}
			{#if showExport}
				<button class="c-data-table-adv__export-btn" onclick={onExport}>Export</button>
			{/if}
			<select
				class="c-data-table-adv__page-size"
				value={state.pageSize}
				onchange={(event) => state.setPageSize(Number((event.target as HTMLSelectElement).value))}
			>
				{#each pageSizeOptions as option}<option value={option}>{option} / page</option>{/each}
			</select>
		</div>
	</div>

	<div class="c-data-table-adv__table-wrap">
		{#if loading}
			<div class="c-data-table-adv__loading">Loading...</div>
		{:else}
			<table class="c-data-table-adv__table">
				<thead class="c-data-table-adv__head">
					<tr>
						{#each columns as c}<th class="c-data-table-adv__th">{c.header}</th>{/each}
					</tr>
				</thead>
				<tbody>
					{#if state.pageData.length === 0}
						<tr><td class="c-data-table-adv__empty" colspan={columns.length}>No data</td></tr>
					{:else}
						{#each state.pageData as row}
							<tr class="c-data-table-adv__row" onclick={() => onRowClick?.(row)}>
								{#each columns as c}
									<td class="c-data-table-adv__td">{state.getCellValue(row, c)}</td>
								{/each}
							</tr>
						{/each}
					{/if}
				</tbody>
			</table>
		{/if}
	</div>

	<div class="c-data-table-adv__pagination">
		<span>Page {state.currentPage} of {state.totalPages}</span>
		<div class="c-data-table-adv__pagination-btns">
			<button
				class="c-data-table-adv__page-btn"
				disabled={state.currentPage <= 1}
				onclick={state.goPrev}>Prev</button
			>
			<button
				class="c-data-table-adv__page-btn"
				disabled={state.currentPage >= state.totalPages}
				onclick={state.goNext}>Next</button
			>
		</div>
	</div>
</div>

<style>
	.c-data-table-adv__header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 0.75rem;
		margin-bottom: 0.75rem;
	}
	.c-data-table-adv__title {
		font-size: 1.125rem;
		font-weight: 600;
	}
	.c-data-table-adv__controls {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}
	.c-data-table-adv__search {
		border: 1px solid var(--color-border-primary);
		border-radius: 0.25rem;
		padding: 0.25rem 0.75rem;
		font-size: 0.875rem;
	}
	.c-data-table-adv__export-btn {
		border: 1px solid var(--color-border-primary);
		border-radius: 0.25rem;
		padding: 0.25rem 0.75rem;
		background: none;
		cursor: pointer;
		font-size: 0.875rem;
	}
	.c-data-table-adv__page-size {
		border: 1px solid var(--color-border-primary);
		border-radius: 0.25rem;
		padding: 0.25rem 0.5rem;
		font-size: 0.875rem;
	}
	.c-data-table-adv__table-wrap {
		overflow-x: auto;
		border: 1px solid var(--color-border-primary);
		border-radius: 0.5rem;
	}
	.c-data-table-adv__loading {
		padding: 1.5rem;
		text-align: center;
	}
	.c-data-table-adv__table {
		min-width: 100%;
		border-collapse: collapse;
	}
	.c-data-table-adv__head {
		background: var(--color-background-secondary);
	}
	.c-data-table-adv__th {
		padding: 0.5rem 0.75rem;
		text-align: left;
		font-size: 0.75rem;
		text-transform: uppercase;
	}
	.c-data-table-adv__empty {
		padding: 1rem 0.75rem;
		text-align: center;
		font-size: 0.875rem;
		color: var(--color-text-secondary);
	}
	.c-data-table-adv__row {
		border-top: 1px solid var(--color-border-primary);
		cursor: pointer;
	}
	.c-data-table-adv__row:hover {
		background: var(--color-background-secondary);
	}
	.c-data-table-adv__td {
		padding: 0.5rem 0.75rem;
		font-size: 0.875rem;
	}
	.c-data-table-adv__pagination {
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 0.875rem;
		margin-top: 0.75rem;
	}
	.c-data-table-adv__pagination-btns {
		display: flex;
		gap: 0.5rem;
	}
	.c-data-table-adv__page-btn {
		border: 1px solid var(--color-border-primary);
		border-radius: 0.25rem;
		padding: 0.25rem 0.5rem;
		background: none;
		cursor: pointer;
	}
	.c-data-table-adv__page-btn:disabled {
		opacity: 0.4;
		cursor: not-allowed;
	}
</style>
