<script lang="ts">
	import { createSkeletonTableState } from '$stylist/feedback/function/state/skeleton-table/skeleton-table.svelte';
	import type { SkeletonTableProps } from '$stylist/feedback/interface/component/skeleton-table/other/skeleton-table';

	let props: SkeletonTableProps = $props();
	const state = createSkeletonTableState(props);
</script>

<div class={state.containerClass} {...state.restProps}>
	<table class={state.tableClass}>
		<thead class={state.headerClass}>
			<tr>
				{#each state.columnIndexes as _}
					<th class={state.headerCellClass}>
						<div class="h-4 animate-pulse rounded bg-[--color-skeleton]" style={state.headerBarStyle}></div>
					</th>
				{/each}
			</tr>
		</thead>
		<tbody>
			{#each state.rowIndexes as _}
				<tr>
					{#each state.columnIndexes as _}
						<td class={state.dataCellClass}>
							<div class="h-4 animate-pulse rounded bg-[--color-skeleton]" style={state.dataBarStyle}></div>
						</td>
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>
</div>
