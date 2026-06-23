<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { SlotInteraction } from '$stylist/interaction/interface/slot/interaction';
	import type { HTMLAttributes } from 'svelte/elements';
	import type { RecipeBreadcrumbLink } from '$stylist/navigation/interface/recipe/breadcrumb-link';
	import createBreadcrumbLinkState from '$stylist/navigation/function/state/breadcrumb-link/index.svelte';

	type BreadcrumbLinkProps = RecipeBreadcrumbLink &
		HTMLAttributes<HTMLAnchorElement> & SlotInteraction & {
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

<style>
</style>
