<script lang="ts">
	import createWbdDiscussionMessageThreadState from '$stylist/wbd/function/state/discussion-message-thread/index.svelte';
	import type { RecipeWbdDiscussionMessageThread } from '$stylist/wbd/interface/recipe/discussion-message-thread';
	import DiscussionAliasBadge from '$stylist/wbd/component/atom/discussion-alias-badge/index.svelte';

	let props: RecipeWbdDiscussionMessageThread = $props();
	const state = createWbdDiscussionMessageThreadState(props);
</script>

<div class="wbd-message-thread {state.className}">
	{#each state.messages as message (message.id)}
		<article class="wbd-message-thread__item" class:wbd-message-thread__item--reply={message.parentId}>
			<header>
				<DiscussionAliasBadge alias={message.alias} isOwn={message.isOwn} />
				<span>R{message.roundNumber}</span>
				<time>{message.createdAt}</time>
			</header>
			<p>{message.message}</p>
		</article>
	{/each}
</div>

<style>
	.wbd-message-thread {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
	.wbd-message-thread__item {
		display: flex;
		flex-direction: column;
		gap: 0.375rem;
		padding: 0.625rem 0;
		border-bottom: 1px solid var(--color-border-primary, #e2e8f0);
	}
	.wbd-message-thread__item--reply {
		margin-left: 1rem;
		padding-left: 0.75rem;
		border-left: 2px solid var(--color-border-primary, #e2e8f0);
	}
	.wbd-message-thread__item header {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 0.5rem;
	}
	.wbd-message-thread__item header span,
	.wbd-message-thread__item time {
		font-size: 0.6875rem;
		color: var(--color-text-tertiary, #64748b);
	}
	.wbd-message-thread__item p {
		margin: 0;
		font-size: 0.875rem;
		line-height: 1.5;
		color: var(--color-text-secondary, #475569);
	}
</style>
