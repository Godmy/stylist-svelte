<script lang="ts">
	import type { InlineBaseProps } from '$stylist/design-system/attributes';
	import { createKbdState } from '../../state.svelte';

	let props: InlineBaseProps<HTMLElement> = $props();

	const state = createKbdState(props);
	const children = $derived(props.children);

	const restProps = $derived(
		(() => {
			const { class: _class, children: _children, ...rest } = props;
			return rest;
		})()
	);
</script>

<kbd class={state.classes} {...restProps}>
	{#if children}
		{@render children()}
	{/if}
</kbd>
