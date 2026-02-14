<script lang="ts">
	import type { BadgeProps } from '$stylist/design-system';
	import { createBadgeState } from '$stylist/design-system/models/badge.svelte';

	let props: BadgeProps = $props();

	const state = createBadgeState(props);
	const children = $derived(props.children);

	const restProps = $derived(
		(() => {
			const { class: _class, children: _children, ...rest } = props;
			return rest;
		})()
	);
</script>

<span class={state.classes} {...restProps}>
	{#if children}
		{@render children()}
	{/if}
</span>
