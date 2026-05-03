<script lang="ts">
	import { createStickyLayoutState } from '$stylist/layout/function/state/sticky-layout';
	import type { StickyLayoutProps } from '$stylist/layout/type/struct/layout-extended';

	let props: StickyLayoutProps = $props();
	const state = createStickyLayoutState(props);
</script>

<div class={state.classes} {...state.restProps}>
	{#if props.header}
		<header class={state.headerClass}>
			{@render props.header()}
		</header>
	{/if}

	<div class={state.contentClass}>
		{#if props.children}{@render props.children()}{/if}
	</div>

	{#if props.footer}
		<footer class={state.footerClass}>
			{@render props.footer()}
		</footer>
	{/if}
</div>
