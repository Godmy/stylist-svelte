<script lang="ts">
	import type { RecipeCell } from '$stylist/table/interface/recipe/cell';
	import createCellState from '$stylist/table/function/state/cell';

	let props: RecipeCell = $props();
	const state = createCellState(props);
</script>

{#if state.variant === 'header'}
	<th class="c-cell c-cell--header {state.alignClass} {props.class ?? ''}">
		{#if props.content}{@render props.content()}{/if}
	</th>
{:else}
	<td class="c-cell {state.alignClass} {props.class ?? ''}">
		{#if props.content}{@render props.content()}{/if}
	</td>
{/if}

<style>
	.c-cell {
		padding: 0.4rem 0.75rem;
		font-size: 13px;
		border-bottom: 1px solid var(--color-border-primary);
		white-space: nowrap;
	}

	.c-cell--header {
		font-weight: 600;
		font-size: 11px;
		text-transform: uppercase;
		color: var(--color-text-secondary);
		background: var(--color-background-secondary);
	}
</style>
