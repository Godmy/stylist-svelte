<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
	import type { BreadcrumbLinkRecipe } from '$stylist/navigation/interface/recipe/breadcrumb-link';
	import { createBreadcrumbLinkState } from '$stylist/navigation/function/state/breadcrumb-link';

	type BreadcrumbLinkProps = BreadcrumbLinkRecipe &
		InteractionHTMLAttributes<HTMLAnchorElement> & {
		current?: boolean;
		href?: string;
		children?: Snippet;
		class?: string;
		};

	let linkProps: BreadcrumbLinkProps = $props();
	const state = createBreadcrumbLinkState(linkProps);
</script>

{#if linkProps.current}
	<span class={state.linkClass} aria-current="page">
		{#if linkProps.children}
			{@render linkProps.children()}
		{/if}
	</span>
{:else}
	<a
		href={linkProps.href}
		class={state.linkClass}
		onclick={linkProps.onclick}
		onmouseenter={linkProps.onmouseenter}
		onfocus={linkProps.onfocus}
		onblur={linkProps.onblur}
	>
		{#if linkProps.children}
			{@render linkProps.children()}
		{/if}
	</a>
{/if}
