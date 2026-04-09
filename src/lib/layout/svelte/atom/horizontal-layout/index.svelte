<script lang="ts">
	import type { HorizontalLayoutProps } from '$stylist/layout/type/struct/layout-extended';
	import { createHorizontalLayoutState } from '$stylist/layout/function/state/horizontal-layout';

	let props: HorizontalLayoutProps = $props();
	const state = createHorizontalLayoutState(props);
</script>

<div class={state.classes} {...state.restProps}>
	{#if props.children}
		{@render props.children?.()}
	{/if}
</div>





