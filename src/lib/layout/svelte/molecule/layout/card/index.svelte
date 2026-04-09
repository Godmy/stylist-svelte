<script lang="ts">
	import { createCardState } from '$stylist/layout/function/state/card';
	import type { CardProps } from '$stylist/layout/type/struct/layout-extended';

	let props: CardProps = $props();
	const state = createCardState(props);
</script>

<div class={state.classes} {...state.restProps}>
	{#if props.media}
		<div class={state.mediaClass}>
			{@render props.media()}
		</div>
	{/if}

	{#if props.header}
		{@render props.header()}
	{/if}

	{#if props.children}
		<div class={state.bodyClass}>
			{@render props.children()}
		</div>
	{/if}

	{#if props.footer}
		<div class={state.footerClass}>
			{@render props.footer()}
		</div>
	{/if}
</div>
