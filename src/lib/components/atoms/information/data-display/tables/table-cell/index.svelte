<script lang="ts">
	import type { TableCellProps } from '$stylist/design-system';
	import { createTableCellState } from '../state.svelte';

	let props: TableCellProps = $props();
	const state = createTableCellState(props);

	// Extract the align property to avoid conflict with HTML align attribute
	let { align, ...restProps } = props;
</script>

{#if state.variant === 'header'}
	<th class={state.classes} {...restProps}>
		{#if props.content}
			{@render props.content()}
		{/if}
	</th>
{:else}
	<td class={state.classes} {...restProps}>
		{#if props.content}
			{@render props.content()}
		{/if}
	</td>
{/if}
