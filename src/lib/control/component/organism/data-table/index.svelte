<script lang="ts">
	import BaseIcon from '$stylist/media/component/atom/icon/index.svelte';
	const ChevronDown = 'chevron-down';
	const ChevronUp = 'chevron-up';

	import createDataTableState from '$stylist/control/function/state/data-table/index.svelte';
	import type { SlotDataTableRecipe as DataTableRecipe } from '$stylist/control/interface/slot/data-table-recipe';

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
	<table class="min-w-full overflow-hidden rounded-md border">
		<thead class="bg-[var(--color-background-secondary)]">
			<tr>
				{#each columns as column}
					<th class="px-3 py-2 text-left text-xs uppercase">
						<button
							type="button"
							class="flex items-center gap-1"
							onclick={() => column.sortable && state.sort(String(column.key))}
						>
							{column.title}
							{#if column.sortable && state.sortKey === String(column.key)}
								{#if state.sortDirection === 'asc'}<BaseIcon
										name={ChevronUp}
										class="h-3 w-3"
									/>{:else}<BaseIcon name={ChevronDown} class="h-3 w-3" />{/if}
							{/if}
						</button>
					</th>
				{/each}
			</tr>
		</thead>
		<tbody>
			{#each state.sortedData as item, index}
				<tr
					class={`${striped && index % 2 === 1 ? 'bg-[var(--color-background-secondary)]' : ''} ${hoverable ? 'hover:bg-[var(--color-background-secondary)]' : ''}`}
					onclick={() => onRowClick?.(item)}
				>
					{#each columns as column}
						<td class="border-t px-3 py-2 text-sm">{state.getCellValue(item, column)}</td>
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>
</div>
