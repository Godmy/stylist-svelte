<script lang="ts">
	import type { BreadcrumbSeparatorProps } from '$stylist/navigation/type/struct/breadcrumb-separator-props';
	import createBreadcrumbSeparatorState from './state.svelte';

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

<style>
	.c-breadcrumb-separator {
		display: inline-flex;
		align-items: center;
		color: var(--color-text-tertiary);
	}
</style>
