<script lang="ts">
	import type { BlockquoteProps } from '$stylist';
	import { createBlockquoteState } from '$stylist/information/state/blockquote';

	let props: BlockquoteProps = $props();

	const state = createBlockquoteState(props);
	const children = $derived(props.children);

	const restProps = $derived(
		(() => {
			const { class: _class, children: _children, ...rest } = props;
			return rest;
		})()
	);
</script>

<blockquote class={state.classes} cite={state.cite} {...restProps}>
	{#if children}
		{@render children?.()}
	{/if}
	{#if state.cite}
		<footer class={state.footerClasses}>
			{state.footerPrefix}{state.cite}
		</footer>
	{/if}
</blockquote>


