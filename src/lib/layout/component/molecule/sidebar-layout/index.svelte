<script lang="ts">
	import { createSidebarLayoutState } from '$stylist/layout/function/state/sidebar-layout';
	import type { SidebarLayoutProps } from '$stylist/layout/type/struct/layout-extended';

	let props: SidebarLayoutProps = $props();
	const state = createSidebarLayoutState(props);
</script>

<div class={state.classes} {...state.restProps}>
	{#if state.side === 'left'}
		<aside class={state.sidebarClass} aria-label={state.sidebarLabel}>
			{@render props.sidebar()}
		</aside>
		<div class={state.contentClass}>
			{#if props.children}{@render props.children()}{/if}
		</div>
	{:else}
		<div class={state.contentClass}>
			{#if props.children}{@render props.children()}{/if}
		</div>
		<aside class={state.sidebarClass} aria-label={state.sidebarLabel}>
			{@render props.sidebar()}
		</aside>
	{/if}
</div>
