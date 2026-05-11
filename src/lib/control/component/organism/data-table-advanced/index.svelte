<script lang="ts">
	import type { SlotDataTableAdvanced as DataTableAdvancedProps } from '$stylist/control/interface/slot/data-table-advanced';
	import { createDataTableAdvancedState } from '$stylist/control/function/state/data-table-advanced';

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
	<div class="mb-3 flex items-center justify-between gap-3">
		<h3 class="text-lg font-semibold">{title}</h3>
		<div class="flex items-center gap-2">
			{#if showSearch}
				<input
					class="rounded border px-3 py-1"
					placeholder={searchPlaceholder}
					value={state.searchTerm}
					oninput={(event) => state.setSearchTerm((event.target as HTMLInputElement).value)}
				/>
			{/if}
			{#if showExport}<button class="rounded border px-3 py-1" onclick={onExport}>Export</button
				>{/if}
			<select
				class="rounded border px-2 py-1"
				value={state.pageSize}
				onchange={(event) => state.setPageSize(Number((event.target as HTMLSelectElement).value))}
			>
				{#each pageSizeOptions as option}<option value={option}>{option} / page</option>{/each}
			</select>
		</div>
	</div>

	<div class="overflow-x-auto rounded-lg border">
		{#if loading}
			<div class="p-6 text-center">Loading...</div>
		{:else}
			<table class="min-w-full">
				<thead class="bg-[var(--color-background-secondary)]"
					><tr
						>{#each columns as c}<th class="px-3 py-2 text-left text-xs uppercase">{c.header}</th
							>{/each}</tr
					></thead
				>
				<tbody>
					{#if state.pageData.length === 0}
						<tr
							><td
								colspan={columns.length}
								class="px-3 py-4 text-center text-sm text-[var(--color-text-secondary)]">No data</td
							></tr
						>
					{:else}
						{#each state.pageData as row}
							<tr
								class="border-t hover:bg-[var(--color-background-secondary)]"
								onclick={() => onRowClick?.(row)}
							>
								{#each columns as c}
									<td class="px-3 py-2 text-sm">{state.getCellValue(row, c)}</td>
								{/each}
							</tr>
						{/each}
					{/if}
				</tbody>
			</table>
		{/if}
	</div>

	<div class="mt-3 flex items-center justify-between text-sm">
		<span>Page {state.currentPage} of {state.totalPages}</span>
		<div class="flex gap-2">
			<button
				class="rounded border px-2 py-1"
				disabled={state.currentPage <= 1}
				onclick={state.goPrev}>Prev</button
			>
			<button
				class="rounded border px-2 py-1"
				disabled={state.currentPage >= state.totalPages}
				onclick={state.goNext}>Next</button
			>
		</div>
	</div>
</div>
