<script lang="ts">
	import type { GridLayoutProps } from '$stylist/design-system/contracts/architecture/layout';
	import { LayoutStyleManager } from '$stylist/design-system/styles/architecture/layout';
	import { createGridLayoutState } from '$stylist/design-system/models/architecture/grid-layout.svelte';

	let props: GridLayoutProps = $props();
	const state = createGridLayoutState(props);
	const items = $derived(props.items ?? []);
	const layoutStyle = $derived(
		LayoutStyleManager.getGridLayoutStyle(
			props.columns ?? 'repeat(auto-fit, minmax(250px, 1fr))',
			LayoutStyleManager.getSpacerSize(props.gap)
		)
	);
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
</script>

<div class={state.containerClass} style={layoutStyle} {...restProps}>
	{#each items as item}
		<div
			class={LayoutStyleManager.getGridLayoutItemClass(item.class ?? '', props.itemClass ?? '')}
			style={LayoutStyleManager.getGridItemStyle(item.colSpan, item.rowSpan)}
		>
			{#if typeof item.content === 'string'}
				{@html item.content}
			{:else}
				{@render item.content()}
			{/if}
		</div>
	{/each}
</div>


