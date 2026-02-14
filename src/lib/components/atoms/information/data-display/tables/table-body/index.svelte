<script lang="ts">
	import type { TableSectionProps } from '$stylist/design-system';
	import { createTableBodyState } from '../state.svelte';

	let props: TableSectionProps = $props();
	const state = createTableBodyState(props);
	const restProps = $derived(
		(() => {
			const { class: _class, content: _content, ...rest } = props;
			return rest;
		})()
	);
</script>

<tbody {...restProps} class={state.classes}>
	{#if props.content}
		{@render props.content()}
	{/if}
</tbody>
