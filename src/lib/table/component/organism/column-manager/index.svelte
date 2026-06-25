<script lang="ts">
	import BaseIcon from '$stylist/svg/component/atom/icon/index.svelte';
	const ChevronDown = 'chevron-down';
	const ChevronUp = 'chevron-up';
	const ChevronsUpDown = 'chevrons-up-down';

	import type { SlotColumnManager as ColumnManagerProps } from '$stylist/table/interface/slot/column-manager';
	import createColumnManagerState from '$stylist/table/function/state/column-manager/index.svelte';

	let {
		columns = [],
		onColumnsChange,
		class: className = '',
		...restProps
	}: ColumnManagerProps = $props();
	const state = createColumnManagerState({
		columns,
		onColumnsChange,
		class: className,
		...restProps
	});
	const rootClass = $derived(['c-column-manager', className].filter(Boolean).join(' '));
</script>

<div class={rootClass} {...restProps}>
	<div class="c-column-manager__header">
		<h3 class="c-column-manager__title">Columns</h3>
		<button type="button" class="c-column-manager__reset" onclick={() => state.reset()}
			>Reset</button
		>
	</div>
	<div class="c-column-manager__list">
		{#each state.localColumns as column, index}
			<div class="c-column-manager__row">
				<div class="c-column-manager__row-left">
					<BaseIcon name={ChevronsUpDown} style="width:1rem;height:1rem;" />
					<input type="checkbox" checked={column.visible} onchange={() => state.toggle(index)} />
					<span>{column.header}</span>
				</div>
				<div class="c-column-manager__row-actions">
					<button type="button" disabled={index === 0} onclick={() => state.move(index, index - 1)}
						><BaseIcon name={ChevronUp} style="width:1rem;height:1rem;" /></button
					>
					<button
						type="button"
						disabled={index === state.localColumns.length - 1}
						onclick={() => state.move(index, index + 1)}
						><BaseIcon name={ChevronDown} style="width:1rem;height:1rem;" /></button
					>
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	.c-column-manager {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}
	.c-column-manager__header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 0.25rem;
	}
	.c-column-manager__title {
		margin: 0;
		font-weight: 500;
	}
	.c-column-manager__reset {
		font-size: 0.875rem;
		background: none;
		border: none;
		padding: 0;
		cursor: pointer;
		color: var(--color-primary-600);
	}
	.c-column-manager__reset:hover {
		color: var(--color-primary-700);
	}
	.c-column-manager__list {
		border: 1px solid var(--color-border-primary);
		border-radius: 0.375rem;
		overflow: hidden;
	}
	.c-column-manager__row {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0.75rem;
		border-bottom: 1px solid var(--color-border-primary);
	}
	.c-column-manager__row:last-child {
		border-bottom: none;
	}
	.c-column-manager__row-left {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}
	.c-column-manager__row-actions {
		display: flex;
		gap: 0.25rem;
	}
	.c-column-manager__row-actions button {
		background: none;
		border: none;
		padding: 0.25rem;
		cursor: pointer;
		border-radius: 0.25rem;
		color: var(--color-text-secondary);
	}
	.c-column-manager__row-actions button:hover {
		background: var(--color-background-secondary);
	}
	.c-column-manager__row-actions button:disabled {
		opacity: var(--opacity-50, 0.5);
		cursor: not-allowed;
	}
</style>
