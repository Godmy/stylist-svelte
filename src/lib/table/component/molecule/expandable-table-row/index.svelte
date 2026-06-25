<script lang="ts">
	import BaseIcon from '$stylist/svg/component/atom/icon/index.svelte';
	const ChevronDown = 'chevron-down';
	const ChevronRight = 'chevron-right';
	import type { ExpandableTableRowProps } from '$stylist/table/type/struct/expandable-table-row-props';
	import createExpandableTableRowState from '$stylist/table/function/state/expandable-table-row/index.svelte';

	let {
		expandableContent,
		rowContent,
		isExpanded = false,
		class: hostClass = '',
		cellClass = '',
		headerCellClass = '',
		onToggle,
		...restProps
	}: ExpandableTableRowProps = $props();

	const state = createExpandableTableRowState({
		expandableContent,
		rowContent,
		isExpanded,
		class: hostClass,
		cellClass,
		headerCellClass,
		onToggle,
		...restProps
	});
</script>

<!-- Main row -->
<tr
	class={['c-exp-row', hostClass].filter(Boolean).join(' ')}
	data-expanded={state.expanded || undefined}
	{...restProps}
>
	<td class="c-exp-row__toggle-cell">
		<button type="button" class="c-exp-row__toggle-btn" onclick={() => state.toggleExpanded()}>
			{#if state.expanded}
				<BaseIcon name={ChevronDown} style="width:1.25rem;height:1.25rem;" />
			{:else}
				<BaseIcon name={ChevronRight} style="width:1.25rem;height:1.25rem;" />
			{/if}
		</button>
	</td>
	{@render rowContent()}
</tr>

<!-- Expanded content row -->
{#if state.expanded}
	<tr class={['c-exp-row c-exp-row--expanded', hostClass].filter(Boolean).join(' ')}>
		<td class="c-exp-row__content-cell" colspan="999">
			{@render expandableContent()}
		</td>
	</tr>
{/if}

<style>
	.c-exp-row {
		border-bottom: 1px solid var(--color-border-primary);
	}

	.c-exp-row__toggle-cell {
		padding: 1rem 1.5rem;
		font-size: 0.875rem;
		font-weight: 500;
		color: var(--color-text-primary);
	}

	.c-exp-row__toggle-btn {
		display: flex;
		align-items: center;
		color: var(--color-text-secondary);
		cursor: pointer;
		background: none;
		border: none;
		padding: 0;
	}

	.c-exp-row__toggle-btn:hover {
		color: var(--color-text-primary);
	}

	.c-exp-row__toggle-btn:focus-visible {
		outline: 2px solid var(--color-primary-500);
		outline-offset: 2px;
		border-radius: 0.25rem;
	}

	.c-exp-row__content-cell {
		padding: 1rem 1.5rem;
		font-size: 0.875rem;
		color: var(--color-text-secondary);
	}
</style>
