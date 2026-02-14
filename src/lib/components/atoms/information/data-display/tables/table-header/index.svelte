<script lang="ts">
	import type { TableSectionProps } from '$stylist/design-system';
	import { createTableHeaderState } from '../state.svelte';

	let props: TableSectionProps = $props();
	const state = createTableHeaderState(props);
	const restProps = $derived(
		(() => {
			const { class: _class, content: _content, ...rest } = props;
			return rest;
		})()
	);
</script>

<thead {...restProps} class={state.classes}>
	{#if props.content}
		{@render props.content()}
	{/if}
</thead>
