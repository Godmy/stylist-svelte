<script lang="ts">
	import createWbdSessionLifecycleToolbarState from '$stylist/wbd/function/state/session-lifecycle-toolbar/index.svelte';
	import type { RecipeWbdSessionLifecycleToolbar } from '$stylist/wbd/interface/recipe/session-lifecycle-toolbar';

	let props: RecipeWbdSessionLifecycleToolbar = $props();
	const state = createWbdSessionLifecycleToolbarState(props);
</script>

<div class="wbd-lifecycle-toolbar {state.className}">
	{#each state.actions as action (action.id)}
		<button
			type="button"
			class:wbd-lifecycle-toolbar__button--primary={action.variant === 'primary'}
			class:wbd-lifecycle-toolbar__button--danger={action.variant === 'danger'}
			disabled={action.disabled}
			onclick={() => state.triggerAction(action)}
		>
			{action.label}
		</button>
	{/each}
</div>

<style>
	.wbd-lifecycle-toolbar {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}
	.wbd-lifecycle-toolbar button {
		padding: 0.5rem 0.75rem;
		border: 1px solid var(--color-border-primary, #cbd5e1);
		border-radius: 0.375rem;
		background: var(--color-background-primary, #fff);
		font-size: 0.8125rem;
		font-weight: 600;
		color: var(--color-text-primary, #0f172a);
		cursor: pointer;
	}
	.wbd-lifecycle-toolbar__button--primary {
		border-color: var(--color-primary-500, #3b82f6) !important;
		background: var(--color-primary-500, #3b82f6) !important;
		color: var(--color-text-inverse, #fff) !important;
	}
	.wbd-lifecycle-toolbar__button--danger {
		border-color: var(--color-danger-600, #dc2626) !important;
		color: var(--color-danger-600, #dc2626) !important;
	}
	.wbd-lifecycle-toolbar button:disabled {
		opacity: 0.45;
		cursor: not-allowed;
	}
</style>
