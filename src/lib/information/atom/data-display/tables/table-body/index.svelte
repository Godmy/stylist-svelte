<script lang="ts">
	import type { TableSectionProps } from '$stylist';
	import { createTableBodyState } from '$stylist/information/state/table-body';

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


