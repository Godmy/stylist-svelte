<script lang="ts">
	import type { InlineBaseProps } from '$stylist';
	import { createHighlightState } from '$stylist/information/state/highlight';

	let props: InlineBaseProps<HTMLElement> = $props();

	const state = createHighlightState(props);
	const children = $derived(props.children);

	const restProps = $derived(
		(() => {
			const { class: _class, children: _children, ...rest } = props;
			return rest;
		})()
	);
</script>

<mark class={state.classes} {...restProps}>
	{#if children}
		{@render children?.()}
	{/if}
</mark>



