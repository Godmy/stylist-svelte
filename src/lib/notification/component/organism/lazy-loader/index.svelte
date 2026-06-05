<script lang="ts">
	import createLazyLoaderState from '$stylist/notification/function/state/lazy-loader/index.svelte';

	const props = $props();
	const state = createLazyLoaderState(props);
</script>

<div class={state.containerClasses} {...props}>
	{#if state.loading}
		<div class="animate-pulse text-sm text-[var(--color-text-secondary)]">{state.text}</div>
	{:else if props.children}
		{#if props.children}{@render props.children()}{/if}
	{:else}
		Loaded content
	{/if}
</div>
