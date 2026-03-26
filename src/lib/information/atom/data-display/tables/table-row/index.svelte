<script lang="ts">
	import type { TableRowProps } from '$stylist';
	import { createTableRowState } from '$stylist/information/state/table-row';

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


