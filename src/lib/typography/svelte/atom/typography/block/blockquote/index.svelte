<script lang="ts">
	import type { BlockquoteRecipe } from '$stylist/typography/interface/recipe/blockquote';
	import { createBlockquoteState } from '$stylist/typography/function/state/blockquote';

	let props: BlockquoteRecipe = $props();

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


