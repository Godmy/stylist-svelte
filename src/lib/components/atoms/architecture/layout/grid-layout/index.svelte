<script lang="ts">
	import type { GridItem, GridLayoutProps } from '$stylist/design-system';
	import { LayoutStyleManager } from '$stylist/design-system/styles/layout';
	import { createGridLayoutState } from '$stylist/design-system/models/grid-layout.svelte';

	type Props = GridLayoutProps & { cols?: number; responsive?: boolean; alignItems?: string; justifyContent?: string };
	let props: Props = $props();
	const state = createGridLayoutState(props as any);
	const items = $derived(props.items ?? []);
	const restProps = $derived(
		(() => {
			const {
				class: _class,
				items: _items,
				columns: _columns,
				gap: _gap,
				itemClass: _itemClass,
				cols: _cols,
				responsive: _responsive,
				alignItems: _alignItems,
				justifyContent: _justifyContent,
				children: _children,
				...rest
			} = props;
			return rest;
		})()
	);

	function getItemStyle(item: GridItem): string {
		let style = '';
		if (item.colSpan) {
			style += `grid-column: span ${item.colSpan};`;
		}
		if (item.rowSpan) {
			style += `grid-row: span ${item.rowSpan};`;
		}
		return style;
	}
</script>

<div class={state.containerClass} {...restProps}>
	{#each items as item}
		<div
			class={LayoutStyleManager.getGridLayoutItemClass(item.class ?? '', props.itemClass ?? '')}
			style={getItemStyle(item)}
		>
			{#if typeof item.content === 'string'}
				{@html item.content}
			{:else}
				{@render item.content()}
			{/if}
		</div>
	{/each}
</div>
