<script lang="ts">
	import type { GridLayoutProps } from '$stylist/design-system';
	import { LayoutStyleManager } from '$stylist/design-system/styles/layout';
	import { createGridLayoutState } from '$stylist/design-system/models/grid-layout.svelte';

	let props: GridLayoutProps = $props();
	const state = createGridLayoutState(props);
	const items = $derived(props.items ?? []);
	const restProps = $derived(
		(() => {
			const {
				class: _class,
				items: _items,
				columns: _columns,
				gap: _gap,
				itemClass: _itemClass,
				...rest
			} = props;
			return rest;
		})()
	);
</script>

<div class={state.containerClass} style={state.containerStyle} {...restProps}>
	{#each items as item}
		<div
			class={LayoutStyleManager.getGridLayoutItemClass(item.class ?? '', state.itemClass)}
			style={(item.colSpan ? `grid-column: span ${item.colSpan};` : '') +
				(item.rowSpan ? `grid-row: span ${item.rowSpan};` : '')}
		>
			{#if typeof item.content === 'string'}
				{@html item.content}
			{:else}
				{@render item.content()}
			{/if}
		</div>
	{/each}
</div>
