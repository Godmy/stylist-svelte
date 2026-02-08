<script lang="ts">
	import type { TableCellProps } from '$stylist/design-system';
	import { createTableCellState } from '../state.svelte';

	let props: TableCellProps = $props();
	const state = createTableCellState(props);
</script>

{#if state.variant === 'header'}
	<th class={state.classes} {...props}>
		{#if props.content}
			{@render props.content()}
		{/if}
	</th>
{:else}
	<td class={state.classes} {...props}>
		{#if props.content}
			{@render props.content()}
		{/if}
	</td>
{/if}
