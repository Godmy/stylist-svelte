<script lang="ts">
	import createWbdInviteEmailPreviewState from '$stylist/wbd/function/state/invite-email-preview/index.svelte';
	import type { RecipeWbdInviteEmailPreview } from '$stylist/wbd/interface/recipe/invite-email-preview';

	let props: RecipeWbdInviteEmailPreview = $props();
	const state = createWbdInviteEmailPreviewState(props);
</script>

<section class="wbd-invite-preview {state.className}">
	<header>
		<span>Invite preview</span>
		<button type="button" onclick={state.sendPreview}>Send preview</button>
	</header>
	<article>
		<p>To: {state.props.recipientEmail}</p>
		<h2>{state.props.sessionTitle}</h2>
		{#if state.props.alias}
			<p>Your discussion alias: {state.props.alias}</p>
		{/if}
		<a href={state.props.inviteUrl}>{state.props.inviteUrl}</a>
	</article>
</section>

<style>
	.wbd-invite-preview {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}
	.wbd-invite-preview header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 1rem;
	}
	.wbd-invite-preview header span {
		font-size: 0.75rem;
		font-weight: 700;
		color: var(--color-text-tertiary, #64748b);
	}
	.wbd-invite-preview button {
		padding: 0.5rem 0.75rem;
		border: 1px solid var(--color-primary-500, #3b82f6);
		border-radius: 0.375rem;
		background: var(--color-primary-500, #3b82f6);
		font-size: 0.8125rem;
		font-weight: 700;
		color: var(--color-text-inverse, #fff);
		cursor: pointer;
	}
	.wbd-invite-preview article {
		display: flex;
		flex-direction: column;
		gap: 0.375rem;
		padding: 0.75rem;
		border: 1px solid var(--color-border-primary, #e2e8f0);
		border-radius: 0.5rem;
		background: var(--color-background-primary, #fff);
	}
	.wbd-invite-preview h2,
	.wbd-invite-preview p {
		margin: 0;
	}
	.wbd-invite-preview h2 {
		font-size: 1rem;
		color: var(--color-text-primary, #0f172a);
	}
	.wbd-invite-preview p,
	.wbd-invite-preview a {
		font-size: 0.8125rem;
		color: var(--color-text-secondary, #475569);
		overflow-wrap: anywhere;
	}
</style>
