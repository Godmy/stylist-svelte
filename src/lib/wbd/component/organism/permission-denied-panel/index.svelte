<script lang="ts">
	import createWbdPermissionDeniedPanelState from '$stylist/wbd/function/state/permission-denied-panel/index.svelte';
	import type { RecipeWbdPermissionDeniedPanel } from '$stylist/wbd/interface/recipe/permission-denied-panel';

	let props: RecipeWbdPermissionDeniedPanel = $props();
	const state = createWbdPermissionDeniedPanelState(props);
</script>

<section class="wbd-permission-denied {state.className}">
	<div>
		<strong>{state.title}</strong>
		{#if state.description}
			<p>{state.description}</p>
		{/if}
	</div>
	<button type="button" onclick={state.goBack}>{state.actionLabel}</button>
</section>

<style>
	.wbd-permission-denied {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		padding: 1rem;
		border: 1px solid var(--color-border-primary, #e2e8f0);
		border-radius: 0.5rem;
		background: var(--color-background-secondary, #f8fafc);
	}
	.wbd-permission-denied strong {
		font-size: 0.875rem;
		color: var(--color-text-primary, #0f172a);
	}
	.wbd-permission-denied p {
		margin: 0.125rem 0 0;
		font-size: 0.75rem;
		color: var(--color-text-tertiary, #64748b);
	}
	.wbd-permission-denied button {
		padding: 0.5rem 0.75rem;
		border: 1px solid var(--color-border-primary, #cbd5e1);
		border-radius: 0.375rem;
		background: var(--color-background-primary, #fff);
		font-size: 0.8125rem;
		font-weight: 700;
		color: var(--color-text-primary, #0f172a);
		cursor: pointer;
	}
</style>
