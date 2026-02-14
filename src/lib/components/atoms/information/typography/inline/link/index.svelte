<script lang="ts">
	import type { LinkProps } from '$stylist/design-system';
	import { createLinkState } from '$stylist/design-system/models/link.svelte';

	let props: LinkProps = $props();

	const state = createLinkState(props);
	const children = $derived(props.children);

	const restProps = $derived(
		(() => {
			const {
				class: _class,
				children: _children,
				variant: _variant,
				size: _size,
				disabled: _disabled,
				underline: _underline,
				href: _href,
				target: _target,
				text: _text,
				...rest
			} = props;
			return rest;
		})()
	);
</script>

<a href={state.href} class={state.classes} target={state.target} {...restProps}>
	{#if children}
		{@render children()}
	{:else if state.text}
		{state.text}
	{/if}
</a>
