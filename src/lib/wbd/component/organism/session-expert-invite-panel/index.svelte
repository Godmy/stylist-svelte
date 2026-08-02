<script lang="ts">
	import createWbdSessionExpertInvitePanelState from '$stylist/wbd/function/state/session-expert-invite-panel/index.svelte';
	import type { RecipeWbdSessionExpertInvitePanel } from '$stylist/wbd/interface/recipe/session-expert-invite-panel';

	let props: RecipeWbdSessionExpertInvitePanel = $props();
	const model = createWbdSessionExpertInvitePanelState(props);
	let email = $state('');
</script>

<section class="wbd-expert-invites {model.className}">
	<div class="wbd-expert-invites__header">
		<span>Experts</span>
		<span>{model.joinedCount} joined, {model.invitedCount} invited</span>
	</div>

	<form
		class="wbd-expert-invites__form"
		onsubmit={(event) => {
			event.preventDefault();
			if (!email.trim()) return;
			model.inviteExpert(email.trim());
			email = '';
		}}
	>
		<input type="email" placeholder="expert@company.com" bind:value={email} />
		<button type="submit">Invite</button>
	</form>

	<div class="wbd-expert-invites__list">
		{#each model.experts as expert (expert.id)}
			<div class="wbd-expert-invites__item">
				<div>
					<strong>{expert.name ?? expert.email}</strong>
					<span>{expert.alias ?? 'Alias is hidden from coordinator mapping'}</span>
				</div>
				<small>{expert.status}</small>
				<button type="button" onclick={() => model.resendInvite(expert.id)}>Resend</button>
				<button type="button" onclick={() => model.removeExpert(expert.id)}>Remove</button>
			</div>
		{/each}
	</div>
</section>

<style>
	.wbd-expert-invites {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}
	.wbd-expert-invites__header,
	.wbd-expert-invites__item {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 0.75rem;
	}
	.wbd-expert-invites__header {
		font-size: 0.75rem;
		font-weight: 600;
		color: var(--color-text-secondary, #475569);
	}
	.wbd-expert-invites__form {
		display: flex;
		gap: 0.5rem;
	}
	.wbd-expert-invites__form input {
		min-width: 0;
		flex: 1 1 0%;
		padding: 0.5rem;
		border: 1px solid var(--color-border-primary, #cbd5e1);
		border-radius: 0.375rem;
		font: inherit;
	}
	.wbd-expert-invites__form button,
	.wbd-expert-invites__item button {
		padding: 0.375rem 0.625rem;
		border: 1px solid var(--color-border-primary, #cbd5e1);
		border-radius: 0.375rem;
		background: var(--color-background-primary, #fff);
		font-size: 0.75rem;
		font-weight: 600;
		color: var(--color-text-primary, #0f172a);
		cursor: pointer;
	}
	.wbd-expert-invites__list {
		display: grid;
		gap: 0.5rem;
	}
	.wbd-expert-invites__item {
		padding: 0.625rem;
		border: 1px solid var(--color-border-primary, #e2e8f0);
		border-radius: 0.5rem;
	}
	.wbd-expert-invites__item div {
		display: flex;
		flex-direction: column;
		min-width: 0;
		margin-right: auto;
	}
	.wbd-expert-invites__item strong,
	.wbd-expert-invites__item span {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.wbd-expert-invites__item strong {
		font-size: 0.8125rem;
		color: var(--color-text-primary, #0f172a);
	}
	.wbd-expert-invites__item span,
	.wbd-expert-invites__item small {
		font-size: 0.6875rem;
		color: var(--color-text-tertiary, #64748b);
	}
	@media (max-width: 640px) {
		.wbd-expert-invites__item {
			align-items: stretch;
			flex-direction: column;
		}
	}
</style>
