<script lang="ts">
	import createWbdExpertInviteLandingState from '$stylist/wbd/function/state/expert-invite-landing/index.svelte';
	import type { RecipeWbdExpertInviteLanding } from '$stylist/wbd/interface/recipe/expert-invite-landing';

	let props: RecipeWbdExpertInviteLanding = $props();
	const state = createWbdExpertInviteLandingState(props);
</script>

<section class="wbd-invite-landing {state.className}">
	<div class="wbd-invite-landing__content">
		<span>Expert invitation</span>
		<h1>{state.sessionTitle}</h1>
		{#if state.expertEmail}
			<p>{state.expertEmail}</p>
		{/if}
		{#if state.alias}
			<strong>{state.alias}</strong>
		{/if}
		{#if state.expiresAt}
			<small>Expires {state.expiresAt}</small>
		{/if}
	</div>
	<div class="wbd-invite-landing__actions">
		<button type="button" onclick={state.declineInvite}>Decline</button>
		<button type="button" class="wbd-invite-landing__accept" onclick={state.acceptInvite}>Accept invite</button>
	</div>
</section>

<style>
	.wbd-invite-landing {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		max-width: 34rem;
		padding: 1.25rem;
		border: 1px solid var(--color-border-primary, #e2e8f0);
		border-radius: 0.5rem;
		background: var(--color-background-primary, #fff);
	}
	.wbd-invite-landing__content {
		display: flex;
		flex-direction: column;
		gap: 0.375rem;
	}
	.wbd-invite-landing__content span,
	.wbd-invite-landing__content small {
		font-size: 0.75rem;
		font-weight: 600;
		color: var(--color-text-tertiary, #64748b);
	}
	.wbd-invite-landing__content h1,
	.wbd-invite-landing__content p {
		margin: 0;
	}
	.wbd-invite-landing__content h1 {
		font-size: 1.25rem;
		color: var(--color-text-primary, #0f172a);
	}
	.wbd-invite-landing__content p {
		font-size: 0.875rem;
		color: var(--color-text-secondary, #475569);
	}
	.wbd-invite-landing__content strong {
		align-self: flex-start;
		padding: 0.25rem 0.5rem;
		border-radius: 999px;
		background: var(--color-background-secondary, #f1f5f9);
		font-size: 0.75rem;
		color: var(--color-text-secondary, #475569);
	}
	.wbd-invite-landing__actions {
		display: flex;
		justify-content: flex-end;
		gap: 0.5rem;
	}
	.wbd-invite-landing__actions button {
		padding: 0.5rem 0.75rem;
		border: 1px solid var(--color-border-primary, #cbd5e1);
		border-radius: 0.375rem;
		background: var(--color-background-primary, #fff);
		font-size: 0.8125rem;
		font-weight: 600;
		color: var(--color-text-primary, #0f172a);
		cursor: pointer;
	}
	.wbd-invite-landing__accept {
		border-color: var(--color-primary-500, #3b82f6) !important;
		background: var(--color-primary-500, #3b82f6) !important;
		color: var(--color-text-inverse, #fff) !important;
	}
</style>
