<script lang="ts">
	import { createOverlayLayoutState } from '$stylist/layout/function/state/overlay-layout';
	import type { OverlayLayoutProps } from '$stylist/layout/type/struct/layout-extended';
	import { OverlayLayoutStyleManager } from '$stylist/layout/class/style-manager/overlay-layout';

	let props: OverlayLayoutProps = $props();
	const state = createOverlayLayoutState(props);
</script>

<div class={state.baseClass} {...state.restProps}>
	{@render props.base()}

	{#if props.overlay}
		<div class={state.overlayClass}>
			{@render props.overlay()}
		</div>
	{/if}

	{#if props.overlays}
		{#each props.overlays as layer}
			<div class={OverlayLayoutStyleManager.getOverlayClass(
				layer.align ?? 'fill',
				layer.zIndex ?? 10,
				layer.pointerEvents ?? false
			)}>
				{@render layer.content()}
			</div>
		{/each}
	{/if}
</div>
