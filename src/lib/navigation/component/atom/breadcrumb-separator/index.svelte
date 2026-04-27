<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { BreadcrumbSeparatorProps } from '$stylist/navigation/type/struct/breadcrumb-separator-props';
	import { createBreadcrumbSeparatorState } from '$stylist/navigation/function/state/breadcrumb-separator';

	let props: BreadcrumbSeparatorProps = $props();
	const state = createBreadcrumbSeparatorState(props);
</script>

<span class={state.separatorClasses} aria-hidden="true" {...props}>
	{#if props.children}
		{@render props.children()}
	{:else}
		&rarr;
	{/if}
</span>
