<script lang="ts">
	import type { SlotTableWithStripes as TableWithStripesProps } from '$stylist/table/interface/slot/table-with-stripes';
	import createTableWithStripesState from '$stylist/table/function/state/table-with-stripes/index.svelte';

	let props: TableWithStripesProps = $props();
	const state = createTableWithStripesState(props);

	const restProps = $derived.by(() => {
		const { class: _class, data: _data, columns: _columns, ...rest } = props;
		return rest;
	});
</script>

<div class={state.containerClass} {...restProps}>
	<div class="c-table-stripes__wrapper">
		<table class="c-table-stripes__table">
			<thead class="c-table-stripes__head">
				<tr>
					{#each state.columns as c}
						<th class="c-table-stripes__th">{c}</th>
					{/each}
				</tr>
			</thead>
			<tbody>
				{#each state.data as row, i}
					<tr class={state.getRowClass(i)}>
						{#each state.columns as c}
							<td class="c-table-stripes__td">{(row as Record<string, unknown>)[c]}</td>
						{/each}
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>

<style>
	.c-table-stripes {
		overflow: hidden;
	}

	.c-table-stripes__wrapper {
		overflow: hidden;
		border-radius: 0.5rem;
		border: 1px solid var(--color-border-primary);
	}

	.c-table-stripes__table {
		min-width: 100%;
		border-collapse: collapse;
	}

	.c-table-stripes__head {
		background-color: var(--color-background-secondary);
	}

	.c-table-stripes__th {
		padding: 0.5rem 0.75rem;
		text-align: left;
		font-size: 0.75rem;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		font-weight: 600;
	}

	.c-table-stripes__row {
		background-color: var(--color-background-primary);
	}

	.c-table-stripes__row--odd {
		background-color: var(--color-background-secondary);
	}

	.c-table-stripes__td {
		border-top: 1px solid var(--color-border-primary);
		padding: 0.5rem 0.75rem;
		font-size: 0.875rem;
	}
</style>
