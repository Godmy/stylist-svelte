<script lang="ts">
	import type { RecipeRow } from '$stylist/table/interface/recipe/row';
	import createRowState from '$stylist/table/function/state/row';

	let props: RecipeRow = $props();
	const state = createRowState(props);
</script>

<tr
	class="c-row {state.striped ? 'c-row--striped' : ''} {state.active ? 'c-row--active' : ''} {state.hoverable ? 'c-row--hoverable' : ''} {props.class ?? ''}"
	{...state.restProps}
>
	{#if props.content}{@render props.content()}{/if}
</tr>

<style>
	.c-row--striped:nth-child(even) {
		background: var(--color-background-secondary);
	}

	.c-row--active {
		background: var(--color-primary-50);
	}

	.c-row--hoverable:hover {
		background: var(--color-background-secondary);
		cursor: pointer;
	}
</style>
