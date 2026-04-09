<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { BreadcrumbLinkRecipe } from '$stylist/navigation/interface/recipe/breadcrumb-link';
	import { createBreadcrumbLinkState } from '$stylist/navigation/function/state/breadcrumb-link';

	let props: BreadcrumbLinkRecipe & { current?: boolean; href?: string; children?: Snippet } = $props();
	const state = createBreadcrumbLinkState(props);
</script>

{#if props.current}
	<span class={state.linkClass}>
		{@render props.children?.()}
	</span>
{:else}
	<a href={props.href} class={state.linkClass}>
		{@render props.children?.()}
	</a>
{/if}
