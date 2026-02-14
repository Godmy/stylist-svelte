<script lang="ts">
	import type { TableRowProps } from '$stylist/design-system';
	import { createTableRowState } from '../state.svelte';

	let props: TableRowProps = $props();
	const state = createTableRowState(props);
	const restProps = $derived(
		(() => {
			const {
				class: _class,
				content: _content,
				striped: _striped,
				active: _active,
				...rest
			} = props;
			return rest;
		})()
	);
</script>

<tr {...restProps} class={state.classes}>
	{#if props.content}
		{@render props.content()}
	{/if}
</tr>
