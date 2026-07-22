<script lang="ts">
	/**
	 * @component MessageBubble
	 * @description Chat message bubble component for displaying messages in a conversation
	 *
	 * SOLID Principles Applied:
	 * - Single Responsibility: Only handles chat message display
	 * - Open/Closed: Extensible through props without modifying source
	 * - Liskov Substitution: Can substitute any message display
	 * - Interface Segregation: Minimal interface via IMessageBubbleProps
	 * - Dependency Inversion: Depends on abstractions (props interface)
	 *
	 * Atomic Design: Atom - Basic UI element for chat message display
	 */

	import type { SlotMessageBubble as IMessageBubbleProps } from '$stylist/chat/interface/slot/message-bubble';
	import createMessageBubbleState from '$stylist/chat/function/state/message-bubble/index.svelte';
	import Avatar from '$stylist/media/component/atom/avatar/index.svelte';

	let props: IMessageBubbleProps = $props();

	const state = createMessageBubbleState(props);
</script>

<div class={state.containerClasses}>
	{#if props.avatar && state.showLeftAvatar}
		<div class={state.avatarContainerClasses}>
			<Avatar src={props.avatar} size="sm" />
		</div>
	{/if}

	<div class={state.wrapperClasses}>
		<div class={state.authorClasses}>{props.author}</div>
		<div class={state.messageClasses}>{props.message}</div>
		{#if props.timestamp}
			<div class={state.timestampClasses}>{props.timestamp}</div>
		{/if}
	</div>

	{#if props.avatar && state.showRightAvatar}
		<div class={state.avatarContainerClasses}>
			<Avatar src={props.avatar} size="sm" />
		</div>
	{/if}
</div>

<style>
	.message-bubble-container {
		display: flex;
	}
	.message-bubble-container--left {
		justify-content: flex-start;
		margin-right: auto;
	}
	.message-bubble-container--right {
		justify-content: flex-end;
		margin-left: auto;
	}
	.message-bubble-wrapper {
		position: relative;
		max-width: 20rem;
		padding: 1rem;
	}
	.message-bubble-wrapper--left {
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0.5rem;
		border-top-left-radius: 0.5rem;
		border-top-right-radius: 0.5rem;
		background-color: var(--color-neutral-100);
		color: var(--color-text-primary);
	}
	.message-bubble-wrapper--right {
		border-bottom-left-radius: 0.5rem;
		border-bottom-right-radius: 0;
		border-top-left-radius: 0.5rem;
		border-top-right-radius: 0.5rem;
		background-color: var(--color-primary-500);
		color: var(--color-text-inverse);
	}
	.message-bubble-wrapper--secondary {
		border-radius: 0.5rem;
		background-color: var(--color-neutral-200);
		color: var(--color-text-secondary);
	}
	.message-bubble-author {
		font-size: 0.875rem;
		font-weight: 600;
		color: var(--color-text-secondary);
	}
	.message-bubble-author--right {
		color: var(--color-primary-100);
	}
	.message-bubble-author--secondary {
		text-align: center;
	}
	.message-bubble-text {
		margin-top: 0.25rem;
		color: var(--color-text-primary);
	}
	.message-bubble-text--right {
		color: var(--color-text-inverse);
	}
	.message-bubble-text--secondary {
		text-align: center;
		color: var(--color-text-secondary);
	}
	.message-bubble-timestamp {
		margin-top: 0.5rem;
		font-size: 0.75rem;
		color: var(--color-text-tertiary);
	}
	.message-bubble-timestamp--right {
		color: var(--color-primary-100);
	}
	.message-bubble-timestamp--secondary {
		text-align: center;
	}
	.message-bubble-avatar {
		display: flex;
	}
	.message-bubble-avatar--left {
		margin-right: 0.75rem;
	}
	.message-bubble-avatar--right {
		margin-left: 0.75rem;
	}
</style>
