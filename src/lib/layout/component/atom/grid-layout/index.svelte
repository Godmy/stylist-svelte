<script lang="ts">
	import type { GridLayoutProps } from '$stylist/layout/type/struct/layout';
	import { createGridLayoutState } from '$stylist/layout/function/state/grid-layout';
	import { LayoutStyleManager } from '$stylist/layout/class/style-manager/layout';

	let props: GridLayoutProps = $props();
	const state = createGridLayoutState(props);
</script>

<div
	class={state.containerClass}
	style={state.layoutStyle}
	role="grid"
	aria-label={props['aria-label'] ?? 'Grid layout'}
	{...state.restProps}
>
	{#each state.items as item}
		<div
			class={LayoutStyleManager.getGridLayoutItemClass(item.class ?? '', props.itemClass ?? '')}
			style={LayoutStyleManager.getGridItemStyle(item.colSpan, item.rowSpan)}
			role="gridcell"
		>
			{#if typeof item.content === 'string'}
				{@html item.content}
			{:else}
				{@render item.content()}
			{/if}
		</div>
	{/each}
</div>






