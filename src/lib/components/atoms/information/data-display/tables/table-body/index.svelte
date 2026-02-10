<script lang="ts">
	import type { TableSectionProps } from '$stylist/design-system';
	import { createTableBodyState } from '../state.svelte';

	let props: TableSectionProps = $props();
	const state = createTableBodyState(props);
</script>

<tbody {...props} class={state.classes}>
	{#if props.content}
		{@render props.content()}
	{/if}
</tbody>
