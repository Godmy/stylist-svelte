<script lang="ts">
	import type { TableProps } from '$stylist/design-system/props';
	import { createTableState } from '$stylist/design-system/models/information/table.svelte';

	let props: TableProps = $props();
	const state = createTableState(props);
	const restProps = $derived(
		(() => {
			const {
				class: _class,
				content: _content,
				caption: _caption,
				striped: _striped,
				bordered: _bordered,
				hoverable: _hoverable,
				...rest
			} = props;
			return rest;
		})()
	);
</script>

<table {...restProps} class={state.classes}>
	{#if props.caption}
		<caption class={state.captionClasses}>{props.caption}</caption>
	{/if}
	{#if props.content}
		{@render props.content()}
	{/if}
</table>

