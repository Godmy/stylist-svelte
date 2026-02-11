<script lang="ts">
	import type { InlineBaseProps } from '$stylist/design-system/props';
	import { createEmState } from '../../state.svelte';

	let props: InlineBaseProps<HTMLElement> = $props();

	const state = createEmState(props);
	const children = $derived(props.children);

	const restProps = $derived(
		(() => {
			const { class: _class, children: _children, ...rest } = props;
			return rest;
		})()
	);
</script>

<em class={state.classes} {...restProps}>
	{#if children}
		{@render children()}
	{/if}
</em>

