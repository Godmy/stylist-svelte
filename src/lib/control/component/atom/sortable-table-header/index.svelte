<script lang="ts">
	import { PresetSortableTableHeader } from '$stylist/control/const/preset/sortable-table-header';
	import type { RecipeSortableTableHeader } from '$stylist/control/interface/recipe/sortable-table-header';
	import { createSortableTableHeaderState } from '$stylist/control/function/state/sortable-table-header/index.svelte';
	import Icon from '$stylist/svg/component/atom/icon/index.svelte';

	let props: RecipeSortableTableHeader = $props();
	const state = createSortableTableHeaderState(props);

	const restProps = $derived.by(() => {
		const { class: _class, ...rest } = props;
		return rest;
	});

	const sortIcon = $derived(
		state.isCurrentSort && state.currentSortDirection !== null
			? PresetSortableTableHeader.ChevronUp
			: PresetSortableTableHeader.ChevronsUpDown
	);
</script>

<th
	class="c-sortable-th"
	data-sort={state.sortDirection || undefined}
	onclick={state.handleClick}
	{...restProps}
>
	<button class="c-sortable-th__btn" type="button">
		<span>{state.title}</span>
		<Icon name={sortIcon} class="c-sortable-th__icon" />
	</button>
</th>

<style>
	.c-sortable-th {
		padding: 0.5rem 0.75rem;
		text-align: left;
		font-size: 0.75rem;
		font-weight: 600;
		text-transform: uppercase;
		color: var(--color-text-secondary);
		white-space: nowrap;
	}

	.c-sortable-th__btn {
		display: inline-flex;
		align-items: center;
		gap: 0.25rem;
		cursor: pointer;
		background: none;
		border: none;
		padding: 0;
		font: inherit;
		color: inherit;
	}

	.c-sortable-th__btn:hover {
		color: var(--color-text-primary);
	}

	:global(.c-sortable-th__icon) {
		width: 0.75rem;
		height: 0.75rem;
		opacity: 0.5;
	}

	.c-sortable-th[data-sort='asc'] :global(.c-sortable-th__icon),
	.c-sortable-th[data-sort='desc'] :global(.c-sortable-th__icon) {
		opacity: 1;
		color: var(--color-primary-600);
	}

	.c-sortable-th[data-sort='desc'] :global(.c-sortable-th__icon) {
		transform: rotate(180deg);
	}
</style>
