<script lang="ts">
	import type { ThemeLinkRecipe } from '$stylist/typography/interface/recipe/link';
	import { createLinkState } from '$stylist/typography/function/state/link';

	let props: ThemeLinkRecipe = $props();

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
		{#if children}{#if children}{@render children()}{/if}{/if}
	{:else if state.text}
		{state.text}
	{/if}
</a>


