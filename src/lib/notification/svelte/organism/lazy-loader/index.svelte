<script lang="ts">
	import { createLazyLoaderState } from '../../../function/state/lazy-loader';

	const props = $props();
	const state = createLazyLoaderState(props);
</script>

<div class={state.containerClasses} {...props}>
	{#if state.loading}
		<div class="animate-pulse text-sm text-[var(--color-text-secondary)]">{state.text}</div>
	{:else if props.children}
		{@render props.children()}
	{:else}
		Loaded content
	{/if}
</div>
