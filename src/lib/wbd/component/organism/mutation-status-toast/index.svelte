<script lang="ts">
	import createWbdMutationStatusToastState from '$stylist/wbd/function/state/mutation-status-toast/index.svelte';
	import type { RecipeWbdMutationStatusToast } from '$stylist/wbd/interface/recipe/mutation-status-toast';

	let props: RecipeWbdMutationStatusToast = $props();
	const state = createWbdMutationStatusToastState(props);
</script>

<div class="wbd-mutation-toast {state.className}" aria-live="polite">
	{#each state.statuses as status (status.id)}
		<div class="wbd-mutation-toast__item" data-status={status.status}>
			<span>{status.message}</span>
			<button type="button" onclick={() => state.dismiss(status.id)}>Dismiss</button>
		</div>
	{/each}
</div>

<style>
	.wbd-mutation-toast {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
	.wbd-mutation-toast__item {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 0.75rem;
		padding: 0.625rem 0.75rem;
		border: 1px solid var(--color-border-primary, #e2e8f0);
		border-radius: 0.5rem;
		background: var(--color-background-primary, #fff);
	}
	.wbd-mutation-toast__item span {
		font-size: 0.8125rem;
		font-weight: 600;
		color: var(--color-text-primary, #0f172a);
	}
	.wbd-mutation-toast__item button {
		border: 0;
		background: transparent;
		font-size: 0.75rem;
		font-weight: 700;
		color: var(--color-text-tertiary, #64748b);
		cursor: pointer;
	}
	.wbd-mutation-toast__item[data-status='saved'] {
		border-color: var(--color-success-200, #bbf7d0);
	}
	.wbd-mutation-toast__item[data-status='error'] {
		border-color: var(--color-danger-200, #fecaca);
	}
</style>
