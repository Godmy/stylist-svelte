<script lang="ts">
	import type { VerticalLayoutProps } from '$stylist/layout/type/struct/layout-extended';
	import { createVerticalLayoutState } from '$stylist/layout/function/state/vertical-layout';

	let props: VerticalLayoutProps = $props();
	const state = createVerticalLayoutState(props);
</script>

<div class={state.classes} {...state.restProps}>
	{#if props.children}
		{#if props.children}{@render props.children()}{/if}
	{/if}
</div>


