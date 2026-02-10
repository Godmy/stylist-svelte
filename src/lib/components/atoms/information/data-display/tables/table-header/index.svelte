<script lang="ts">
	import type { TableSectionProps } from '$stylist/design-system';
	import { createTableHeaderState } from '../state.svelte';

	let props: TableSectionProps = $props();
	const state = createTableHeaderState(props);
</script>

<thead {...props} class={state.classes}>
	{#if props.content}
		{@render props.content()}
	{/if}
</thead>
