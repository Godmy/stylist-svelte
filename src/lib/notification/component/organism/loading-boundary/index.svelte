<script lang="ts">
	import { createLoadingBoundaryState } from '../../../function/state/loading-boundary';

	const props = $props();
	const state = createLoadingBoundaryState(props);
</script>

<div class={state.containerClasses} {...props}>
	{#if state.loading}
		<div class="text-sm">Loading...</div>
	{:else if state.error}
		<div class="text-sm text-[var(--color-danger-600)]">{state.error}</div>
	{:else if props.children}
		{#if props.children}{@render props.children()}{/if}
	{:else}
		Ready
	{/if}
</div>
